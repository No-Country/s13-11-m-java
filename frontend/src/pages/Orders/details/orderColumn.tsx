import { states } from "@/components/ProductForm/ProcessModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    cell: function Component({ row }) {
      const { id, product } = row.original;

      const estado = row.original.state ?? State.PENDIENTE;
      const [update, { isLoading }] = useUpdateOrderMutation();

      const handleSubmit = (value: State) => {
        update({
          orderId: id,
          productId: product.id,
          state: value,
        });
      };
      return (
        <Select key={estado} onValueChange={handleSubmit} value={estado} disabled={isLoading}>
          <SelectTrigger>
            <SelectValue placeholder="Select a verified email to display" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(states).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                <Badge className="mr-2 px-1 py-1" variant={key as State} />
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
      return new Date(row.original.initialDate).toLocaleDateString([], { month: "2-digit", day: "2-digit" });
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
