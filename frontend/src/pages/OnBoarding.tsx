import React from "react";
import Slider from "react-slick";
import OnboardingHeader from "../components/OnBoardingHeader";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC = () => {
  return (
    <div className="w-full">
      <OnboardingHeader />
      <Slider {...settings}>
        <div>
          <div className="flex justify-center">
            <div className="flex items-start justify-center pt-32">
              <div className="flex w-1/4 flex-col">
                <h2 className="text-4xl">Registrá la producción realizada.</h2>
                <p className="pr-6 pt-6 text-2xl">
                  ¿Sabías que podes ingresar las unidades que has producido durante cierto proceso? Esto te dará datos
                  precisos sobre tu producción real y te ayudará a compararla con los objetivos de tu empresa
                </p>
              </div>
              <img src="https://via.placeholder.com/700x400" alt="placeholder" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start justify-center pt-32">
            <div className="flex w-1/4 flex-col">
              <h2 className="text-4xl">Modificá el tiempo de proceso.</h2>
              <p className="pr-6 pt-6 text-2xl">
                Los trabajadores pueden ajustar el tiempo estimado de un proceso en base a su experiencia o si hay
                cambios en las condiciones de producción. Esto ayuda a planificar y programar los procesos con mayor
                precisión.
              </p>
            </div>
            <img src="https://via.placeholder.com/700x400" alt="placeholder" />
          </div>
        </div>
        <div>
          <div className="flex items-start justify-center pt-32">
            <div className="flex w-1/4 flex-col justify-start">
              <h2 className="text-4xl">Añadí notas o aclaraciones.</h2>
              <p className="pr-6 pt-6 text-2xl">
                Los trabajadores pueden poner notitas o comentarios importantes en un proceso específico referido a
                cualquier problema que encuentren, ideas para mejorar o cualquier otra observación que sea útil para el
                equipo de producción.
              </p>
              <Button className="mx-10 mt-6">Empezar Ahora</Button>
            </div>
            <img src="https://via.placeholder.com/700x400" alt="placeholder" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
