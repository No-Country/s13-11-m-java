package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table (name = "SUB_PROCESS")
public class SubProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "process_id")
    @JsonBackReference
    private ProductProcess productProcess;

    @Embedded
    private ProcessAttributes subProcessAttributes;

    public SubProcess() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductProcess getProductProcess() {
        return productProcess;
    }

    public void setProductProcess(ProductProcess productProcess) {
        this.productProcess = productProcess;
    }

    public ProcessAttributes getSubProcessAttributes() {
        return subProcessAttributes;
    }

    public void setSubProcessAttributes(ProcessAttributes subProcessAttributes) {
        this.subProcessAttributes = subProcessAttributes;
    }


}
