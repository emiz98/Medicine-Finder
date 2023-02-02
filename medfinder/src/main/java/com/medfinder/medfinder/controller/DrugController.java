package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.entity.Drug;
import com.medfinder.medfinder.service.DrugService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class DrugController {

    private DrugService drugService;

    public DrugController(DrugService drugService) {
        this.drugService = drugService;
    }

    @PreAuthorize("hasAnyAuthority('PHARMA', 'ADMIN')")
    @GetMapping("/drugs")
    public List<Drug> getDrugs(){
        return drugService.getAllDrugs();
    }

    @PreAuthorize("hasAnyAuthority('PHARMA', 'ADMIN')")
    @GetMapping("/drug/{id}")
    public Drug getDrugById(@PathVariable Long id){
        return drugService.getDrugById(id);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/drug")
    public Drug createDrug(@RequestBody Drug drug){
        return drugService.createDrug(drug);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/drug/{id}")
    public void deleteDrug(@PathVariable Long id){
        drugService.deleteDrug(id);
    }

    @PutMapping("/drug")
    public Drug updateDrug(@RequestBody Drug drug){
        return drugService.updateDrug(drug);
    }
}
