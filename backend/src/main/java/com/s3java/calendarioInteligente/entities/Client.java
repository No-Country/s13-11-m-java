package com.s3java.calendarioInteligente.entities;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "CLIENTS")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private CommonAttribute commonAttribute;


    @OneToOne(fetch = FetchType.LAZY)
    @JsonManagedReference
    private ProductOrder productOrder;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CommonAttribute getCommonAttribute() {
        return commonAttribute;
    }

    public void setCommonAttribute(CommonAttribute commonAttribute) {
        this.commonAttribute = commonAttribute;
    }

    public ProductOrder getProductOrder() {
        return productOrder;
    }

    public void setProductOrder(ProductOrder productOrder) {
        this.productOrder = productOrder;
    }



    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", commonAttribute=" + commonAttribute +
                ", productOrder=" + productOrder +
                '}';
    }
}
