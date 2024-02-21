package com.s3java.calendarioInteligente.dto;

import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.entities.Process;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import jakarta.persistence.Column;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ProductOrderDTO {

    private String name;
    private String instruction;
    private String description;
    private Integer totalProduction;
    private Boolean state;
    private Boolean isActive;
    private String timeEstimatedCompletion;
    private List<Process> processes = new ArrayList<>();
    private Company company;

    private Double errorTime;

    private LocalDate initialDate;

    private LocalDate finishEstimatedDate;
    private ProductOrder productOrder;

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

    public Double getErrorTime() {
        return errorTime;
    }

    public void setErrorTime(Double errorTime) {
        this.errorTime = errorTime;
    }

    public LocalDate getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(LocalDate initialDate) {
        this.initialDate = initialDate;
    }

    public LocalDate getFinishEstimatedDate() {
        return finishEstimatedDate;
    }

    public void setFinishEstimatedDate(LocalDate finishEstimatedDate) {
        this.finishEstimatedDate = finishEstimatedDate;
    }

    public ProductOrder getProductOrder() {
        return productOrder;
    }

    public void setProductOrder(ProductOrder productOrder) {
        this.productOrder = productOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductOrderDTO that = (ProductOrderDTO) o;
        return Objects.equals(name, that.name) && Objects.equals(instruction, that.instruction) && Objects.equals(description, that.description) && Objects.equals(totalProduction, that.totalProduction) && Objects.equals(state, that.state) && Objects.equals(isActive, that.isActive) && Objects.equals(timeEstimatedCompletion, that.timeEstimatedCompletion) && Objects.equals(processes, that.processes) && Objects.equals(company, that.company) && Objects.equals(productOrder, that.productOrder);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, instruction, description, totalProduction, state, isActive, timeEstimatedCompletion, processes, company, productOrder);
    }

    @Override
    public String toString() {
        return "ProductOrderDTO{" +
                "name='" + name + '\'' +
                ", instruction='" + instruction + '\'' +
                ", description='" + description + '\'' +
                ", totalProduction=" + totalProduction +
                ", state=" + state +
                ", isActive=" + isActive +
                ", timeEstimatedCompletion='" + timeEstimatedCompletion + '\'' +
                ", processes=" + processes +
                ", company=" + company +
                ", productOrder=" + productOrder +
                '}';
    }
}
