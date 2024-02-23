import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { Button } from "@/components/ui/button";
import { MdAddCircle } from "react-icons/md";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SelectColumns from "@/components/ui/select-columns";
import { Input } from "@/components/ui/input";
import { AccessorKeyColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useProduct from "@/hooks/useProduct";
import { Product } from "@/app/services/api/types";

const ProductsPage = () => {
  const { products } = useProduct();
  const [selectedColumn, setSelectedColumn] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const onlyVisibleColumns = React.useMemo(
    () => columns.filter((column) => !column.meta?.hidden) as AccessorKeyColumnDef<Product[], unknown>[],
    []
  );

  const handleColumnChange = (value: string) => {
    setSelectedColumn(value);
    setColumnFilters([]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setColumnFilters(value ? [{ id: selectedColumn, value }] : []);
  };

  return (
    <div className="container pt-10">
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">Productos</h2>
        <Button size="rounded" className="px-6">
          <MdAddCircle className="mr-2 h-5 w-5" />
          Crear producto
        </Button>
      </div>
      <div className="flex flex-col py-4 max-md:gap-2 md:flex-row">
        <SelectColumns
          className="w-[180px]"
          columns={onlyVisibleColumns}
          defaultValue={selectedColumn}
          onValueChange={handleColumnChange}
        />
        <Input
          disabled={!selectedColumn}
          value={(columnFilters.find((e) => e.id === selectedColumn)?.value as string) ?? ""}
          placeholder={"Ingrese Valor"}
          onChange={handleChange}
          className="max-w-sm"
        />
      </div>
      <ScrollArea className="h-[50vh] whitespace-nowrap rounded-md border md:h-[60vh]">
        <div className="flex">
          <DataTable
            columns={columns}
            data={products}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
export default ProductsPage;
