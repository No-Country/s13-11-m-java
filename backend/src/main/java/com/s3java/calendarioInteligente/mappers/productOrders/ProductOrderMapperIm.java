package com.s3java.calendarioInteligente.mappers.productOrders;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;


@Component
public class ProductOrderMapperIm implements ProductOrderMapper {

    @Override
    public ProductOrder productOrderRequestToProductOrder(ProductOrderRequest productOrderRequest) {
        if ( productOrderRequest == null ) {
            return null;
        }

        ProductOrder productOrder = new ProductOrder();

        productOrder.setName( productOrderRequest.getName() );
        productOrder.setClient( productOrderRequest.getClient() );
        productOrder.setErrorTime( productOrderRequest.getErrorTime() );
        productOrder.setPhotoLink( productOrderRequest.getPhotoLink() );
        productOrder.setInitialDate( productOrderRequest.getInitialDate() );
        productOrder.setFinishEstimatedDate( productOrderRequest.getFinishEstimatedDate() );
        productOrder.setState(productOrderRequest.getState());
        if (productOrderRequest.getDateEnd() != null){
            productOrder.setDateEnd(productOrderRequest.getDateEnd());
        } else {
            productOrder.setDateEnd(null);
        }
        return productOrder;
    }

    @Override
    public ProductOrderResponse productOrderToProductOrderResponse(ProductOrder productOrder) {
        if ( productOrder == null ) {
            return null;
        }

        ProductOrderResponse productOrderResponse = new ProductOrderResponse();

        productOrderResponse.setId( productOrder.getId() );
        productOrderResponse.setName( productOrder.getName() );
        productOrderResponse.setEntryDate( productOrder.getEntryDate() );
        productOrderResponse.setErrorTime( productOrder.getErrorTime() );
        productOrderResponse.setPhotoLink( productOrder.getPhotoLink() );
        productOrderResponse.setProduct( productOrder.getProduct() );
        productOrderResponse.setClient( productOrder.getClient() );
        productOrderResponse.setInitialDate( productOrder.getInitialDate() );
        productOrderResponse.setFinishEstimatedDate( productOrder.getFinishEstimatedDate() );
        productOrderResponse.setState(productOrder.getState());

        if (productOrder.getDateEnd() != null){
            productOrderResponse.setDateEnd(productOrder.getDateEnd());
        }

        return productOrderResponse;
    }

    @Override
    public List<ProductOrderResponse> productOrdersToProductOrdersResponse(List<ProductOrder> productOrders) {
        if ( productOrders == null ) {
            return null;
        }

        List<ProductOrderResponse> list = new ArrayList<ProductOrderResponse>( productOrders.size() );
        for ( ProductOrder productOrder : productOrders ) {
            list.add( productOrderToProductOrderResponse( productOrder ) );
        }

        return list;
    }
}
