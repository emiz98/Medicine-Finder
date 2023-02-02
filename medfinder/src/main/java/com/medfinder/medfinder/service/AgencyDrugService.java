package com.medfinder.medfinder.service;

import com.medfinder.medfinder.entity.AgencyDrug;
import com.medfinder.medfinder.repository.AgencyDrugRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AgencyDrugService {

    private final AgencyDrugRepository agencyDrugRepository;

    public List<AgencyDrug> getDrugsByAgency(Long agencyId){

        return  agencyDrugRepository.findByAgency_Id(agencyId);
    }

    public AgencyDrug createAgencyDrug(AgencyDrug agencyDrugs){
        Optional<AgencyDrug> existingAgencyDrug = agencyDrugRepository.findByDrug_Id(agencyDrugs.getDrug().getId());
        if(!existingAgencyDrug.isPresent()){
            return agencyDrugRepository.save(agencyDrugs);
        }else{
            return null;
        }

    }

    public AgencyDrug updateAgencyDrug(AgencyDrug agencyDrug) {
        return agencyDrugRepository.save(agencyDrug);
    }

    public void deleteAgencyDrugById(Long id) {
        agencyDrugRepository.deleteById(id);
    }
}
