package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.exception.exceptions.InvalidDateException;
import com.s3java.calendarioInteligente.exception.exceptions.ProductNotFoundException;
import com.s3java.calendarioInteligente.exception.exceptions.ProductOrderNotFoundException;
import com.s3java.calendarioInteligente.mappers.productOrders.ProductOrderMapper;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.services.data.Calculos;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import com.s3java.calendarioInteligente.utils.DateUtils;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import com.s3java.calendarioInteligente.utils.State;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalUnit;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static com.s3java.calendarioInteligente.utils.DateUtils.convertToTimeStampFromString;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {



    private final Long companyId = 1L; // TODO debe venir de token

    private final ProductOrderRepository productOrderRepository;
    private final ClientRepository clientRepository; // TODO cambiar por respectivo servicio
    private final ProductOrderMapper productOrderMapper;
    private final ProductService productService;

    private final CompanyRepository companyRepository; // TODO cambiar por respectivo servicio

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderServiceImpl.class);

    private final Calculos calculos;

    private LocalDateTime timeNow = LocalDateTime.now();


    ProductOrderServiceImpl(ProductOrderRepository productOrderRepository,
                            ClientRepository clientRepository,
                            ProductService productService,
                            CompanyRepository companyRepository,
                            ProductOrderMapper productOrderMapper,
                            Calculos calculos
    ){
        this.productOrderRepository = productOrderRepository;
        this.clientRepository = clientRepository;
        this.productOrderMapper  = productOrderMapper;
        this.productService  = productService;
        this.companyRepository = companyRepository;
        this.calculos = calculos;


    }

    @Override
    @Transactional
    public List<ProductOrderResponse> findAllProductOrders() throws Exception {
        List<ProductOrder> productOrders = this.productOrderRepository.findAllProductOrders(companyId);
        for (ProductOrder productOrder : productOrders) {
            Hibernate.initialize(productOrder.getClient());
        }
        List<ProductOrderResponse> productOrdersResponse = this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
        return productOrdersResponse;
    }


    @Override
    @Transactional
    public ProductOrderResponse findProductOrderById(Long productOrderId) throws Exception {
        logger.info(""+productOrderId + companyId);
         Optional<ProductOrder> productOrderOptional = this.productOrderRepository
                 .findProductOrderById(productOrderId, this.companyId);
         productOrderOptional.orElseThrow( ()-> new Exception("product order with id: " + productOrderId + " not found"));
         return this.productOrderMapper.productOrderToProductOrderResponse(productOrderOptional.get());
    }




    @Override
    @Transactional
    public List<ProductOrderResponse> findProductOrdersByClientId(Long clientId) throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository
                .findProductOrdersByClientId(clientId, this.companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrder);
    }

    @Transactional
    @Override
    public ProductOrderResponse createProductOrder(ProductOrderRequest productOrderRequest) throws Exception {


        ProductOrder productOrder = this.createProductOrderWithEntryDateFromRequest(productOrderRequest);


        this.validateDateOrder(LocalDateTime.parse(productOrder.getInitialDate()), this.timeNow,
                "The initial date must not be earlier than the entry date.");
        this.validateDateOrder(LocalDateTime.parse(productOrder.getFinishEstimatedDate()), this.timeNow,
                "The finish estimated date must not be earlier than the entry date.");

        this.validateDateOrder(LocalDateTime.parse(productOrder.getFinishEstimatedDate()),
                LocalDateTime.parse(productOrder.getInitialDate()),
                "The finish estimated date must not be earlier than the initial date.");


        productOrder.setActive(true);

        // TODO adaptar cuando esten Product y Client repositorios

        Client clientSaved = this.clientRepository.save(productOrderRequest.getClient());


        Company company = this.companyRepository.findById(this.companyId)
                .orElseThrow(() -> new EntityNotFoundException("company was not found"));


        Product product = this.findProductByIdOrThrow((productOrderRequest.getProductId()));


        productOrder.setCompany(company);
        productOrder.setClient(clientSaved);
        productOrder.setProduct(product);
        productOrder.setDateStart(
                convertToTimeStampFromString(productOrderRequest.getInitialDate())); // TODO revisar
        ProductOrder productOrderSaved = this.productOrderRepository.save(productOrder);
        return this.productOrderMapper.productOrderToProductOrderResponse(productOrderSaved);
    }

    @Override
    @Transactional
    public ProductOrderResponse updateProductOrder(Long productOrderId,
                                                   ProductOrderRequest productOrderRequest) throws Exception {


        ProductOrder oldProductOrder = this.productOrderRepository
                .findProductOrderById(productOrderId, this.companyId)
                .orElseThrow(() ->
                        new EntityNotFoundException("user + " + productOrderId + "does not found"));


        if (!Objects.equals(productOrderRequest.getProductId(), oldProductOrder.getProduct().getId())) {
            Product product = this.findProductByIdOrThrow(productOrderRequest.getProductId());
            oldProductOrder.setProduct(product);
        }

        if (!Objects.equals(productOrderRequest.getClient(), oldProductOrder.getClient())) {
            Client client = this.clientRepository.findById(productOrderRequest.getClient().getId())
                    .orElseThrow(() -> new EntityNotFoundException("client does not found"));
            oldProductOrder.setClient(client);
        }

        ReflectionUtil.copyNonNullProperties(productOrderRequest, oldProductOrder);


        String initialDateString = productOrderRequest.getInitialDate();
        String finishEstimatedDateString = productOrderRequest.getFinishEstimatedDate();

        // para actualizar los timeStamp
        this.verifyStateForSetAStartDate(productOrderId, productOrderRequest, oldProductOrder);

        //-------------------------------------------------------------

        if (initialDateString != null) {
            LocalDateTime initialDate = LocalDateTime.parse(initialDateString);
            this.validateDateOrder(initialDate, this.timeNow, "The initial date must not be earlier than the entry date.");
        }

        if (finishEstimatedDateString != null) {
            LocalDateTime finishEstimatedDate = LocalDateTime.parse(finishEstimatedDateString);
            this.validateDateOrder(finishEstimatedDate, this.timeNow, "The finish estimated date must not be earlier than the entry date.");

            if (initialDateString != null) {
                LocalDateTime initialDate = LocalDateTime.parse(initialDateString);
                this.validateDateOrder(finishEstimatedDate, initialDate, "The finish estimated date must not be earlier than the initial date.");
            }
        }

            ProductOrder productOrderUpdated = this.productOrderRepository.save(oldProductOrder);
            return this.productOrderMapper.productOrderToProductOrderResponse(productOrderUpdated);
        }

    private void verifyStateForSetAStartDate(Long productOrderId, ProductOrderRequest productOrderRequest,
                           ProductOrder oldProductOrder) throws Exception {
        if(productOrderRequest.getState() == State.EN_PROGRESO){
            this.updateStartDate(productOrderId);
        }

        else if(productOrderRequest.getState() == State.TERMINADO){
            this.updateEndDate(productOrderId);
            this.productService.updateTimeAverage(oldProductOrder.getProduct().getId());
        }
    }

    private void updateEndDate(Long productOrderId) {
        Timestamp endDate = Timestamp.valueOf(LocalDateTime.now());
        this.productOrderRepository.updateEndDate(productOrderId, endDate);
    }


    @Transactional
    @Override
    public void deleteProductOrder(Long productOrderId) throws ProductNotFoundException {


        ProductOrder po = this.productOrderRepository.findById(productOrderId)
                .orElseThrow(() ->
                        new ProductOrderNotFoundException("Product order not found with ID: " + productOrderId));
        po.setIsActive(false);
        Company company = po.getCompany();
        productOrderRepository.save(po);

    }

    @Override
    @Transactional
    public List<ProductOrderResponse> findProductOrdersByFinishDate(String date) {
        logger.debug(date);
        List<ProductOrder> productOrders = this.productOrderRepository
                .findProductOrdersByFinishDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    @Transactional
    public List<ProductOrderResponse> findProductOrdersByEntry(String date) {
        List<ProductOrder> productOrders = this.productOrderRepository
                .findProductOrdersByEntryDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByInitialDate(String date) {
        List<ProductOrder> productOrders = this.productOrderRepository
                .findProductOrdersByInitialDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }


    // agregado
    @Override
    public void updateStartDate(Long orderId) {
        Timestamp startDate = Timestamp.valueOf(LocalDateTime.now());
        this.productOrderRepository.updateStartDate(orderId, startDate);
    }

    //TODO revisar
    @Override
    public String getFinishEstimatedDate(String initialDateString, Long productId) throws EntityNotFoundException{
        Product p = this.findProductByIdOrThrow(productId);
        LocalDateTime initialDate = DateUtils.converFromString(initialDateString);
        return initialDate.plusSeconds((long) p.getTimeAverage().doubleValue()).toString();

    }

    private ProductOrder createProductOrderWithEntryDateFromRequest(ProductOrderRequest productOrderRequest) {
        ProductOrder productOrder = this.productOrderMapper.productOrderRequestToProductOrder(productOrderRequest);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DateUtils.FORMAT_DATE_TIME);
        String dateFormatted = formatter.format(timeNow);
        productOrder.setEntryDate(dateFormatted);
        return productOrder;
    }



    private void validateDateOrder(LocalDateTime firstDateToValidate,
                                   LocalDateTime secondDateToValidate,
                                   String errorMessage) throws InvalidDateException {
        if (DateUtils.isNotBeforeOrEqual(firstDateToValidate, secondDateToValidate)) {
            logger.error(errorMessage);
            throw new InvalidDateException(errorMessage +
                    " Please make sure that the dates are correct.");
        }

    }

    //TODO implementar
    /*
    private Client saveClient(Client client) {
        return this.clientService.saveClient(client);
    }*/

    private Product findProductByIdOrThrow(Long productId)
            throws ProductNotFoundException {
        return this.productService.byId(productId)
                .orElseThrow(() -> {
                    logger.error("product with id " +
                            productId +
                            "not found");
                   throw new ProductNotFoundException("product with id " +
                            productId +
                            " not found");
                });
    }

}
