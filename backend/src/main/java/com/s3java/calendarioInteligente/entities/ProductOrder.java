package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "PRODUCT_ORDERS")
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "entry_date")
    private LocalDate entryDate;


    @Column(name = "error_time")
    @NotNull
    private Double errorTime;

    @Column(name = "photo_link")
    private String photoLink;

    @Column(name = "initial_date")
    @NotNull
    private LocalDate initialDate;

    @Column(name = "finish_est_date")
    private LocalDate finishEstimatedDate;

    @Column(name = "is_active")
    private Boolean isActive;

    @OneToOne
    @JoinColumn(name = "product_id")
    @NotNull
    private Product product;

    @OneToOne(mappedBy = "productOrder", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonBackReference
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;


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

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }


    public void setClient(Client client) {
        this.client = client;
    }

    public Double getErrorTime() {
        return errorTime;
    }

    public void setErrorTime(Double errorTime) {
        this.errorTime = errorTime;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
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

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean active) {
        isActive = active;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "ProductOrder{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", entryDate=" + entryDate +
                ", errorTime=" + errorTime +
                ", photoLink='" + photoLink + '\'' +
                ", initialDate=" + initialDate +
                ", finishEstimatedDate=" + finishEstimatedDate +
                ", isActive=" + isActive +
                ", product=" + product +
                ", client=" + client +
                ", company=" + company +
                '}';
    }
}
