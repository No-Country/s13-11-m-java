package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Null;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PRODUCT")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String instruction;
    private String description;
    @Column(name = "total_production")
    private Integer totalProduction;

    //  TODO: Ver si cambiar a ENUM (activo, en pausa, finalizado, cancelado)
    @Column(name = "state")
    private Boolean state;
    @Column(name = "is_active")
    private Boolean isActive;
    @Column(name = "time_estimated_completion")
    private String timeEstimatedCompletion;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "product")
    @JsonManagedReference
    private List<Process> processes = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;

    @OneToOne()
    @JsonIgnore
    @Null
    private ProductOrder productOrder;

    public Product() {
    }

    public Product(Long id, String name, String instruction, String description, Integer totalProduction, Boolean state, Boolean isActive, String timeEstimatedCompletion) {
        this.id = id;
        this.name = name;
        this.instruction = instruction;
        this.description = description;
        this.totalProduction = totalProduction;
        this.state = state;
        this.isActive = isActive;
        this.timeEstimatedCompletion = timeEstimatedCompletion;
    }

    public List<Process> getProcesses() {
        return processes;
    }

    public void setProcesses(List<Process> processes) {
        this.processes = processes;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getTotalProduction() {
        return totalProduction;
    }

    public void setTotalProduction(Integer totalProduction) {
        this.totalProduction = totalProduction;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public String getTimeEstimatedCompletion() {
        return timeEstimatedCompletion;
    }

    public void setTimeEstimatedCompletion(String timeEstimatedCompletion) {
        this.timeEstimatedCompletion = timeEstimatedCompletion;
    }

    public ProductOrder getProductOrder() {
        return productOrder;
    }

    public void setProductOrder(ProductOrder productOrder) {
        this.productOrder = productOrder;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", instruction='" + instruction + '\'' +
                ", description='" + description + '\'' +
                ", totalProduction=" + totalProduction +
                ", state=" + state +
                ", isActive=" + isActive +
                ", timeEstimatedCompletion='" + timeEstimatedCompletion + '\'' +
                ", processes=" + processes +
                ", company=" + company +
               // ", productOrder=" + productOrder +
                '}';
    }
}
