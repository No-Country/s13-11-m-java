package com.s3java.calendarioInteligente.controllers.api;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.mappers.productOrders.ClientMapper;
import com.s3java.calendarioInteligente.services.inter.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clients")
@Validated
public class ClientController {

    private final ClientService clientService;

    private final ClientMapper clientMapper;

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderController.class);


    ClientController(ClientService clientService, ClientMapper clientMapper){
        this.clientService = clientService;

        this.clientMapper = clientMapper;
    }

    @GetMapping("/all")
    @Operation(summary = "Get all clients", description = "Retrieve a list of clients for a company.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<?> getAllClients()
    {
        try {
            List<Client> clients = this.clientService.getAll();
            return ResponseEntity.ok().body(this.clientMapper.ClientsToClientsResponse(clients));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .header("No content", e.getMessage()).build();
        }
    }

    // no requerido
    /*
    @RequestMapping("/update")
    public void updateClients(@RequestBody Client c) throws IllegalAccessException {
       this.clientService.update(c);
    }*/


}
