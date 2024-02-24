package com.s3java.calendarioInteligente.dto.request;


import java.time.LocalDateTime;

public class ProductOrderRequest {


    private String name;

    private Double errorTime;

    private String photoLink;

    private LocalDateTime initialDate;

    private LocalDateTime finishEstimatedDate;

    private Long productId;

    private Long clientId;

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

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
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
                ", clientId=" + clientId +
                '}';
    }
}
