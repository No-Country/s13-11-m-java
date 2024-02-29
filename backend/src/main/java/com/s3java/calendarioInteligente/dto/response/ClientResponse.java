package com.s3java.calendarioInteligente.dto.response;


import com.s3java.calendarioInteligente.entities.CommonAttribute;

public class ClientResponse {

    Long id;
    CommonAttribute commonAttribute;

    public CommonAttribute getCommonAttribute() {
        return commonAttribute;
    }

    public void setCommonAttribute(CommonAttribute commonAttribute) {
        this.commonAttribute = commonAttribute;
    }
}
