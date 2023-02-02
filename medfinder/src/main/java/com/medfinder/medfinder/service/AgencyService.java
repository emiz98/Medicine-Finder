package com.medfinder.medfinder.service;

import com.medfinder.medfinder.dto.ResponseHandler;
import com.medfinder.medfinder.entity.Agency;
import com.medfinder.medfinder.entity.Role;
import com.medfinder.medfinder.entity.User;
import com.medfinder.medfinder.repository.AgencyRepository;
import com.medfinder.medfinder.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgencyService {

    private AgencyRepository agencyRepository;
    private UserRepository userRepository;

    public AgencyService(AgencyRepository agencyRepository, UserRepository userRepository) {
        this.agencyRepository = agencyRepository;
        this.userRepository = userRepository;
    }

    public List<Agency> getAllAgencies() {
        return agencyRepository.findAll();
    }

    public Agency getAgencyById(Long id) {
        return agencyRepository.findById(id).get();
    }

    public ResponseEntity<Object> createAgency(Agency agency, String email) {
        Optional<Agency> existingAgency = agencyRepository.findAgencyByName(agency.getName());
        if (!existingAgency.isPresent()) {
            User user = userRepository.findByEmail(email)
                    .orElseThrow();
            Agency agencyObj = Agency.builder()
                    .user(user)
                    .name(agency.getName())
                    .lat(agency.getLat())
                    .lon(agency.getLon())
                    .build();
            agencyRepository.save(agencyObj);

            user.setRole(Role.PHARMA);
            userRepository.save(user);
            return ResponseHandler.generateResponse(
                    "Agency added successfully.",
                    HttpStatus.OK,
                    null, null);
        } else {
            return ResponseHandler.generateResponse(
                    "Agency already exists.",
                    HttpStatus.CONFLICT,
                    null, null);
        }

    }

    public Agency updateAgency(Agency agency) {
        return agencyRepository.save(agency);
    }

    public void deleteAgencyById(Long id) {
        agencyRepository.deleteById(id);
    }
}
