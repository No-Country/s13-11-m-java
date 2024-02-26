package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import com.s3java.calendarioInteligente.repositories.ProcessRepository;
import com.s3java.calendarioInteligente.services.inter.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
public class ProcessServiceImpl  implements ProcessService {

    @Autowired
    private ProcessRepository processRepository;


    /*TODO: Analizar si hacer un objeto de respuesta, en ves de enviar el objeto de modelo.
    Podría ayudar a la legibilidad del código también, y que se pueda editar fácil lo que se quiere devolver
    */

    @Override
    public ResponseEntity<?> getAllProcess() {
        return new ResponseEntity<>(processRepository.findAll(), HttpStatus.OK);
    }


    @Override
    public ResponseEntity<?> getProcessByID(Long processID) {
        Optional<ProductProcess> foundProcess = processRepository.findById(processID);
        if (foundProcess.isPresent()){
            return new ResponseEntity<>(foundProcess.get(), HttpStatus.OK);
        }
        ////TODO: Crear ProcessNotFoundException
        return new ResponseEntity<>("No process found", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteByID(Long processID) {
        try {
            processRepository.deleteById(processID);
            //Revisar si es necesario hacer un mensaje distinto
            return new ResponseEntity<>("Process Deleted", HttpStatus.OK);
        } catch (Exception e){
            //TODO: Crear ProcessNotFoundException
            return new ResponseEntity<>("Process Not found", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> updateByID(ProductProcess updatedProcess, Long processIDToUpdate) {
        Optional<ProductProcess> foundProcess = processRepository.findById(processIDToUpdate);
        if (foundProcess.isPresent()){
            ProductProcess processToUpdate = foundProcess.get();

            //Solo actualizo los atributos, lo de relaciones es de otro endpoints
            processToUpdate.setProcessAttributes(updatedProcess.getProcessAttributes());
            return new ResponseEntity<>(processRepository.save(processToUpdate), HttpStatus.OK);
        }
        //TODO: Añadir mejor manejo de excepciones
        return new ResponseEntity<>("Product Not Found", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> addSubProcessToProcess(SubProcess subProcess, Long processID) {
        Optional<ProductProcess> foundProcess =  processRepository.findById(processID);
        if (foundProcess.isPresent()) {
            ProductProcess process = foundProcess.get();
            List<SubProcess> subProcessList = process.getSubProcesses();
            subProcessList.add(subProcess);
            process.setSubProcesses(subProcessList);
            subProcess.setProductProcess(process);
            return new ResponseEntity<>(processRepository.save(process), HttpStatus.OK);
        }
        //TODO: Añadir mejor manejo de excepciones
        return new ResponseEntity<>("Process Not Found", HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<?> deleteSubProcessFromProcess(Long processID, Long subprocessID) {
        Optional<ProductProcess> foundProcess =  processRepository.findById(processID);
        if (foundProcess.isPresent()) {
            ProductProcess process = foundProcess.get();
            List<SubProcess> subProcessList = process.getSubProcesses();
            subProcessList.removeIf(p -> Objects.equals(p.getId(), subprocessID));
            process.setSubProcesses(subProcessList);
            return new ResponseEntity<>(processRepository.save(process), HttpStatus.OK);
        }
        return new ResponseEntity<>("Process Not Found", HttpStatus.NOT_FOUND);
    }
}
