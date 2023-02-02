package com.medfinder.medfinder.repository;

import com.medfinder.medfinder.entity.AgencyDrug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AgencyDrugRepository extends JpaRepository<AgencyDrug,Long> {
    @Query("select a from AgencyDrug a where a.drug.id = ?1")
    Optional<AgencyDrug> findByDrug_Id(Long id);
    @Query("select a from AgencyDrug a where a.agency.id = ?1")
    List<AgencyDrug> findByAgency_Id(Long id);
}
