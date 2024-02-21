package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.ProductOrderDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ProductOrderService {
    List<ProductOrderDTO> findAllProducts(Long companyId) throws Exception;

    ProductOrderDTO findProductOrderById(Long productOrderId, Long companyId) throws Exception;

    List<ProductOrderDTO> findProductOrdersByDate(LocalDate date, Long companyId) throws Exception;

    List<ProductOrderDTO> findProductOrdersByClientId(Long clientId, Long companyId) throws Exception;

    ProductOrderDTO createProductOrder(Long companyId, ProductOrderDTO productOrder) throws Exception;

    ProductOrderDTO updateProductOrder(Long productOrderId, ProductOrderDTO productOrderDTO) throws Exception;

    void deleteProductOrder(Long productOrderId) throws Exception;


}
