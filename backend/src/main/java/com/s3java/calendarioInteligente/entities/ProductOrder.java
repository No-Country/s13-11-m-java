package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.time.LocalDateTime;

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
    private LocalDateTime entryDate;


    @Column(name = "error_time")
    @NotNull
    private Double errorTime;

    @Column(name = "photo_link")
    private String photoLink;

    @Column(name = "initial_date")
    @NotNull
    private LocalDateTime initialDate;

    @Column(name = "finish_est_date")
    private LocalDateTime finishEstimatedDate;

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    @NotNull
    private Product product;

    @OneToOne(mappedBy = "productOrder", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    @Fetch(FetchMode.JOIN)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    @JsonIgnore
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

    public LocalDateTime getEntryDate() {
        return entryDate;
    }

    public void setInitialDate(LocalDateTime initialDate) {
        this.initialDate = initialDate;
    }

    public void setEntryDate(LocalDateTime entryDate) {
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

    public LocalDateTime getInitialDate() {
        return initialDate;
    }

    public LocalDateTime getFinishEstimatedDate() {
        return finishEstimatedDate;
    }

    public void setFinishEstimatedDate(LocalDateTime finishEstimatedDate) {
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
