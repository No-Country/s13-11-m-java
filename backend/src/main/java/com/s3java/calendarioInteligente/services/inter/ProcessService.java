package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import org.springframework.http.ResponseEntity;

public interface ProcessService {

    ResponseEntity<?> getAllProcess();
    ResponseEntity<?> getProcessByID(Long processID);
    ResponseEntity<?> deleteByID(Long processID);
    ResponseEntity<?> updateByID(ProductProcess updatedProcess, Long processIDToUpdate);
    public ResponseEntity<?> addSubProcessToProcess(SubProcess subProcess, Long processID);
}
