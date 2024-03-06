package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import org.springframework.http.ResponseEntity;

public interface SubProcessService {

    ResponseEntity<?> getAllSubProcesses();
    ResponseEntity<?> updateByID(SubProcess updatedSubProcess, Long subProcessIDToUpdate);

}
