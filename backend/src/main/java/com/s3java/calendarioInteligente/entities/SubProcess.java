package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.*;

@Entity
@Table (name = "SUB_PROCESS")
public class SubProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Process process;

    @Embedded
    private ProcessAttributes processAttributes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Process getProcess() {
        return process;
    }

    public void setProcess(Process process) {
        this.process = process;
    }

    public ProcessAttributes getProcessAttributes() {
        return processAttributes;
    }

    public void setProcessAttributes(ProcessAttributes processAttributes) {
        this.processAttributes = processAttributes;
    }
}
