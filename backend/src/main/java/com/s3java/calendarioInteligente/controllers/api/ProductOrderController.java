package com.s3java.calendarioInteligente.controllers.api;

import com.s3java.calendarioInteligente.dto.ProductOrderDTO;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/v1/product-orders")
public class ProductOrderController {


    private final ProductOrderService productOrderService;


    ProductOrderController(ProductOrderService productOrderService){
        this.productOrderService = productOrderService;

    }

    @GetMapping("all/{companyId}")
    public ResponseEntity<List<ProductOrderDTO>> getAllOrders(@PathVariable Long companyId){
        try {
            List<ProductOrderDTO> productOrders = productOrderService.findAllProducts(companyId);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }


    @GetMapping("/orders/clients/{clientId}/company/{companyId}")
    public ResponseEntity<List<ProductOrderDTO>> getAllOrdersByClient(
            @PathVariable Long companyId,
            @PathVariable Long clientId){
        try {
            List<ProductOrderDTO> productOrders = productOrderService
                    .findProductOrdersByClientId(companyId, clientId);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("all/{companyId}/{date}")
    public ResponseEntity<List<ProductOrderDTO>> getAllProductOrderByDate(
            @PathVariable Long companyId,
            @PathVariable LocalDate date
            ){
        try {
            List<ProductOrderDTO> productOrders = productOrderService
                    .findProductOrdersByDate(date, companyId);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/orderId")
    public ResponseEntity<ProductOrderDTO> getOrder(
            @PathVariable Long companyId,
            @PathVariable Long orderID

    ){
        try {
            ProductOrderDTO productOrder = productOrderService.findProductOrderById(orderID, companyId);
            return ResponseEntity.ok().body(productOrder);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create/{companyId}")
    public ResponseEntity<ProductOrderDTO> createOrder(
            @PathVariable Long companyId,
            @RequestBody  ProductOrderDTO productOrderDTO

    ){
        try {
            ProductOrderDTO productOrder = productOrderService.createProductOrder(companyId, productOrderDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(productOrder);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PatchMapping("/update/{orderId}")
    public ResponseEntity<ProductOrderDTO> editOrder(
            //@PathVariable Long companyId,
            @PathVariable Long orderId,
            @RequestBody  ProductOrderDTO productOrderDTO
    ){
        try {
            ProductOrderDTO productOrders = productOrderService
                    .updateProductOrder(orderId, productOrderDTO);
            return ResponseEntity.ok().body(productOrders);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
        }
    }

    @DeleteMapping("/delete/{orderId}")
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
