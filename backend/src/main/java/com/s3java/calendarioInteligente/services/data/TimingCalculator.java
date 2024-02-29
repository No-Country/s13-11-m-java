package com.s3java.calendarioInteligente.services.data;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;

public class TimingCalculator {

    private final Double defaultMargin = 0.05;

    private Double calculateTimeEstimatedCompletion(Product product){
        Double timeEstimatedCompletion = 0.0;
        //Tiempo Interno asignado, en SEGUNDOS
        // suma de tiempos manuales de subprocesos + tiempos de procesos
        return timeEstimatedCompletion;
    };

    private Double calculateTimeEstimatedCompletion(ProductProcess productProcess){
        Double timeEstimatedCompletion = 0.00;
        //Tiempo Interno asignado, en SEGUNDOS
        // suma de tiempos manuales de subprocesos + tiempos de procesos
        return timeEstimatedCompletion;
    };

    private Double calculateTimeEstimatedCompletion(SubProcess subProcess){
        Double timeEstimatedCompletion = 0.00;
        //Tiempo Interno asignado, en SEGUNDOS
        // suma de tiempos manuales de subprocesos + tiempos de procesos
        return timeEstimatedCompletion;
    };
    private Double calculateTimeAverage;  //tiempo promedio anual, calculado desde el historico de procesos o subprocesos
    private Double calculateTimeMargin;   //cuantos minutos por encima o por debajo es aceptable
}
