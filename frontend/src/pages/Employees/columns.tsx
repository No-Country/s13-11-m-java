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
import { Employee } from "@/app/services/api/types";

function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<Employee>[] = [
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
          <span className="pl-2">{state ? "Activo" : "Desvinculado"}</span>
        </div>
      );
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "startdate",
    accessorKey: "startdate",
    header: (prop) => ColumnSortButton("Fecha de inicio", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.timeEstimatedCompletion);
      const dateB = new Date(rowB.original.timeEstimatedCompletion);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) => {
      const date = new Date(row.original.startdate);
      return date.toLocaleDateString();
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "jornada",
    accessorKey: "jornada",
    header: "Jornada Laboral",
    meta: {
      hidden: true,
    },
  },
  {
    id: "cantidadfinalizados",
    accessorKey: "cantidadfinalizados",
    header: (prop) => ColumnSortButton("Cantidad de productos finalizados", prop),
    meta: {
      headerName: "Cantidad productos finalizados",
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
              <BsFileEarmarkText className="mr-2" /> Ver detalle
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
