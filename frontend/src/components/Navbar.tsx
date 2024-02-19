import React from "react";
import { Link } from "react-router-dom";

import { FaRegBell } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, ButtonProps } from "./ui/button";
import { InputSearch } from "./ui/inputSearch";

const navItems = [
  {
    title: "Funciones",
    link: "#",
  },
  {
    title: "Nosotros",
    link: "#",
  },
];
interface LogItem {
  title: string;
  link: string;
  props?: ButtonProps;
}

const logItems: LogItem[] = [
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

function Navbar() {
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <header className="container sticky inset-x-0 top-0 z-50 flex items-center bg-background p-4">
      <h1 className="text-3xl">LOGO</h1>
      <div className="flex grow justify-center">
        {!isLogin && (
          <div className="space-x-4">
            {navItems.map((item, index) => (
              <Button variant="link" key={index} className="text-base" asChild>
                <Link to={item.link}>{item.title}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
      {isLogin ? (
        <div className="flex space-x-4">
          <InputSearch className="w-60" type="search" placeholder="Buscar" />
          <Button variant="ghost" size="icon">
            <FaRegBell size={24} />
          </Button>
          <div className="flex items-center">
            <Avatar className="mr-4 cursor-pointer" onClick={handleLogin}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3>Admin</h3>
          </div>
        </div>
      ) : (
        <div className="space-x-4">
          {logItems.map((item, index) => (
            <Button
              onClick={index === 1 ? handleLogin : undefined}
              {...item.props}
              className="text-base"
              size="rounded-xl"
              key={index}
              asChild
            >
              <Link to={item.link}>{item.title}</Link>
            </Button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
