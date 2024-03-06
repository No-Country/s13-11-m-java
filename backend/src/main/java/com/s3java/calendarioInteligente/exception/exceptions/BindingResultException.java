package com.s3java.calendarioInteligente.exception.exceptions;

import org.springframework.validation.BindingResult;

public class BindingResultException extends RuntimeException{
    private final BindingResult bindingResult;

    public BindingResultException(BindingResult bindingResult) {
        this.bindingResult = bindingResult;
    }

    public BindingResult getBindingResult() {
        return bindingResult;
    }
}
