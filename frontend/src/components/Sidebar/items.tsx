import CalendarIcon from "../icons/CalendarIcon";
import ConfigurationIcon from "../icons/ConfigurationIcon";
import DashboardIcon from "../icons/DashboardIcon";
import EmployeesIcon from "../icons/EmployeesIcon";
import OrdersIcon from "../icons/OrdersIcon";
import ProductsIcon from "../icons/ProductsIcon";

export const menuItems = [
  {
    icon: <CalendarIcon />,
    label: "Calendario",
    href: "/calendar",
  },
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <OrdersIcon />,
    label: "Pedidos",
    href: "/orders",
  },
  {
    icon: <ProductsIcon />,
    label: "Productos",
    href: "/products",
  },
  {
    icon: <EmployeesIcon />,
    label: "Empleados",
    href: "/employees",
  },
  {
    icon: <ConfigurationIcon />,
    label: "Configuración",
    href: "/configuration",
  },
];
