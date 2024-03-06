import { NavLink } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { RxCaretSort } from "react-icons/rx";

import { ProductAPI } from "@/app/services/api/types";
import { ColumnDef, HeaderContext } from "@tanstack/react-table";

function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<ProductAPI>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: (prop) => ColumnSortButton("Nombre", prop),
    meta: {
      headerName: "Nombre",
    },
  },
  {
    id: "progress",
    accessorKey: "state",
    header: (prop) => ColumnSortButton("Estado", prop),
    sortingFn: (rowA, rowB) => {
      const { active: activeA } = rowA.original;
      const { active: activeB } = rowB.original;

      return activeA === activeB ? 0 : activeA ? -1 : 1;
    },
    cell: ({ row }) => {
      const { active } = row.original;
      const variant = active ? "success" : "destructive";
      return (
        <div className="inline-flex items-center">
          <Badge className="px-1 py-1" variant={variant} />
          <span className="pl-2">{active ? "Activo" : "Inactivo"}</span>
        </div>
      );
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "timeEstimatedCompletion",
    accessorKey: "timeEstimatedCompletion",
    header: (prop) => ColumnSortButton("Fecha Inicio", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.timeEstimatedCompletion);
      const dateB = new Date(rowB.original.timeEstimatedCompletion);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) =>
      new Date(row.original.timeEstimatedCompletion).toLocaleDateString([], { month: "2-digit", day: "2-digit" }),
    meta: {
      hidden: true,
    },
  },
  {
    id: "startTime",
    accessorKey: "startTime",
    header: "Hora",
    cell: ({ row }) =>
      new Date(row.original.timeEstimatedCompletion).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    meta: {
      hidden: true,
    },
  },
  {
    id: "client",
    accessorKey: "client",
    header: (prop) => ColumnSortButton("Cliente", prop),
    meta: {
      headerName: "Cliente",
    },
  },
  {
    id: "actions",
    meta: {
      hidden: true,
    },
    enableHiding: false,
    cell: ({ row }) => {
      const { id } = row.original;
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
              <NavLink to={`/order/${id}`}>Ver detalle</NavLink>
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
