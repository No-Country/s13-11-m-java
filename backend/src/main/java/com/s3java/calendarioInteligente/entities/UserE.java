package com.s3java.calendarioInteligente.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.s3java.calendarioInteligente.utils.UserRole;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "USERS")
public class UserE {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ElementCollection(targetClass = UserRole.class, fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    private Set<UserRole> roles;

    @Embedded
    private CommonAttribute commonAttribute ;//= new CommonAttribute()


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

    public Set<UserRole> getRoles() {
        return roles;
    }

    public void setRoles(Set<UserRole> roles) {
        this.roles = roles;
    }

    public CommonAttribute getCommonAttribute() {
        return commonAttribute;
    }

    public void setCommonAttribute(CommonAttribute commonAttribute) {
        this.commonAttribute = commonAttribute;
    }


    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "UserE{" +
                "id=" + id +
                ", roles=" + roles +
                ", commonAttribute=" + commonAttribute +
                '}';
    }
}
