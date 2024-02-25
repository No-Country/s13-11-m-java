package com.s3java.calendarioInteligente.entities;

import com.s3java.calendarioInteligente.utils.RoleType;
import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class RoleE {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "role")
    @Enumerated(value = EnumType.STRING)
    private RoleType name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public RoleType getName() {
        return name;
    }

    public void setName(RoleType name) {
        this.name = name;
    }
}
