package com.s3java.calendarioInteligente.mappers.productOrders;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TagMapper {
    TagMapper INSTANCE = Mappers.getMapper( TagMapper.class );
}
