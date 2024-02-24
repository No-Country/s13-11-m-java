package com.s3java.calendarioInteligente.dto.response;

import com.s3java.calendarioInteligente.entities.*;

import java.time.LocalDateTime;


public class ProductOrderResponse {

    private String message;


    private Long id;

    private String name;

    private LocalDateTime entryDate;

    private Double errorTime;

    private String photoLink;

    private LocalDateTime initialDate;

    private LocalDateTime finishEstimatedDate;

    private Client product;

    private Client client;

    public ProductOrderResponse() {}

    public ProductOrderResponse(String message) {
        this.message = message;
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

    public LocalDateTime getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDateTime entryDate) {
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


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public Client getProduct() {
        return product;
    }

    public void setProduct(Client product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public LocalDateTime getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(LocalDateTime initialDate) {
        this.initialDate = initialDate;
    }

    public LocalDateTime getFinishEstimatedDate() {
        return finishEstimatedDate;
    }

    public void setFinishEstimatedDate(LocalDateTime finishEstimatedDate) {
        this.finishEstimatedDate = finishEstimatedDate;
    }

    @Override
    public String toString() {
        return "ProductOrderResponse{" +
                "message='" + message + '\'' +
                ", id=" + id +
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
