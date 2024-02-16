import slideImage1 from "@/assets/slide_1.svg";
import slideImage2 from "@/assets/slide_2.svg";
import slideImage3 from "@/assets/slide_3.svg";
// import Sidebar from "@/components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./OnBoarding.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
};

const Carousel: React.FC = () => {
  return (
    <div className="w-full">
      {/* <Sidebar /> */}
      <div>
        <Slider {...settings}>
          <div className="flex justify-center">
            <div className="flex flex-col items-start justify-center pt-32 lg:flex-row">
              <div className="block lg:hidden">
                <img className="pb-10" src={slideImage1} alt="Man with calendar" />
              </div>
              <div className="lg:flex lg:w-1/4 lg:flex-col">
                <h2 className="text-xl lg:text-3xl">Registrá la producción realizada.</h2>
                <p className="pb-6 pr-6 pt-6 text-lg lg:pb-0 lg:text-2xl ">
                  ¿Sabías que podes ingresar las unidades que has producido durante cierto proceso? Esto te dará datos
                  precisos sobre tu producción real y te ayudará a compararla con los objetivos de tu empresa
                </p>
              </div>
              <div className="hidden lg:block">
                <img className="lg:pb-10" src={slideImage1} alt="Man with calendar" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-start justify-center pt-32 lg:flex-row  ">
              <div className="block lg:hidden">
                <img className="pb-10 pt-6" src={slideImage2} alt="Man with calendar" />
              </div>
              <div className="lg:flex lg:w-1/4 lg:flex-col">
                <h2 className="text-xl lg:text-3xl">Modificá el tiempo de proceso.</h2>
                <p className="pb-6 pr-6 pt-6 text-lg lg:pb-0 lg:text-2xl ">
                  Los trabajadores pueden ajustar el tiempo estimado de un proceso en base a su experiencia o si hay
                  cambios en las condiciones de producción. Esto ayuda a planificar y programar los procesos con mayor
                  precisión.
                </p>
              </div>
              <div className="hidden lg:block">
                <img className="pt-10 lg:pb-10" src={slideImage2} alt="Man with calendar" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-start justify-center pt-32 lg:flex-row  ">
              <div className="block lg:hidden">
                <img className="pb-10" src={slideImage3} alt="Man with calendar" />
              </div>
              <div className="lg:flex lg:w-1/4 lg:flex-col">
                <h2 className="text-xl lg:text-3xl">Añade notas o aclaraciones.</h2>
                <p className="pb-6 pr-6 pt-6 text-lg md:pb-0 md:text-2xl ">
                  Los trabajadores pueden poner notitas o comentarios importantes en un proceso específico referido a
                  cualquier problema que encuentren, ideas para mejorar o cualquier otra observación que sea útil para
                  el equipo de producción.
                </p>
              </div>
              <div className="hidden lg:block">
                <img className=" lg:pb-10" src={slideImage3} alt="Man with calendar" />
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex flex-col items-center justify-center gap-5 pt-12 lg:hidden ">
          <Button className="w-full" variant="outline" asChild>
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button className="w-full">Comenzar</Button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
