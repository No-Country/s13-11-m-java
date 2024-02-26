import ProductsIcon from "../icons/ProductsIcon";
import {
  MdOutlineCalendarMonth,
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
  MdReceiptLong,
} from "react-icons/md";

export const menuItems = [
  {
    icon: <MdOutlineCalendarMonth />,
    label: "Calendario",
    href: "/calendar",
  },
  {
    icon: <MdOutlineDashboard />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <MdReceiptLong />,
    label: "Pedidos",
    href: "/orders",
  },
  {
    icon: <ProductsIcon />,
    label: "Productos",
    href: "/products",
  },
  {
    icon: <MdOutlinePeopleAlt />,
    label: "Empleados",
    href: "/employees",
  },
  {
    icon: <MdOutlineSettings />,
    label: "Configuración",
    href: "/settings",
  },
];
