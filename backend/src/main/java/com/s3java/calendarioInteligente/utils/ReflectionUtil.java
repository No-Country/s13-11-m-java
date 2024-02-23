package com.s3java.calendarioInteligente.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;

public class ReflectionUtil {

    private static final Logger logger = LoggerFactory.getLogger(ReflectionUtil.class);

    public static void copyNonNullProperties(Object source, Object target) throws IllegalAccessException {
        Class<?> sourceClass = source.getClass();
        Class<?> targetClass = target.getClass();

        for (Field sourceField : sourceClass.getDeclaredFields()) {
            sourceField.setAccessible(true);

            Field targetField;
            try {
                targetField = targetClass.getDeclaredField(sourceField.getName());
                targetField.setAccessible(true);

                Object value = sourceField.get(source);
                if (value != null) {
                    targetField.set(target, value);
                }
            } catch (NoSuchFieldException e) {
                logger.error("reflection was not executed");

            }
        }
    }
}
