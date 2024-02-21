package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {


    @Override
    public List<ProductOrderResponse> findAllProducts(Long companyId) throws Exception {
        return null;
    }

    @Override
    public ProductOrderResponse findProductOrderById(Long productOrderId, Long companyId) throws Exception {
        return null;
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByDate(LocalDate date, Long companyId) throws Exception {
        return null;
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByClientId(Long clientId, Long companyId) throws Exception {
        return null;
    }

    @Override
    public ProductOrderResponse createProductOrder(Long companyId, ProductOrderRequest productOrder) throws Exception {
        return null;
    }

    @Override
    public ProductOrderResponse updateProductOrder(Long productOrderId, ProductOrderRequest productOrderDTO) throws Exception {
        return null;
    }

    @Override
    public void deleteProductOrder(Long productOrderId) throws Exception {

    }
}
