package com.s3java.calendarioInteligente.exception;

import com.s3java.calendarioInteligente.exception.exceptions.ProcessNotFoundException;
import com.s3java.calendarioInteligente.exception.exceptions.ProductOrderNotFoundException;
import com.s3java.calendarioInteligente.exception.exceptions.SubProcessNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.Timestamp;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {
            ProductOrderNotFoundException.class,
            SubProcessNotFoundException.class,
            ProcessNotFoundException.class,
            UsernameNotFoundException.class
    })
    public ResponseEntity<Object> handleBusinessException(RuntimeException exception){

        HttpStatus notFound = HttpStatus.NOT_FOUND;

        ApiException apiException = new ApiException(
                exception.getMessage(),
                notFound,
                ZonedDateTime.now(ZoneId.of("Z"))
        );

        return new ResponseEntity<>(apiException, notFound);
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
