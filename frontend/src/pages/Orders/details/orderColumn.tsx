import { states } from "@/components/ProductForm/ProcessModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IoPlayCircle } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";
import { RxCaretSort } from "react-icons/rx";

import { useUpdateOrderMutation } from "@/app/services/api/order";
import { ProductOrder, State } from "@/app/services/api/types";
import { ColumnDef, HeaderContext } from "@tanstack/react-table";

function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<ProductOrder>[] = [
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
    cell: function Component({ row }) {
      const [update, { isLoading }] = useUpdateOrderMutation();

      const handleSubmit = () => {
        const { client, id, state } = row.original;
        console.log({ client, id, state });
        return;
        if (state === State.PENDIENTE) {
          update({
            orderId: id,
            client: client,
            state: State.EN_PROGRESO,
          });
        } else if (state === State.EN_PROGRESO) {
          update({
            orderId: id,
            client: client,
            state: State.PENDIENTE,
          });
        }
      };
      return (
        <div className="inline-flex items-center">
          {new Date(row.original.initialDate).toLocaleDateString([], { month: "2-digit", day: "2-digit" })}
          <Button variant="ghost" className="ml-2 h-8 w-8 p-1" onClick={handleSubmit} disabled={isLoading}>
            {row.original.state === State.PENDIENTE ? (
              <IoPlayCircle className="text-xl" />
            ) : (
              <IoPauseCircle className="text-xl" />
            )}
          </Button>
        </div>
      );
    },
    meta: {
      hidden: true,
    },
  },
  {
    id: "endDate",
    accessorKey: "endDate",
    header: (prop) => ColumnSortButton("Fecha final", prop),
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.finishEstimatedDate);
      const dateB = new Date(rowB.original.finishEstimatedDate);
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) =>
      new Date(row.original.finishEstimatedDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
      <></>;
    },
  },
];
