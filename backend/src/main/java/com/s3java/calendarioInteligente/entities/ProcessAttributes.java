package com.s3java.calendarioInteligente.entities;

import com.s3java.calendarioInteligente.utils.State;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
@Embeddable
public class ProcessAttributes {
    @NotNull (message = "name must not be null")
    @NotEmpty (message = "name must not be empty")
    private String name;

//    private Double timeReal;  // cambio el nombre del atributo
    private Double timeEstimatedCompletion;  //Tiempo Interno asignado,
    // suma de tiempos manuales de subprocesos + tiempos de procesos  
    
    @NotNull (message = "state must not be null") 
    @Enumerated(EnumType.STRING)
    private State state; //cambio de boolean a ENUM    
   
    @NotNull (message = "timeReal must not be null")
    private Double timeReal;
    @NotNull (message = "timeAverage must not be null")
    private Double timeAverage;
    @NotNull (message = "timeMargin must not be null")
    private Double timeMargin;
    @NotNull (message = "comment must not be null")
    @NotEmpty (message = "comment must not be empty")
    private String comment;
  
    @NotNull (message = "active must not be null")
    private Boolean active;
    @NotNull (message = "counter must not be null")
    private Integer counter;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public Double getTimeReal() {
//        return timeReal;
//    }
//    public void setTimeReal(Double timeReal) {
//        this.timeReal = timeReal;
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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

//    public Boolean getState() {
//        return state;
//    }
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
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Integer getCounter() {
        return counter;
    }

    public void setCounter(Integer counter) {
        this.counter = counter;
    }
}
