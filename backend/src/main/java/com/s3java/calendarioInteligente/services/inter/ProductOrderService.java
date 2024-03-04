package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ProductOrderService {
    List<ProductOrderResponse> findAllProductOrders() throws Exception;

    ProductOrderResponse findProductOrderById(Long productOrderId) throws Exception;

    List<ProductOrderResponse> findProductOrdersByClientId(Long clientId) throws Exception;

    ProductOrderResponse createProductOrder(ProductOrderRequest productOrder) throws Exception;

    ProductOrderResponse updateProductOrder(Long productOrderId,
                                            ProductOrderRequest productOrderDTO) throws Exception;

    void deleteProductOrder(Long productOrderId) throws Exception;


    List<ProductOrderResponse> findProductOrdersByFinishDate(String date) throws Exception;

    List<ProductOrderResponse> findProductOrdersByEntry(String entryDate) throws Exception;

    List<ProductOrderResponse> findProductOrdersByInitialDate(String date) throws Exception;

    void updateStartDate(Long id) throws EntityNotFoundException;

    String getFinishEstimatedDate(String initialDate, Long productId) throws EntityNotFoundException;
}
