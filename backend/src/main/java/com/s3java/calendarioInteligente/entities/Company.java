package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Embedded
    private CommonAttribute commonAttribute;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    @JsonManagedReference
    private List<User> employee = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    @Column(name = "product_orders_id")
    @JsonManagedReference

    private List<ProductOrder> productOrders = new ArrayList<>();




    public List<User> getEmployee() {
        return employee;
    }



    public void setEmployee(List<User> employee) {
        this.employee = employee;
    }


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

    public List<ProductOrder> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
        this.productOrders = productOrders;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", commonAttribute=" + commonAttribute +
                ", employee=" + employee +
                ", productOrders=" + productOrders +
                '}';
    }
}
