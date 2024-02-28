package com.s3java.calendarioInteligente.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "CLIENTS")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private CommonAttribute commonAttribute;


    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_order_id")
    @JsonBackReference
    @JsonIgnore
    private List<ProductOrder> productOrder = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;

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

    public List<ProductOrder> getProductOrder() {
        return productOrder;
    }

    public void setProductOrder(List<ProductOrder> productOrder) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return Objects.equals(id, client.id) && Objects.equals(commonAttribute, client.commonAttribute) && Objects.equals(productOrder, client.productOrder) && Objects.equals(company, client.company);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, commonAttribute, productOrder, company);
    }
}
