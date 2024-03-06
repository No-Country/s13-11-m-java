package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import com.s3java.calendarioInteligente.utils.State;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PRODUCT")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @NotEmpty
    @Column(unique = true)
    private String idUnico;

//    @NotBlank
    private String name;

//    @NotBlank
    private String instruction;

    @Column(name = "CREATE_DATE")
    private String createDate;

//    @NotBlank
    private String description;


    //  TODO: Ver si cambiar a ENUM (activo, en pausa, finalizado, cancelado)


//    @Column(name = "state")
//    private Boolean state;
@Enumerated(EnumType.STRING)
@Column(name = "state")
private State state;

    @Column(name = "is_active")
    private Boolean isActive;

//    @NotBlank
    @Column(name = "time_estimated_completion")
    private Double timeEstimatedCompletion;
//    private String timeEstimatedCompletion;

    private Double timeAverage;  //tiempo promedio anual, calculado desde el historico de procesos o subprocesos
    private Double timeMargin;   //cuantos minutos por encima o por debajo es aceptable

    
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "product", orphanRemoval = true, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<ProductProcess> productProcesses = new ArrayList<>();

    /*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    @JsonBackReference
    private Company company;*/

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ProductOrder> productOrders;


    public Product() {
    }


    public Product(String idUnico, String name, String instruction, String description, State state, Boolean isActive, Double timeEstimatedCompletion){
        this.idUnico = idUnico;
        this.name = name;
        this.instruction = instruction;
        this.description = description;
        this.state = state; //cambio de boolean a ENUM
        this.isActive = isActive;
        this.timeEstimatedCompletion = timeEstimatedCompletion;  //cambio de String a Double
    }

    public List<ProductProcess> getProductProcesses() {
        return productProcesses;
    }

    public void setProductProcesses(List<ProductProcess> productProcesses) {
        this.productProcesses = productProcesses;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdUnico() {
        return idUnico;
    }

    public void setIdUnico(String idUnico) {
        this.idUnico = idUnico;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

//    public Boolean getState() {
//        return state;
//    }
//
//    public void setState(Boolean state) {
//        this.state = state;
//    }
public State getState() {
    return state;
}
public void setState(State state) {
    this.state = state;
}
    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

//    public String getTimeEstimatedCompletion() {
//        return timeEstimatedCompletion;
//    }
//
//    public void setTimeEstimatedCompletion(String timeEstimatedCompletion) {
//        this.timeEstimatedCompletion = timeEstimatedCompletion;
//    }
    public Double getTimeEstimatedCompletion() {
        return timeEstimatedCompletion;
    }
    public void setTimeEstimatedCompletion(Double timeEstimatedCompletion) {
        this.timeEstimatedCompletion = timeEstimatedCompletion;
    }
    public Double getTimeAverage() {
        return timeAverage;
    }
    public void setTimeAverage(Double timeAverage) {
        this.timeAverage = timeAverage;
    }
    public Double getTimeMargin() {
        return timeMargin;
    }
    public void setTimeMargin(Double timeMargin) {
        this.timeMargin = timeMargin;
    }

    @JsonIgnore
    public List<ProductOrder> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
        this.productOrders = productOrders;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", instruction='" + instruction + '\'' +
                ", description='" + description + '\'' +
                ", state=" + state +
                ", isActive=" + isActive +
                ", timeEstimatedCompletion='" + timeEstimatedCompletion + '\'' +
                // ", productOrder=" + productOrder +
                '}';
    }
    @PrePersist
    public void onPrePersist() {
        this.setCreateDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE));
    }
}
