package com.s3java.calendarioInteligente.controllers.api;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/v1/product-orders")
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
            List<ProductOrderResponse> productOrders = productOrderService.findAllProducts();
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
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
            @PathVariable Long clientId){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByClientId(clientId);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
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
            @PathVariable LocalDate date
            ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByFinishDate(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
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
            @PathVariable LocalDate date
    ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByEntry(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
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
            @PathVariable LocalDate date
    ){
        try {
            List<ProductOrderResponse> productOrders = productOrderService
                    .findProductOrdersByInitialDate(date);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/{orderId}")
    @Operation(summary = "Get one order by order ID", description = "Retrieve a ProductOrder for a given id.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<ProductOrderResponse> getOrder(
            @Parameter(description = "ID of the order")
            @PathVariable Long orderId

    ){
        try {
            ProductOrderResponse productOrder = productOrderService.findProductOrderById(orderId);
            return ResponseEntity.ok().body(productOrder);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
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
    public ResponseEntity<ProductOrderResponse> createOrder(
            @RequestBody ProductOrderRequest productOrderDTO

    ){
        try {
            ProductOrderResponse productOrder = productOrderService.createProductOrder(productOrderDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(productOrder);
        } catch (Exception e) {
            this.logger.error(e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }


    @PatchMapping("/update/{orderId}")
    @Operation(summary = "", description = "")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<ProductOrderResponse> editOrder(
            @PathVariable Long orderId,
            @RequestBody  ProductOrderRequest productOrderDTO
    ){
        try {
            ProductOrderResponse productOrders = productOrderService
                    .updateProductOrder(orderId, productOrderDTO);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
        }
    }

    @DeleteMapping("/delete/{orderId}")
    @Operation(summary = "Get all orders by company ID", description = "Retrieve a list of product orders for a given company.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successfully retrieved orders"),
            @ApiResponse(responseCode = "204", description = "No content available"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<?> deleteOrder(@PathVariable Long orderId){
        try {
            productOrderService
                    .deleteProductOrder(orderId);
            return ResponseEntity.accepted().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
        }
    }

}
