import { states } from "@/components/ProductForm/ProcessModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { RxCaretSort } from "react-icons/rx";

import { FormatedProcess, FormatedSubProcess } from "./OrderDetails";
import { State } from "@/app/services/api/types";
import { ColumnDef, HeaderContext } from "@tanstack/react-table";

function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<FormatedProcess | FormatedSubProcess>[] = [
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
      const estado = row.original.state ?? State.PENDIENTE;
      const estadoText = estado in states ? states[estado] : "Pendiente";
      return (
        <div className="inline-flex items-center">
          <Badge className="px-1 py-1" variant={estado} />
          <span className="pl-2">{estadoText}</span>
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
    cell: ({ row }) => new Date(row.original.initialDate).toLocaleDateString([], { month: "2-digit", day: "2-digit" }),
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
    cell: ({ row }) => new Date(row.original.endDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    meta: {
      hidden: true,
    },
  },
  {
    id: "employee",
    accessorKey: "employee",
    header: (prop) => ColumnSortButton("Empleado", prop),
    meta: {
      headerName: "Empleado",
    },
  },
  {
    id: "actions",
    meta: {
      hidden: true,
    },
    enableHiding: false,
    cell: () => {
      <></>;
    },
  },
];
