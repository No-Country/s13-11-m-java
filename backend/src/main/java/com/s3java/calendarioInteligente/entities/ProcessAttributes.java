package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.Embeddable;

import java.nio.DoubleBuffer;

@Embeddable
public class ProcessAttributes {
    private String name;
    private Double timeReal;
    private Double timeAverage;
    private Double timeMargin;
    private String comment;
    private Boolean state;
    private Boolean active;
    private Integer counter;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getTimeReal() {
        return timeReal;
    }

    public void setTimeReal(Double timeReal) {
        this.timeReal = timeReal;
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

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
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
