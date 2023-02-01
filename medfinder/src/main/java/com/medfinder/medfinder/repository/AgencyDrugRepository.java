package com.medfinder.medfinder.repository;

import com.medfinder.medfinder.model.Agency;
import com.medfinder.medfinder.model.AgencyDrugs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AgencyDrugRepository extends JpaRepository<AgencyDrugs,Long> {
    @Query("select a from AgencyDrugs a where a.drug.id = ?1")
    Optional<AgencyDrugs> findByDrug_Id(Long id);
    @Query("select a from AgencyDrugs a where a.agency.id = ?1")
    List<AgencyDrugs> findByAgency_Id(Long id);
}
