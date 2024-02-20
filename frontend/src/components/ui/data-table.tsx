import React from "react";

import {
  AccessorKeyColumnDef,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "./input";
import { SelectProps } from "@radix-ui/react-select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [selectedColumn, setSelectedColumn] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const onlyVisibleColumns = React.useMemo(
    () => columns.filter((column) => !column.meta?.hidden) as AccessorKeyColumnDef<TData, TValue>[],
    [columns]
  );

  return (
    <div>
      <h2 className="text-2xl">Productos</h2>
      <div className="flex flex-col py-4 max-md:gap-2 md:flex-row">
        <SelectOnlyColumns
          columns={onlyVisibleColumns}
          defaultValue={selectedColumn}
          onValueChange={(value) => {
            table.resetColumnFilters(true);
            setSelectedColumn(value);
          }}
        />
        <Input
          value={(columnFilters.find((e) => e.id === selectedColumn)?.value as string) ?? ""}
          placeholder={"Ingrese Valor"}
          onChange={(event) => {
            if (!selectedColumn) return;
            table.getColumn(selectedColumn)?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No hay Resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function SelectOnlyColumns<TData, TValue>({
  columns,
  ...rest
}: { columns: AccessorKeyColumnDef<TData, TValue>[] } & SelectProps) {
  return (
    <Select {...rest}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filtra por" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Columnas</SelectLabel>
          {columns.map((column) => (
            <SelectItem key={column.id} value={column.accessorKey as string}>
              {column.header as string}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
