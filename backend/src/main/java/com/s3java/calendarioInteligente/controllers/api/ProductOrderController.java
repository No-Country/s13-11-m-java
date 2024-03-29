package com.s3java.calendarioInteligente.controllers.api;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.exception.exceptions.ProductOrderNotFoundException;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/v1/product-orders")
@Validated
public class ProductOrderController {


    private final ProductOrderService productOrderService;

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderController.class);


    ProductOrderController(ProductOrderService productOrderService){
        this.productOrderService = productOrderService;

    }

    @GetMapping("all")
    @Operation(summary = "Get all orders", description = "Retrieve a list of product orders for a company.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<ProductOrderResponse>> getAllOrders()
            {
        try {
            List<ProductOrderResponse> productOrders = productOrderService.findAllProductOrders();
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .header("No content", e.getMessage()).build();
        }
    }



    @GetMapping("/orders/clients/{clientId}")
    @Operation(summary = "Get all orders by client ID",
            description = "Retrieve a list of product orders for a given client")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<ProductOrderResponse>> getAllOrdersByClient(
            @PathVariable @Valid Long clientId){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByClientId(clientId);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .header("No content", e.getMessage()).build();
        }
    }


    @GetMapping("all/{date}/finish_date")
    @Operation(summary = "Get all orders by finish date",
            description = "Retrieve a list of product orders for a finish date.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<ProductOrderResponse>> getAllProductOrderByFinishDate(
            @Parameter(description = "date")
            @PathVariable
            @Valid
            String date
            ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByFinishDate(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            this.logger.error("Resource not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ArrayList<>());
        }
    }

    @GetMapping("all/{date}/entry_date")
    @Operation(summary = "Get all orders by entry date",
            description = "Retrieve a list of product orders for a entry date.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<ProductOrderResponse>> getAllProductOrderByEntryDate(
            @Parameter(description = "date")
            @PathVariable @Valid String date
    ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByEntry(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            this.logger.error("Resource not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                            new ArrayList<>());
        }
    }

    @GetMapping("all/{date}/initial_date")
    @Operation(summary = "Get all orders by initial date",
            description = "Retrieve a list of product orders for a initial date.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<ProductOrderResponse>> getAllProductOrderByInitialDate(
            @Parameter(description = "date")
            @PathVariable @Valid String date
    ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByInitialDate(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            this.logger.error("Resource not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ArrayList<>());
        }
    }

    @GetMapping("/{orderId}")
    @Operation(summary = "Get one order by order ID", description = "Retrieve a ProductOrder for a given id.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<?> getOrder(
            @Parameter(description = "ID of the order")
            @PathVariable @Valid Long orderId

    ){
        try {
            ProductOrderResponse productOrder = productOrderService.findProductOrderById(orderId);
            return ResponseEntity.ok().body(productOrder);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create")
    @Operation(summary = "Create order", description = "Retrieve a created product orders for a company.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders",
                    content = @Content(mediaType = "application/json",
                            examples = @ExampleObject(value = "{\"orderId\": 1, \"productName\": \"ExampleProduct\"}"))),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<Object> createOrder(
            @RequestBody @Valid ProductOrderRequest productOrderDTO
    ) throws Exception {
            ProductOrderResponse productOrder = productOrderService.createProductOrder(productOrderDTO);
            return new ResponseEntity<>(productOrder, HttpStatus.CREATED);

    }


    @PatchMapping("/update/{orderId}")
    @Operation(summary = "", description = "")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<Object> editOrder(
            @PathVariable Long orderId,
            @RequestBody @Valid  ProductOrderRequest productOrderDTO
    ) throws Exception {

            ProductOrderResponse productOrders = productOrderService
                    .updateProductOrder(orderId, productOrderDTO);
            return ResponseEntity.ok().body(productOrders);

    }

    @DeleteMapping("/delete/{orderId}")
    @Operation(summary = "Get all orders by company ID",
            description = "Retrieve a list of product orders for a given company.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<?> deleteOrder(@PathVariable @Valid Long orderId){
        try {
            productOrderService
                    .deleteProductOrder(orderId);
            return ResponseEntity.accepted().build();
        }
        catch (RuntimeException e){
            this.logger.error("Internal server error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED)
                    .header("Not implemented", e.getMessage()).build();

        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .header("internal server error", e.getMessage()).build();
        }
    }

    //TODO revisar
    @GetMapping("/obtain-finishEstimateDate/{initialDate}/{productId}")
    @Operation(summary = "Get a finish estimated time by a initial date",
            description = "Retrieve a finish estimated date using a initial date and a saved product information")
    public ResponseEntity<?> getFinishEstimatedDate(
            @PathVariable String initialDate,
            @PathVariable Long productId
            ){
        try{
            String finishEstimateDate = this.productOrderService.getFinishEstimatedDate(initialDate, productId);
            return new ResponseEntity<>(finishEstimateDate, HttpStatus.OK);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /*
    @PutMapping("/updateStartDate/{id}")
    public void updateStartDate(
            @PathVariable Long id
    ){
        this.productOrderService.updateStartDate(id);

    }*/

}


