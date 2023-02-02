package com.medfinder.medfinder.service;

import com.medfinder.medfinder.model.Drug;
import com.medfinder.medfinder.repository.DrugRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugService {

    private DrugRepository drugRepository;

    public DrugService(DrugRepository drugRepository) {
        this.drugRepository = drugRepository;
    }

    public List<Drug> getAllDrugs(){
        return drugRepository.findAll();
    }
    public Drug getDrugById(Long id) {
        return drugRepository.findById(id).get();
    }
    public Drug createDrug(Drug drug){
        return drugRepository.save(drug);
    }
    public Drug updateDrug(Drug drug){
        return drugRepository.save(drug);
    }
    public void deleteDrug(Long id){
        drugRepository.deleteById(id);
    }

}
