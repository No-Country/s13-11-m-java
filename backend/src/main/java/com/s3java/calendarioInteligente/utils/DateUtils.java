package com.s3java.calendarioInteligente.utils;


import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Utility class for date-related operations.
 */
@Component
public class DateUtils {


    /**
     * Checks if a given date is not before or equal to a reference date.
     *
     * @param dateToCheck    The date to check.
     * @param referenceDate  The reference date.
     * @return true if the reference date is not before or equal to the given date, false otherwise.
     */
    public static boolean isNotBeforeOrEqual(LocalDateTime dateToCheck, LocalDateTime referenceDate) {
        return !referenceDate.isBefore(dateToCheck) || referenceDate.isEqual(dateToCheck);
    }

    /**
     * Converts a string representation of a date to a {@code LocalDateTime} object using the ISO_DATE_TIME format.
     *
     * @param date A string representing a date in the ISO_DATE_TIME format.
     * @return A {@code LocalDateTime} object parsed from the input string.
     * @throws DateTimeException If the input string is not in the expected ISO_DATE_TIME format.
     */
    public static LocalDateTime converFromString(String date) throws DateTimeException {
        return LocalDateTime.parse(date, DateTimeFormatter.ISO_DATE_TIME);
    }





}
