import React from "react";
import Slider from "react-slick";
import OnboardingHeader from "../../components/OnBoardingHeader";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OnBoarding.css";
import slideImage1 from "@/assets/slide_1.svg";
import slideImage2 from "@/assets/slide_2.svg";
import slideImage3 from "@/assets/slide_3.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Carousel: React.FC = () => {
  return (
    <div className="w-full">
      <OnboardingHeader />
      <div className="w-[98%] pt-10">
        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <div className="flex items-start justify-center pt-32">
                <div className="flex w-1/4 flex-col ">
                  <h2 className="text-4xl">Registrá la producción realizada.</h2>
                  <p className="pr-6 pt-6 text-2xl ">
                    ¿Sabías que podes ingresar las unidades que has producido durante cierto proceso? Esto te dará datos
                    precisos sobre tu producción real y te ayudará a compararla con los objetivos de tu empresa
                  </p>
                </div>
                <img className="pb-10" src={slideImage1} alt="Man with calendar" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start justify-center pt-32">
              <div className="flex w-1/4 flex-col ">
                <h2 className="text-4xl">Modificá el tiempo de proceso.</h2>
                <p className="pr-6 pt-6 text-2xl ">
                  Los trabajadores pueden ajustar el tiempo estimado de un proceso en base a su experiencia o si hay
                  cambios en las condiciones de producción. Esto ayuda a planificar y programar los procesos con mayor
                  precisión.
                </p>
              </div>
              <img className="pb-10" src={slideImage2} alt="Woman with calendar" />
            </div>
          </div>
          <div>
            <div className="flex items-start justify-center pt-32">
              <div className="flex w-1/4 flex-col ">
                <h2 className="text-4xl">Añadí notas o aclaraciones.</h2>
                <p className="pr-6 pt-6 text-2xl ">
                  Los trabajadores pueden poner notitas o comentarios importantes en un proceso específico referido a
                  cualquier problema que encuentren, ideas para mejorar o cualquier otra observación que sea útil para
                  el equipo de producción.
                </p>
                <Button className="mr-10 mt-10">Empezar Ahora</Button>
              </div>
              <img src={slideImage3} alt="Man in front of a board" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
