package com.s3java.calendarioInteligente.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.s3java.calendarioInteligente.entities.*;
import com.s3java.calendarioInteligente.utils.DateUtils;

import java.time.LocalDateTime;


public class ProductOrderResponse {

    private Long id;

    private String name;

    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private LocalDateTime entryDate;

    private Double errorTime;

    private String photoLink;

    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private LocalDateTime initialDate;

    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private LocalDateTime finishEstimatedDate;

    private Product product;

    private Client client;

    public ProductOrderResponse() {}


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
                ", id=" + id +
                ", name='" + name + '\'' +
                ", entryDate=" + entryDate +
                ", errorTime=" + errorTime +
                ", photoLink='" + photoLink + '\'' +
                ", initialDate=" + initialDate +
                ", finishEstimatedDate=" + finishEstimatedDate +
                ", client=" + client +
                '}';
    }
}
