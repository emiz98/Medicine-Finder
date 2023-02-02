package com.medfinder.medfinder.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "agency_drugs")
public class AgencyDrugs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "agency_id")
    Agency agency;

    @ManyToOne
    @JoinColumn(name = "drug_id")
    Drug drug;

    private int stock;
    private double price;
}
