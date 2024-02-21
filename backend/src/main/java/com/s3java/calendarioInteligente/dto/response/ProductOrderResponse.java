package com.s3java.calendarioInteligente.dto.response;

import com.s3java.calendarioInteligente.entities.*;


import java.time.LocalDate;
import java.util.Date;


public class ProductOrderResponse {


    private Long id;

    private String name;

    private Date entryDate;

    private Double errorTime;

    private String photoLink;

    private LocalDate initialDate;

    private LocalDate finishEstimatedDate;

    private Product product;

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
}
