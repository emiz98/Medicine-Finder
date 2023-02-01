package com.medfinder.medfinder.service;

import com.medfinder.medfinder.model.Agency;
import com.medfinder.medfinder.model.AgencyDrugs;
import com.medfinder.medfinder.model.Drug;
import com.medfinder.medfinder.repository.AgencyDrugRepository;
import com.medfinder.medfinder.repository.AgencyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AgencyDrugService {

    private final AgencyDrugRepository agencyDrugRepository;

    public List<AgencyDrugs> getDrugsByAgency(Long agencyId){

        return  agencyDrugRepository.findByAgency_Id(agencyId);
    }

    public AgencyDrugs createAgencyDrug(AgencyDrugs agencyDrugs){
        Optional<AgencyDrugs> existingAgencyDrug = agencyDrugRepository.findByDrug_Id(agencyDrugs.getDrug().getId());
        if(!existingAgencyDrug.isPresent()){
            return agencyDrugRepository.save(agencyDrugs);
        }else{
            return null;
        }

    }
}
