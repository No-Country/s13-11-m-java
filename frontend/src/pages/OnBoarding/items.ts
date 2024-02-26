import slideImage1 from "@/assets/slide_1.svg";
import slideImage2 from "@/assets/slide_2.svg";
import slideImage3 from "@/assets/slide_3.svg";
import type { Settings } from "react-slick";

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  button?: {
    title: string;
    link: string;
  };
}

export const carouselItems: CarouselItem[] = [
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

export const settings: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
};
