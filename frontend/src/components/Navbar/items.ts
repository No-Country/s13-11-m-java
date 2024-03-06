import { ButtonProps } from "../ui/button";

interface Item {
  title: string;
  link: string;
  props?: ButtonProps;
}
export const navItems: Item[] = [
  {
    title: "Funciones",
    link: "#",
  },
  {
    title: "Nosotros",
    link: "#",
  },
];

export const logItems: Item[] = [
  {
    title: "Iniciar Sesión",
    link: "/login",
    props: { variant: "outline" },
  },
  {
    title: "Comenzar",
    link: "#",
  },
];
