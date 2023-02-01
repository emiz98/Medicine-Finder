package com.medfinder.medfinder.controller;

import com.medfinder.medfinder.model.AgencyDrugs;
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

    @GetMapping("drugs/{agencyID}")
    public List<AgencyDrugs> z(@PathVariable Long agencyID){
        return agencyDrugService.getDrugsByAgency(agencyID);
    }

    @PostMapping("drugs/create")
    public AgencyDrugs createAgencyDrug(@RequestBody AgencyDrugs agencyDrugs){
        System.out.println(agencyDrugs);
        return agencyDrugService.createAgencyDrug(agencyDrugs);
    }
}
