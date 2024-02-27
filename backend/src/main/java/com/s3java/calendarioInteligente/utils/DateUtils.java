package com.s3java.calendarioInteligente.utils;



import org.springframework.stereotype.Component;

import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Utility class for date-related operations.
 */
@Component
public class DateUtils {

    public static final String FORMAT_DATE_TIME = "yyyy-MM-dd'T'HH:mm:ss";


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

    public static LocalDateTime converFromString(String date) throws DateTimeException {
        return LocalDateTime.parse(
                date,
                DateTimeFormatter.ofPattern(FORMAT_DATE_TIME));
    }





}
