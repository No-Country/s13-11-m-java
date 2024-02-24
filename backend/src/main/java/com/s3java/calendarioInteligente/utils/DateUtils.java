package com.s3java.calendarioInteligente.utils;


import java.time.LocalDate;

public class DateUtils {


    public static boolean isNotBefore(LocalDate dateToCheck, LocalDate referenceDate) {
            return !dateToCheck.isBefore(referenceDate);
        }

}
