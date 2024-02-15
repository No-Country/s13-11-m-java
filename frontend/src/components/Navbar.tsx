import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { FaRegBell } from "react-icons/fa6";
import { InputSearch } from "./ui/inputSearch";


const curdate = new Date().toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const userName = "John Doe";
const isAdmin = false;
const isDashboard = true;

function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-4">
      <h1 className="text-3xl">LOGO</h1>
      <div className="flex gap-10">
        <h3>{isDashboard ? curdate : ""}</h3>
      </div>
      <div>
        <InputSearch className="w-[300px]" type="search" placeholder="Buscar" />
      </div>
      <div className="flex items-center gap-6">
        <Button variant="ghost">
          <FaRegBell size={24} />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3>{isAdmin ? "Admin" : userName}</h3>
      </div>
    </div>
  );
}

export default Navbar;
