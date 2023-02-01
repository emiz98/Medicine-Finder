package com.medfinder.medfinder.service;

import com.medfinder.medfinder.dto.ResponseHandler;
import com.medfinder.medfinder.model.Agency;
import com.medfinder.medfinder.repository.AgencyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgencyService {

    private final AgencyRepository agencyRepository;

    public AgencyService(AgencyRepository agencyRepository) {
        this.agencyRepository = agencyRepository;
    }

    public List<Agency> getAllAgencies(){
        return agencyRepository.findAll();
    }
    public Agency getAgencyById(Long id) {
        return agencyRepository.findById(id).get();
    }
    public ResponseEntity<Object> createAgency(Agency agency){
        Optional<Agency> existingAgency = agencyRepository.findAgencyByName(agency.getName());
        if(!existingAgency.isPresent()){
            return ResponseHandler.generateResponse(
                    "Agency added successfully.",
                    HttpStatus.OK,
                    agencyRepository.save(agency));
        }else{
            return ResponseHandler.generateResponse(
                    "Agency already exists.",
                    HttpStatus.CONFLICT,
                    null);
        }

    }
    public Agency updateAgency(Agency agency){
        Agency existingAgency = agencyRepository.findById(agency.getId()).get();

        existingAgency.setName(agency.getName());
        existingAgency.setLat(agency.getLat());
        existingAgency.setLon(agency.getLon());
        return agencyRepository.save(agency);
    }
    public void deleteAgencyById(Long id){
        agencyRepository.deleteById(id);
    }
}
