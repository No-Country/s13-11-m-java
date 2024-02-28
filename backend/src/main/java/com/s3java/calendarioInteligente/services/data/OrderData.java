package com.s3java.calendarioInteligente.services.data;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.s3java.calendarioInteligente.utils.DateUtils;
import com.s3java.calendarioInteligente.utils.State;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.security.Timestamp;

@Entity
@Table(name = "ORDER_DATA")
public class OrderData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(name = "entry_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp entryDate;
    @Column(name = "error_time")
    private Double errorTime;
    @Column(name = "photo_link")
    private String photoLink;

    @Column(name = "initial_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String initialDate;

    @Column(name = "finish_est_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String finishEstimatedDate;
    @Column(name = "initial_real_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String initialRealDate;  //mismo valor que el primer click en el comienzo del primer proceso o subproceso del producto.
    @Column(name = "finish_real_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String finishRealDate;   //mismo valor que el ultimo click en el final del ultimo proceso o subproceso del producto.
    @Enumerated(EnumType.STRING)
    private State state;  //va cambiando segun se vayan completando todos procesos
    @Column(name = "is_active")
    private Boolean isActive;

    @Embedded
    private DataAttributes dataAttributes;

}
