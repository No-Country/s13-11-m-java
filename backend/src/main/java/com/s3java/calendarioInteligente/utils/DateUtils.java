package com.s3java.calendarioInteligente.utils;



import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Formatter;

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

    /**
     * Converts a string representation of a date to a {@code LocalDateTime} object using the ISO_DATE_TIME format.
     *
     * @param date A string representing a date in the ISO_DATE_TIME format.
     * @return A {@code LocalDateTime} object parsed from the input string.
     * @throws DateTimeException If the input string is not in the expected ISO_DATE_TIME format.
     */
    public static LocalDateTime converFromString(String date) throws DateTimeException {
        return LocalDateTime.parse(
                date,
                DateTimeFormatter.ofPattern(FORMAT_DATE_TIME));
    }

    public static Timestamp convertToTimeStampFromString(String dateString) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(FORMAT_DATE_TIME);
        return Timestamp.valueOf(LocalDateTime.parse(dateString, formatter));
    }


}
