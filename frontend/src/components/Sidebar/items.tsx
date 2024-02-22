import {
  MdOutlineCalendarMonth,
  MdOutlineDashboard,
  MdOutlineListAlt,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
} from "react-icons/md";

export const menuItems = [
  {
    icon: <MdOutlineCalendarMonth size={24} />,
    label: "Calendario",
    href: "/calendar",
  },
  {
    icon: <MdOutlineDashboard size={24} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <MdOutlineListAlt size={24} />,
    label: "Pedidos",
    href: "/orders",
  },
  {
    icon: <MdOutlinePeopleAlt size={24} />,
    label: "Empleados",
    href: "/employees",
  },
  {
    icon: <MdOutlineSettings size={24} />,
    label: "Configuración",
    href: "/configuration",
  },
];
