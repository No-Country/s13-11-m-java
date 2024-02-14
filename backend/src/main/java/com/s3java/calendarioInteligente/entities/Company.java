package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Embedded
    private CommonAttribute commonAttribute;

    @OneToMany
    private List<Product> products = new ArrayList<>();

    @OneToMany
    private List<User> employee = new ArrayList<>();


    public List<Product> getProducts() {
        return products;
    }

    public List<User> getEmployee() {
        return employee;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
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


}
