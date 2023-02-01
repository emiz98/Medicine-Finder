package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.model.Agency;
import com.medfinder.medfinder.service.AgencyService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class AgencyController {

    private AgencyService agencyService;

    public AgencyController(AgencyService agencyService) {
        this.agencyService = agencyService;
    }

//    @GetMapping("/agency/all")
//    public List<Agency> getAllAgencies(){
//        return agencyService.getAllAgencies();
//    }

    @GetMapping("/agency/{id}")
    public Agency getAgencyById(@PathVariable Long id){
        return agencyService.getAgencyById(id);
    }

    @PostMapping("/agency/create")
    public ResponseEntity<Object> createAgency(@RequestBody Agency agency){
        return agencyService.createAgency(agency);
    }

    @PostMapping("/agency/update")
    public Agency updateAgency(@RequestBody Agency agency){
        return agencyService.updateAgency(agency);
    }

    @DeleteMapping("/agency/delete/{id}")
    public void deleteAgencyById(@PathVariable Long id){
        agencyService.deleteAgencyById(id);
    }
}
