package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.entity.Agency;
import com.medfinder.medfinder.service.AgencyService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
public class AgencyController {

    private AgencyService agencyService;

    public AgencyController(AgencyService agencyService) {
        this.agencyService = agencyService;
    }

//    @PreAuthorize("hasAnyAuthority('PHARMA', 'ADMIN')")
//    @GetMapping("/agency/{id}")
//    public Agency getAgencyById(@PathVariable Long id){
//        return agencyService.getAgencyById(id);
//    }

    @PreAuthorize("hasAnyAuthority('USER','PHARMA', 'ADMIN')")
    @PostMapping("/agency")
    public ResponseEntity<Object> createAgency(@RequestBody Agency agency, Authentication authentication){
        return agencyService.createAgency(agency,authentication.getName());
    }

    @PreAuthorize("hasAnyAuthority('PHARMA', 'ADMIN')")
    @PutMapping("/agency")
    public Agency updateAgency(@RequestBody Agency agency){
        return agencyService.updateAgency(agency);
    }

    @PreAuthorize("hasAnyAuthority('PHARMA', 'ADMIN')")
    @DeleteMapping("/agency/{id}")
    public void deleteAgencyById(@PathVariable Long id){
        agencyService.deleteAgencyById(id);
    }
}
