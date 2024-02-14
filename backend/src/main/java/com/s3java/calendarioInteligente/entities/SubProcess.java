package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.*;

@Entity
@Table (name = "sub_process")
public class SubProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Process process;

    @Embedded
    private ProcessAttributes processAttributes;
}
