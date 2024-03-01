package com.s3java.calendarioInteligente.exception;

import com.s3java.calendarioInteligente.exception.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;


@RestControllerAdvice
public class ApplicationExceptionHandler {

    @ExceptionHandler(value = {
            ProductOrderNotFoundException.class,
            SubProcessNotFoundException.class,
            ProcessNotFoundException.class,
            ClientNotFoundException.class
    })
    public ResponseEntity<Object> handleNotFoundBusinessException(RuntimeException exception){

        HttpStatus notFound = HttpStatus.NOT_FOUND;

        ApiException apiException = new ApiException(
                exception.getMessage(),
                notFound,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return new ResponseEntity<>(apiException, notFound);
    }


    @ExceptionHandler(value = BindingResultException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(BindingResultException exception){
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        List<String> errorMessages = new ArrayList<>();
        exception.getBindingResult().getAllErrors().forEach(error -> errorMessages.add(error.getDefaultMessage()));

        BindingResultErrorDetails apiException = new BindingResultErrorDetails(
                errorMessages,
                badRequest,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return new ResponseEntity<>(apiException, badRequest);
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handleAllOtherExceptions(Exception exception){
        HttpStatus internalServerError = HttpStatus.INTERNAL_SERVER_ERROR;

        ApiException apiException = new ApiException(
                exception.getMessage(),
                internalServerError,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return new ResponseEntity<>(apiException, internalServerError);
    }

}
