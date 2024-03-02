package com.s3java.calendarioInteligente.services.data;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;

public class TimingCalculator {

    private final Double timeMarginPercentage=3.0;  //atributo para calcular timeMargin despues se lo podria hacer modificable por el admin.

    private Double timeEstimatedCompletionProducto(Long id){ //id = id de producto
        Double timeEstimatedCompletion=0.00;
        // suma de tiempos timeEstimatedCompletion de todos los procesos pertenecientes al id de producto.
        return timeEstimatedCompletion;
    };

    private Double timeEstimatedCompletionProceso(Long id){ //id = id de proceso
        Double timeEstimatedCompletion=0.00;
        // suma de tiempos timeEstimatedCompletion de todos los subProcesos pertenecientes al id de proceso.
        return timeEstimatedCompletion;
    };
    private Double timeAverage(Long id){  //id = id de producto
        //tiempo promedio anual, calculado desde algun historico de productos producidos o acumulador suma.
        Double timeAverage=0.0;
        Double suma_tiempos_id_producto= 0.0; //suma de los tiempos REALES de produccion de toda la historia de ese id de producto
        int count_productosTerminados_del_id = 0; //cuenta de todos los productos de ese id efectivamente terminados.
        timeAverage =  suma_tiempos_id_producto / count_productosTerminados_del_id;

        return timeAverage;
    };
    private Double timeMarginProduct(Long id, Double timeEstimatedCompletion){ //id = id de producto
        Double timeMargin = timeEstimatedCompletion * timeMarginPercentage/100;
        //cuanto tiempo por encima o por debajo es aceptable, ej. el 3% del tiempoEstimatedCompletion del producto
        return timeMargin;
    };
    private Double timeMarginProcess(Long id, Double timeEstimatedCompletion){ //id = id de proceso
        Double timeMargin = timeEstimatedCompletion * timeMarginPercentage/100;
        //cuanto tiempo por encima o por debajo es aceptable, ej. el 3% del tiempoEstimatedCompletion del proceso
        return timeMargin;
    };

    private Double timeMarginSubProcess(Long id, Double timeEstimatedCompletion){ //id = id de subProceso
        Double timeMargin = timeEstimatedCompletion * timeMarginPercentage/100;
        //cuanto tiempo por encima o por debajo es aceptable, ej. el 3% del tiempoEstimatedCompletion del subProceso
        return timeMargin;
    };

    private String finishEstimatedDate(String initialDate, Long id){  //initialDate seleccionada por usuario manualmente del calendario. id de producto en la orden
        String finishEstimatedDate;
        finishEstimatedDate = initialDate + (timeEstimatedCompletionProducto(id)/86400);  //86400 sale de 60segundos*60minutos*24horas => 86400seg expresado en dias. hacer las conversiones necesarias para las fechas.
        return finishEstimatedDate;
    }
}
