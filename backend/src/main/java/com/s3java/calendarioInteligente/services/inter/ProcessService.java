package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import org.springframework.http.ResponseEntity;

public interface ProcessService {

    ResponseEntity<?> getAllProcess();
    ResponseEntity<?> getProcessByID(Long processID);
}
