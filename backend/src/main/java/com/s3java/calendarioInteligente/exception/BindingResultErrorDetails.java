package com.s3java.calendarioInteligente.exception;

import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;
import java.util.List;

public class BindingResultErrorDetails {
    private final List<String> errors;
    private final HttpStatus httpStatus;
    private final ZonedDateTime timestamp;

    public BindingResultErrorDetails(List<String> errors, HttpStatus httpStatus, ZonedDateTime timestamp) {
        this.errors = errors;
        this.httpStatus = httpStatus;
        this.timestamp = timestamp;
    }

    public List<String> getErrors() {
        return errors;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public ZonedDateTime getTimestamp() {
        return timestamp;
    }
}
