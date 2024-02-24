import { Link } from "react-router-dom";

import { FaRegBell } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/hooks/useAuth";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaBars } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import { Button } from "../ui/button";
import { InputSearch } from "../ui/inputSearch";
import { logItems, navItems } from "./items";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Navbar() {
  const { isLogin, user, logout } = useAuth();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background py-4 shadow-sm">
      <div className="container flex items-center">
        <Logo />
        {isLogin ? (
          <div className="flex grow justify-end space-x-4">
            <div>
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
        ) : matches ? (
          <>
            <div className="flex grow justify-center">
              <div>
                {navItems.map((item, index) => (
                  <Button variant="link" key={index} asChild>
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="hidden space-x-4 md:block">
              {logItems.map((item, index) => (
                <Button {...item.props} className=" max-lg:px-10" size="rounded-xl" key={index} asChild>
                  <Link to={item.link}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="inline-flex grow justify-end">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <FaBars />
                </MenubarTrigger>
                <MenubarContent>
                  {navItems.map((item, index) => (
                    <MenubarItem key={index} inset>
                      <Link to={item.link}>{item.title}</Link>
                    </MenubarItem>
                  ))}
                  <MenubarSeparator />
                  {logItems.map((item, index) => (
                    <MenubarItem key={index}>
                      <Button {...item.props} className="w-full py-2" size="xs" asChild>
                        <Link to={item.link}>{item.title}</Link>
                      </Button>
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
