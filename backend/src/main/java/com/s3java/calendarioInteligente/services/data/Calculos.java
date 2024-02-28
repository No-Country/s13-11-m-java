package com.s3java.calendarioInteligente.services.data;

public class Calculos {

    private Double timeEstimatedCompletion(){
        Double timeEstimatedCompletion=0.00;
        //Tiempo Interno asignado, en SEGUNDOS
        // suma de tiempos manuales de subprocesos + tiempos de procesos
        return timeEstimatedCompletion;
    };
    private Double timeAverage;  //tiempo promedio anual, calculado desde el historico de procesos o subprocesos
    private Double timeMargin;   //cuantos minutos por encima o por debajo es aceptable
}
