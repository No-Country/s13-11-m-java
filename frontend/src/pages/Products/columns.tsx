import { ColumnDef } from "@tanstack/react-table";
import { Product } from "./data";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical, BsTrash, BsPencilSquare, BsFileEarmarkText } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "progress",
    header: "Progreso",
    cell: ({ row }) => {
      const { progress, total } = row.original;
      const variant = progress <= 0 ? "destructive" : progress < total ? "warning" : "success";
      return (
        <div className="inline-flex items-center">
          <Badge className="px-1 py-1" variant={variant} />
          <span className="pl-2">
            {progress} / {total}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "startDatetime",
    header: "Fecha Inicio",
    cell: ({ row }) =>
      new Date(row.getValue("startDatetime")).toLocaleDateString([], { month: "2-digit", day: "2-digit" }),
  },
  {
    accessorKey: "startDatetime",
    header: "Hora",
    cell: ({ row }) =>
      new Date(row.getValue("startDatetime")).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
  {
    accessorKey: "client",
    header: "Cliente",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
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
              <BsFileEarmarkText className="mr-2" /> Ver detalle
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <BsTrash className="mr-2" /> Eliminar producto
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
