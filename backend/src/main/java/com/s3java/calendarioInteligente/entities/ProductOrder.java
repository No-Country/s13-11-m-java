package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "PRODUCT_ORDERS")
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_order_id")
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "entry_date")
    private Date entryDate;


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

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "productOrder", cascade = CascadeType.ALL)
    @NotNull
    @JsonManagedReference
    private Client client;



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

    public Date getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(Date entryDate) {
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
                ", product=" + product +
                ", client=" + client +
                '}';
    }
}
