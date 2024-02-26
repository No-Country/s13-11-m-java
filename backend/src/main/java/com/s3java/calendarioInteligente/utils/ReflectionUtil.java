package com.s3java.calendarioInteligente.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;

/**
 * Utility class for performing reflection-based operations.
 * It provides a method to copy non-null properties from a source object to a target object.
 */
public class ReflectionUtil {

    private static final Logger logger = LoggerFactory.getLogger(ReflectionUtil.class);

    /**
     * Copies non-null properties from the source object to the target object using reflection.
     *
     * @param source The source object from which properties are copied.
     * @param target The target object to which properties are copied.
     * @throws IllegalAccessException If an IllegalAccessException occurs during the reflection process.
     */
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
