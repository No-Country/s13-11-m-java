package com.s3java.calendarioInteligente.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.s3java.calendarioInteligente.utils.DateUtils;
import com.s3java.calendarioInteligente.utils.State;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.time.LocalDateTime;
import java.sql.Timestamp;

@Entity
@Table(name = "PRODUCT_ORDERS")
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
//    @NotNull
    private String name;

    @Column(name = "entry_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String entryDate;


    @Column(name = "error_time")
//    @NotNull
    private Double errorTime;

    @Column(name = "photo_link")
    private String photoLink;

    @Column(name = "initial_date")
//    @NotNull
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String initialDate;

    @Column(name = "finish_est_date")
    @JsonFormat(pattern = DateUtils.FORMAT_DATE_TIME)
    private String finishEstimatedDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "state")
    private State state;   //cambio de boolean a ENUM y se copia como nuevo attributo, setters y getter generados

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
//    @NotNull
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference
    @Fetch(FetchMode.JOIN)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    @JsonIgnore
    private Company company;

    //nuevos campos para calculo de tiempoReal de productos
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp dateStart;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp dateEnd;

    public Timestamp getDateStart() {
        return dateStart;
    }
    public void setDateStart(Timestamp dateStart) {
        this.dateStart = dateStart;
    }

    public Timestamp getDateEnd() {
        return dateEnd;
    }
    public void setDateEnd(Timestamp dateEnd) {
        this.dateEnd = dateEnd;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }


    public void setClient(Client client) {
        this.client = client;
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



    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean active) {
        isActive = active;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(String entryDate) {
        this.entryDate = entryDate;
    }

    public String getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(String initialDate) {
        this.initialDate = initialDate;
    }

    public String getFinishEstimatedDate() {
        return finishEstimatedDate;
    }

    public void setFinishEstimatedDate(String finishEstimatedDate) {
        this.finishEstimatedDate = finishEstimatedDate;
    }

    @Override
    public String toString() {
        return "ProductOrder{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", entryDate=" + entryDate +
                ", errorTime=" + errorTime +
                ", photoLink='" + photoLink + '\'' +
                ", initialDate=" + initialDate +
                ", finishEstimatedDate=" + finishEstimatedDate +
                ", isActive=" + isActive +
                ", product=" + product +
                ", client=" + client +
                ", company=" + company +
                '}';
    }
}
