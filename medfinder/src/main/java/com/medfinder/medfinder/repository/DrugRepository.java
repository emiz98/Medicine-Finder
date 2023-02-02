package com.medfinder.medfinder.repository;

import com.medfinder.medfinder.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugRepository extends JpaRepository<Drug,Long> {
}
