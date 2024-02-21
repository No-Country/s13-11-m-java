package com.s3java.calendarioInteligente.dto.request;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.Date;

public class ProductOrderRequest {


    private String name;

    private Double errorTime;

    private String photoLink;

    private LocalDate initialDate;

    private LocalDate finishEstimatedDate;

    private Product product;

    private ClientRequest client;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public ClientRequest getClient() {
        return client;
    }

    public void setClient(ClientRequest client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "ProductOrderRequest{" +
                "name='" + name + '\'' +
                ", errorTime=" + errorTime +
                ", photoLink='" + photoLink + '\'' +
                ", initialDate=" + initialDate +
                ", finishEstimatedDate=" + finishEstimatedDate +
                ", product=" + product +
                ", client=" + client +
                '}';
    }
}
