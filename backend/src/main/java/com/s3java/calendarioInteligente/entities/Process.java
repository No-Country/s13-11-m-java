package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PROCESSES")
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public List<SubProcess> getSubProcesses() {
        return subProcesses;
    }

    public void setSubProcesses(List<SubProcess> subProcesses) {
        this.subProcesses = subProcesses;
    }

    public ProcessAttributes getProcessAttributes() {
        return processAttributes;
    }

    public void setProcessAttributes(ProcessAttributes processAttributes) {
        this.processAttributes = processAttributes;
    }


}
