
import { Button } from "@/components/ui/button";
import { RxCaretSort } from "react-icons/rx";

import { Product } from "@/app/services/api/types";
import { ColumnDef, HeaderContext } from "@tanstack/react-table";

function ColumnSortButton<Tdata>(name: string, { column }: HeaderContext<Tdata, unknown>) {
  return (
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {name}
      <RxCaretSort className="ml-2 h-4 w-4" />
    </Button>
  );
}

export const columns: ColumnDef<Product>[] = [
  {
    id: "idUnico",
    accessorKey: "idUnico",
    header: (prop) => ColumnSortButton("ID", prop),
    meta: {
      headerName: "ID",
    },
  },
  {
    id: "name",
    accessorKey: "name",
    header: (prop) => ColumnSortButton("Nombre", prop),
    meta: {
      headerName: "Nombre",
    },
  },
  {
    id: "description",
    accessorKey: "description",
    header: "Descripción",
    meta: {
      hidden: true,
    },
  },
 ]