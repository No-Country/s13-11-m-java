package com.s3java.calendarioInteligente.services.data;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import com.s3java.calendarioInteligente.repositories.ProcessRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.repositories.SubProcessRepository;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Component
public class Calculos {
    private ProductRepository productRepository;
    private ProcessRepository processRepository;
    private SubProcessRepository subProcessRepository;
    private ProductOrderRepository productOrderRepository;
    private final Double timeMarginPercentage=3.0;  //atributo para calcular timeMargin despues se lo podria hacer modificable por el admin.
    private Double timeAverage=0.0;

    // suma de tiempos timeEstimatedCompletion de todos los procesos pertenecientes al id de producto.
    public Double timeEstimatedCompletionProduct(List<ProductProcess> productProcessesList){ //id = id de producto
        Double timeEstimatedCompletion=0.00;
        if (!productProcessesList.isEmpty()){
            for (int i = 0; i < productProcessesList.size()-1; i++) {
                timeEstimatedCompletion = timeEstimatedCompletion + productProcessesList.get(i)
                        .getProcessAttributes().getTimeEstimatedCompletion();
            }
            }

        return timeEstimatedCompletion;
    };

    // suma de tiempos timeEstimatedCompletion de todos los subProcesos pertenecientes al id de proceso.
    public Double timeEstimatedCompletionProcess(List<SubProcess> subProcessList){ //id = id de proceso
        Double timeEstimatedCompletion=0.00;
        if (!subProcessList.isEmpty()){
                for (int i = 0; i < subProcessList.size()-1; i++) {
                    timeEstimatedCompletion = timeEstimatedCompletion + subProcessList.get(i)
                            .getSubProcessAttributes().getTimeEstimatedCompletion();
                }
            }
        return timeEstimatedCompletion;
    };

    //Calculo de timeMargin para productos, procesos y subProcesos. Es cuanto tiempo por encima o por debajo es aceptable, ej. el 3% del tiempoEstimatedCompletion del producto
    public Double timeMargin(Double timeEstimatedCompletion){ //id = id de producto, proceso o subproceso.
        Double timeMargin = timeEstimatedCompletion * timeMarginPercentage/100;
        return timeMargin;
    };

    //metodo para calcular el newTime como diferencia de los 2 Timestamps dateStart - dateEnd.
    private Double newTime(Long idOrder){
        double newTime = 0.0;
        Optional<ProductOrder> foundOrder = productOrderRepository.findById(idOrder);
        if (foundOrder.isPresent()){
            Instant dateTime1 = foundOrder.get().getDateStart().toInstant();
            Instant dateTime2 = foundOrder.get().getDateEnd().toInstant();
            Duration duration = Duration.between(dateTime1, dateTime2);
            newTime = duration.toSeconds();
        }
        return newTime;
    }

    //tiempo promedio de producto, calculado desde algun historico de productos producidos o acumulador suma. timeAverage = (timeAverage+newTime)/2
    public Double timeAverage(Long id){  //id = id de producto
        Double newTime = this.newTime(id);
        if (timeAverage == 0.0){
            timeAverage = newTime;
        } else {
            timeAverage =  (timeAverage*4 + newTime)/5;
        }
        return timeAverage;
    };

    //86400 sale de 60segundos*60minutos*24horas => 86400seg expresado en dias. hacer las conversiones necesarias para las fechas.
    /*public String finishEstimatedDate(Long idOrder){  //initialDate seleccionada por usuario manualmente del calendario. id de producto en la orden
        String finishEstimatedDate="0";
        Optional<ProductOrder> foundOrder = productOrderRepository.findById(idOrder);
        if (foundOrder.isPresent()){
            finishEstimatedDate = foundOrder.get().getInitialDate() + foundOrder.get().getProduct().getTimeEstimatedCompletion()/84600;
        }
        return finishEstimatedDate;
    }*/

    //TODO revisar
    public String finishEstimatedDate(String initialDate, Long idProduct){
        String finishEstimatedDate="0";
        Optional<Product> foundProduct = productRepository.findById(idProduct);

        LocalDateTime dataConverted = LocalDateTime.parse(initialDate);

        if (foundProduct.isPresent()){
            finishEstimatedDate = initialDate + foundProduct.get().getTimeEstimatedCompletion()/84600;
        }
        return finishEstimatedDate;
    }
}
