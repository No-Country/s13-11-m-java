package com.s3java.calendarioInteligente.exception;

import org.springframework.http.HttpStatus;

import java.sql.Timestamp;
import java.time.ZonedDateTime;

public class ApiException {
    private final String errorMessage;
    private final HttpStatus httpStatus;
    private final ZonedDateTime timestamp;

    public ApiException(String errorMessage, HttpStatus httpStatus, ZonedDateTime timestamp) {
        this.errorMessage = errorMessage;
        this.httpStatus = httpStatus;
        this.timestamp = timestamp;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public ZonedDateTime getTimestamp() {
        return timestamp;
    }
}
