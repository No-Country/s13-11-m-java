import { ColumnDef, HeaderContext } from "@tanstack/react-table";
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
import { RxCaretSort } from "react-icons/rx";
import { Order } from "@/app/services/api/types";
import { NavLink } from "react-router-dom";
function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<Order>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: (prop) => ColumnSortButton("Nombre", prop),
    meta: {
      headerName: "Nombre",
    },
  },
  {
    id: "state",
    accessorKey: "state",
    header: (prop) => ColumnSortButton("Estado", prop),
    sortingFn: (rowA, rowB) => {
      const { state: activeA } = rowA.original;
      const { state: activeB } = rowB.original;

      return activeA === activeB ? 0 : activeA ? -1 : 1;
    },
    cell: ({ row }) => {
      const { state } = row.original;
      const variant = state ? "success" : "destructive";
      return (
        <div className="inline-flex items-center">
          <Badge className="px-1 py-1" variant={variant} />
          <span className="pl-2">{state ? "Activo" : "Inactivo"}</span>
        </div>
      );
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "initialDate",
    accessorKey: "initialDate",
    header: (prop) => ColumnSortButton("Fecha inicio", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.initialDate);
      const dateB = new Date(rowB.original.initialDate);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) =>
      new Date(row.original.timeEstimatedCompletion).toLocaleDateString([], { month: "2-digit", day: "2-digit" }),
    meta: {
      hidden: true,
    },
  },
  {
    id: "endDate",
    accessorKey: "endDate",
    header: (prop) => ColumnSortButton("Fecha final", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.endDate);
      const dateB = new Date(rowB.original.endDate);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) =>
      new Date(row.original.timeEstimatedCompletion).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    meta: {
      hidden: true,
    },
  },
  {
    id: "actions",
    meta: {
      hidden: true,
    },
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
              Modificar empleado
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MdOutlinePostAdd className="mr-2" />
              Agregar nota
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BsFileEarmarkText className="mr-2" />
              <NavLink to="/order/:orderId">Ver detalle</NavLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <BsTrash className="mr-2" /> Eliminar empleado
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
