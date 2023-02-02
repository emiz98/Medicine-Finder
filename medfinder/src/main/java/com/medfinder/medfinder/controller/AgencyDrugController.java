package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.entity.AgencyDrug;
import com.medfinder.medfinder.repository.AgencyDrugRepository;
import com.medfinder.medfinder.service.AgencyDrugService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/v1")
public class AgencyDrugController {

    private AgencyDrugService agencyDrugService;
    private final AgencyDrugRepository agencyDrugRepository;

    public AgencyDrugController(AgencyDrugService agencyDrugService,
                                AgencyDrugRepository agencyDrugRepository) {
        this.agencyDrugService = agencyDrugService;
        this.agencyDrugRepository = agencyDrugRepository;
    }

    @GetMapping("/agency/drugs/{agencyID}")
    public List<AgencyDrug> z(@PathVariable Long agencyID){
        return agencyDrugService.getDrugsByAgency(agencyID);
    }

    @PostMapping("/agency/drug")
    public AgencyDrug createAgencyDrug(@RequestBody AgencyDrug agencyDrugs){
        return agencyDrugService.createAgencyDrug(agencyDrugs);
    }

    @PutMapping("/agency/drug")
    public AgencyDrug updateAgencyDrug(@RequestBody AgencyDrug agencyDrug){
        return agencyDrugService.updateAgencyDrug(agencyDrug);
    }

    @DeleteMapping("/agency/drug/{id}")
    public void deleteAgencyById(@PathVariable Long id){
        agencyDrugService.deleteAgencyDrugById(id);
    }
}
