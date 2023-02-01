package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.model.Drug;
import com.medfinder.medfinder.service.DrugService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class DrugController {

    private DrugService drugService;

    public DrugController(DrugService drugService) {
        this.drugService = drugService;
    }

    @GetMapping("/drug/all")
    public List<Drug> getDrugs(){
        return drugService.getAllDrugs();
    }

    @GetMapping("/drug/{id}")
    public Drug getDrugById(@PathVariable Long id){
        return drugService.getDrugById(id);
    }

    @PostMapping("/drug/create")
    public Drug createDrug(@RequestBody Drug drug){
        return drugService.createDrug(drug);
    }

    @DeleteMapping("/drug/delete/{id}")
    public void deleteDrug(@PathVariable Long id){
        drugService.deleteDrug(id);
    }

    @PostMapping("/drug/update")
    public Drug updateDrug(@RequestBody Drug drug){
        return drugService.updateDrug(drug);
    }
}
