import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { Button } from "@/components/ui/button";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SelectColumns from "@/components/ui/select-columns";
import { Input } from "@/components/ui/input";
import { AccessorKeyColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useProduct from "@/hooks/useProduct";
import { Employee } from "@/app/services/api/types";
import AddEmployeeIcon from "@/components/icons/AddEmployeeIcon";

const EmployeesPage = () => {
  const { products } = useProduct();
  const [selectedColumn, setSelectedColumn] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const onlyVisibleColumns = React.useMemo(
    () => columns.filter((column) => !column.meta?.hidden) as AccessorKeyColumnDef<Employee[], unknown>[],
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
        <h2 className="text-2xl">Empleados</h2>
        <Button size="rounded-xl">
          <AddEmployeeIcon className="mr-4 w-6" />
          VINCULAR UN EMPLEADO
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
export default EmployeesPage;
