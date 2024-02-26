package com.s3java.calendarioInteligente.mappers.productOrders;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper(componentModel = "spring", uses = {TagMapper.class})
public interface ProductOrderMapper {

    ProductOrderMapper INSTANCE = Mappers.getMapper(ProductOrderMapper.class);
    ProductOrder productOrderRequestToProductOrder(ProductOrderRequest productOrderRequest);

    ProductOrderResponse productOrderToProductOrderResponse(ProductOrder productOrder);

    List<ProductOrderResponse> productOrdersToProductOrdersResponse(List<ProductOrder> productOrders);

}
