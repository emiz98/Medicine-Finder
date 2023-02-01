package com.medfinder.medfinder.repository;

import com.medfinder.medfinder.model.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AgencyRepository extends JpaRepository<Agency,Long> {
    Optional<Agency> findAgencyByName(String name);
}
