package com.s3java.calendarioInteligente.dto.request;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.utils.DateUtils;
import com.s3java.calendarioInteligente.utils.State;

import java.time.LocalDateTime;

public class ProductOrderRequest {


    private String name;

    private Double errorTime;

    private String photoLink;

    private State state;

    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String initialDate;

    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String finishEstimatedDate;

    private Long productId;

    private Client client;

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


    public String getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(String initialDate) {
        this.initialDate = initialDate;
    }

    public String getFinishEstimatedDate() {
        return finishEstimatedDate;
    }

    public void setFinishEstimatedDate(String finishEstimatedDate) {
        this.finishEstimatedDate = finishEstimatedDate;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "ProductOrderRequest{" +
                "name='" + name + '\'' +
                ", errorTime=" + errorTime +
                ", photoLink='" + photoLink + '\'' +
                ", initialDate=" + initialDate +
                ", finishEstimatedDate=" + finishEstimatedDate +
                ", productId=" + productId +
                '}';
    }
}
