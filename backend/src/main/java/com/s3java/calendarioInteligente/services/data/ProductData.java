package com.s3java.calendarioInteligente.services.data;

import com.s3java.calendarioInteligente.entities.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "PRODUCT_DATA")
public class ProductData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String idUnico;
    private String name;
    private String instruction;
    @Column(name = "CREATE_DATE")
    private String createDate;
    private String description;


    //  TODO: Ver si cambiar a ENUM (activo, en pausa, finalizado, cancelado)


    @Column(name = "state")
    private Boolean state;
    @Column(name = "is_active")
    private Boolean isActive;
    @Column(name = "time_estimated_completion")
    private String timeEstimatedCompletion;

    @Embedded
    private DataAttributes dataAttributes;


}
