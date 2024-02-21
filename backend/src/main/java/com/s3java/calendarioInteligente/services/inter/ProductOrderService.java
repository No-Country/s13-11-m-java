package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ProductOrderService {
    List<ProductOrderResponse> findAllProducts(Long companyId) throws Exception;

    ProductOrderResponse findProductOrderById(Long productOrderId, Long companyId) throws Exception;

    List<ProductOrderResponse> findProductOrdersByDate(LocalDate date, Long companyId) throws Exception;

    List<ProductOrderResponse> findProductOrdersByClientId(Long clientId, Long companyId) throws Exception;

    ProductOrderResponse createProductOrder(Long companyId, ProductOrderRequest productOrder) throws Exception;

    ProductOrderResponse updateProductOrder(Long productOrderId, ProductOrderRequest productOrderDTO) throws Exception;

    void deleteProductOrder(Long productOrderId) throws Exception;


}
