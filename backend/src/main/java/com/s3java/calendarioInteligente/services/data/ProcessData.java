package com.s3java.calendarioInteligente.services.data;

import com.s3java.calendarioInteligente.entities.ProcessAttributes;
import jakarta.persistence.*;

import java.security.Timestamp;

@Entity
@Table(name = "PROCESS_DATA")
public class ProcessData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp dateStart;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp dateEnd;
    @Embedded
    private DataAttributes dataAttributes;
    @Embedded
    private ProcessAttributes processAttributes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public DataAttributes getDataAttributes() {
        return dataAttributes;
    }

    public void setDataAttributes(DataAttributes dataAttributes) {
        this.dataAttributes = dataAttributes;
    }

    public ProcessAttributes getProcessAttributes() {
        return processAttributes;
    }

    public void setProcessAttributes(ProcessAttributes processAttributes) {
        this.processAttributes = processAttributes;
    }
}
