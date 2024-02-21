package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.dto.ProductOrderDTO;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {


    @Override
    public List<ProductOrderDTO> findAllProducts(Long companyId) throws Exception {
        return null;
    }

    @Override
    public ProductOrderDTO findProductOrderById(Long productOrderId, Long companyId) throws Exception {
        return null;
    }

    @Override
    public List<ProductOrderDTO> findProductOrdersByDate(LocalDate date, Long companyId) throws Exception {
        return null;
    }

    @Override
    public List<ProductOrderDTO> findProductOrdersByClientId(Long clientId, Long companyId) throws Exception {
        return null;
    }

    @Override
    public ProductOrderDTO createProductOrder(Long companyId, ProductOrderDTO productOrder) throws Exception {
        return null;
    }

    @Override
    public ProductOrderDTO updateProductOrder(Long productOrderId, ProductOrderDTO productOrderDTO) throws Exception {
        return null;
    }

    @Override
    public void deleteProductOrder(Long productOrderId) throws Exception {

    }
}
