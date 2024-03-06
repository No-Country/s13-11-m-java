import { Link } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menubar, MenubarContent, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";

import { FaBars } from "react-icons/fa6";

import Logo from "../Logo";
import { logItems } from "./items";

function Navbar() {
  const { isLogin, user, logout } = useAuth();
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-background shadow-sm">
      <div className="container p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-14 w-14 text-primary" />
            <span className="mt-4 w-36 select-none font-bold text-primary">SMART BUSINESS TRACKER</span>
          </Link>
          {isLogin ? (
            <div className="flex grow justify-end space-x-2 md:space-x-4">
              {/* {matches ? (
                <div>
                  <InputSearch className="max-w-60" type="search" placeholder="Buscar" />
                </div>
              ) : (
                <Button variant="ghost" size="icon">
                  <IoSearch size={24} />
                </Button>
              )} */}
              {/* <Button variant="ghost" size="icon">
                <FaRegBell size={24} />
              </Button> */}
              <div className="flex items-center">
                <Dropdown onClick={logout} />
                <h3 className="hidden md:block">
                  {user?.firstName} {user?.lastName}
                </h3>
              </div>
            </div>
          ) : matches ? (
            <>
              <div className="flex grow justify-center">
                <div>
                  {/* {navItems.map((item, index) => (
                    <Button variant="link" key={index} asChild>
                      <Link to={item.link}>{item.title}</Link>
                    </Button>
                  ))} */}
                </div>
              </div>
              <div className="space-x-4">
                {logItems.map((item, index) => (
                  <Button {...item.props} className=" max-lg:px-10" size="rounded-xl" key={index} asChild>
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <div className="flex grow justify-end">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">
                    <FaBars />
                  </MenubarTrigger>
                  <MenubarContent>
                    {/* {navItems.map((item, index) => (
                      <MenubarItem key={index} asChild className="cursor-pointer">
                        <Link to={item.link}>{item.title}</Link>
                      </MenubarItem>
                    ))} */}
                    <MenubarSeparator />
                    {logItems.map((item, index) => (
                      <div key={index} className="flex py-1.5">
                        <Button {...item.props} className="w-full cursor-pointer" size="xs" asChild>
                          <Link to={item.link}>{item.title}</Link>
                        </Button>
                      </div>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

export function Dropdown({ onClick }: { onClick: () => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer md:mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={onClick}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
