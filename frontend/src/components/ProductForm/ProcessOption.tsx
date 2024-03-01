import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsFileEarmarkText, BsPencilSquare, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

const ProcessOption = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="group h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <BsThreeDotsVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <BsPencilSquare className="mr-2" />
          Modificar producto
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MdOutlinePostAdd className="mr-2" />
          Agregar nota
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BsFileEarmarkText className="mr-2" />
          Ver detalle
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <BsTrash className="mr-2" /> Eliminar producto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProcessOption;
