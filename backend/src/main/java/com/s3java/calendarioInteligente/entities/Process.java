package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Process {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Product product;

    @OneToMany
    private List<SubProcess> subProcesses = new ArrayList<>();

    @Embedded
    private ProcessAttributes processAttributes;
}
