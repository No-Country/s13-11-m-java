import Slider, { Settings } from "react-slick";

import { Button } from "@/components/ui/button";

import slideImage1 from "@/assets/slide_1.svg";
import slideImage2 from "@/assets/slide_2.svg";
import slideImage3 from "@/assets/slide_3.svg";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./OnBoarding.css";
import { Link } from "react-router-dom";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 5000,
};

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  button?: {
    title: string;
    link: string;
  };
}

const carouselItems: CarouselItem[] = [
  {
    title: "Registrá la producción realizada.",
    description:
      "¿Sabías que podes ingresar las unidades que has producido durante cierto proceso? Esto te dará datos precisos sobre tu producción real y te ayudará a compararla con los objetivos de tu empresa",
    image: slideImage1,
  },
  {
    title: "Modificá el tiempo de proceso.",
    description:
      "Los trabajadores pueden ajustar el tiempo estimado de un proceso en base a su experiencia o si hay cambios en las condiciones de producción. Esto ayuda a planificar y programar los procesos con mayor precisión.",
    image: slideImage2,
  },
  {
    title: "Añade notas o aclaraciones.",
    description:
      "Los trabajadores pueden poner notitas o comentarios importantes en un proceso específico referido a cualquier problema que encuentren, ideas para mejorar o cualquier otra observación que sea útil para el equipo de producción.",
    image: slideImage3,
    button: {
      title: "Empezar ahora",
      link: "#",
    },
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="px-8">
      <Slider {...settings} className="pb-2">
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="h-min-screen-without-header grid items-center sm:container md:grid-cols-5">
              <div className="col-span-2 space-y-8 max-md:order-2">
                <h2 className="text-xl lg:text-3xl">{item.title}</h2>
                <p className="text-lg lg:text-2xl">{item.description}</p>
                {item.button && (
                  <Button className="w-full text-base" size="rounded" asChild>
                    <Link to={item.button.link}>{item.button.title}</Link>
                  </Button>
                )}
              </div>
              <div className="col-span-3 mx-auto max-w-sm md:max-w-full">
                <img src={item.image} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
