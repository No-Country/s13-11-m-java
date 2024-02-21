package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.controllers.api.ProductOrderController;
import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {



    private final Long companyId = 1L;
    private final ProductOrderRepository productOrderRepository;
    private final ClientRepository clientRepository;

    ProductOrderServiceImpl(ProductOrderRepository productOrderRepository,
                            ClientRepository clientRepository){
        this.productOrderRepository = productOrderRepository;
        this.clientRepository = clientRepository;

    }
    @Override
    public List<ProductOrderResponse> findAllProducts() throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository.findAllProducts(companyId);
        return null;
    }

    @Override
    public ProductOrderResponse findProductOrderById(Long productOrderId) throws Exception {
         Optional<ProductOrder> productOrderOptional = this.productOrderRepository.findProductOrderById(productOrderId, companyId);
         return null
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByDate(LocalDate date) throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository.findProductOrdersByDate(date, companyId);
        return null;
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByClientId(Long clientId) throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository.findProductOrdersByClientId(clientId, companyId);
        return null;
    }

    @Override
    public ProductOrderResponse createProductOrder(ProductOrderRequest productOrderRequest) throws Exception {

        ProductOrder productOrder = new ProductOrder();
        productOrder.setName("nuevo");

        this.productOrderRepository.save(productOrder);
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
