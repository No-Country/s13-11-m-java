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
    id: "id",
    accessorKey: "id",
    header: (prop) => ColumnSortButton("ID", prop),
    meta: {
      headerName: "ID",
    },
  },
  {
    id: "name",
    accessorKey: "name",
    header: (prop) => ColumnSortButton("Nombre", prop),
    sortingFn: (rowA, rowB) => {
      const { name: activeA } = rowA.original;
      const { name: activeB } = rowB.original;

      return activeA === activeB ? 0 : activeA ? -1 : 1;
    },
    meta: {
      headerName: "Nombre",
    },
  },
  {
    id: "progress",
    accessorKey: "errorTime",
    header: (prop) => ColumnSortButton("Estado", prop),
    cell: ({ row }) => {
      const { errorTime } = row.original;
      const variant = errorTime % 2 === 0 ? "success" : "destructive";
      return (
        <div className="inline-flex items-center">
          <Badge className="px-1 py-1" variant={variant} />
          <span className="pl-2">{errorTime % 2 === 0 ? "Activo" : "Inactivo"}</span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const { errorTime: idA } = rowA.original;
      const { errorTime: idB } = rowB.original;

      return (idA % 2) - (idB % 2);
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "startDate",
    accessorKey: "startDate",
    header: (prop) => ColumnSortButton("Fecha Inicio", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.initialDate);
      const dateB = new Date(rowB.original.initialDate);
      return dateA.getTime() - dateB.getTime();
    },
    // return 14/2 - 09:00
    cell: ({ row }) => {
      const datetime = new Date(row.original.initialDate);
      const date = datetime.toLocaleDateString([], { month: "2-digit", day: "2-digit" });
      const time = datetime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      return `${date} - ${time}`;
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "endDate",
    accessorKey: "finishEstimatedDate",
    header: "Fecha final",
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.initialDate);
      const dateB = new Date(rowB.original.initialDate);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) => {
      const datetime = new Date(row.original.initialDate);
      const date = datetime.toLocaleDateString([], { month: "2-digit", day: "2-digit" });
      const time = datetime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      return `${date} - ${time}`;
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "client",
    accessorKey: "clientId",
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
              <BsFileEarmarkText className="mr-2" />
              <NavLink to="/order/:orderId">Ver detalle</NavLink>
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
