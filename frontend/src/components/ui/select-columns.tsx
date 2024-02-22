import { AccessorKeyColumnDef } from "@tanstack/react-table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";
import { SelectProps } from "@radix-ui/react-select";

import { MdOutlineFilterAlt } from "react-icons/md";

function SelectColumns<TData, TValue>({
  columns,
  className,
  ...rest
}: { columns: AccessorKeyColumnDef<TData, TValue>[] } & SelectProps & { className?: string }) {
  return (
    <Select {...rest}>
      <SelectTrigger className={className}>
        <MdOutlineFilterAlt className="h-6 w-6" />
        <SelectValue placeholder="Filtra por" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Columnas</SelectLabel>
          {columns.map((column) => (
            <SelectItem key={column.id} value={column.accessorKey as string}>
              {column.meta?.headerName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectColumns;
