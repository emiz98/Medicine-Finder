package com.medfinder.medfinder.service;

import com.medfinder.medfinder.config.JwtService;
import com.medfinder.medfinder.dto.*;
import com.medfinder.medfinder.model.Role;
import com.medfinder.medfinder.model.User;
import com.medfinder.medfinder.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<Object> register(RegisterRequest request) {
        Optional<User> existingUser = repository.findByEmail(request.getEmail());
        if(!existingUser.isPresent()){
            var user = User.builder()
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(request.getRole())
                    .build();
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);

            return ResponseHandler.generateResponse(
                    "User created successfully.",
                    HttpStatus.OK,
                    jwtToken);
        }else{
            return ResponseHandler.generateResponse("User already exists.", HttpStatus.CONFLICT, null);
        }

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }

    public AuthenticationResponse validateJWT(ValidationRequest request){
        String userEmail = jwtService.getEmailFromClaim(request.getToken());
        if(!userEmail.isEmpty()){
            User user = repository.findByEmail(userEmail)
                    .orElseThrow();
            AuthenticationResponse returnUser = AuthenticationResponse.builder()
                    .email(user.getEmail())
                    .token(request.getToken())
                    .role(user.getRole())
                    .build();
            return returnUser;
        }
        return  null;
    }
}