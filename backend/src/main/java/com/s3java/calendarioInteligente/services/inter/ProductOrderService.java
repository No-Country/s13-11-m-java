package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ProductOrderService {
    List<ProductOrderResponse> findAllProducts() throws Exception;

    ProductOrderResponse findProductOrderById(Long productOrderId) throws Exception;

    List<ProductOrderResponse> findProductOrdersByClientId(Long clientId) throws Exception;

    ProductOrderResponse createProductOrder(ProductOrderRequest productOrder) throws Exception;

    ProductOrderResponse updateProductOrder(Long productOrderId, ProductOrderRequest productOrderDTO) throws Exception;

    void deleteProductOrder(Long productOrderId) throws Exception;


    List<ProductOrderResponse> findProductOrdersByFinishDate(LocalDate date);

    List<ProductOrderResponse> findProductOrdersByEntry(LocalDate entryDate);

    List<ProductOrderResponse> findProductOrdersByInitialDate(LocalDate date);
}
