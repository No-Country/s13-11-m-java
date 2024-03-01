import { Link } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import { Button } from "../ui/button";
import { InputSearch } from "../ui/inputSearch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaRegBell } from "react-icons/fa6";

import Logo from "../Logo";
import { logItems, navItems } from "./items";

function Navbar() {
  const { isLogin, user, logout } = useAuth();

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background p-4 shadow-sm">
      <div className="container flex items-center">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <Logo className="h-14 w-14" />
          <span className="mt-4 w-40 select-none font-bold">SMART BUSINESS TRACKER</span>
        </Link>
        <div className="flex grow justify-end md:justify-center">
          {isLogin && (
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
            <div className="hidden md:block">
              <InputSearch className="w-60" type="search" placeholder="Buscar" />
            </div>
            <Button variant="ghost" size="icon">
              <FaRegBell size={24} />
            </Button>
            <div className="flex items-center">
              <Avatar className="mr-4 cursor-pointer" onClick={logout}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="hidden md:block">
                {user?.firstName} {user?.lastName}
              </h3>
            </div>
          </div>
        ) : (
          <div className="hidden space-x-4 md:block">
            {logItems.map((item, index) => (
              <Button {...item.props} className="text-base" size="rounded-xl" key={index} asChild>
                <Link to={item.link}>{item.title}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
