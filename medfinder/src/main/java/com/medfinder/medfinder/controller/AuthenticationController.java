package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.dto.AuthenticationRequest;
import com.medfinder.medfinder.dto.AuthenticationResponse;
import com.medfinder.medfinder.dto.RegisterRequest;
import com.medfinder.medfinder.dto.ValidationRequest;
import com.medfinder.medfinder.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/auth/register")
    public ResponseEntity<Object> registerUser(@RequestBody RegisterRequest request
    ) {
        return service.register(request);
    }
    @PostMapping("/auth/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/auth/validate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody ValidationRequest request
    ) {
        return ResponseEntity.ok(service.validateJWT(request));
    }
}
