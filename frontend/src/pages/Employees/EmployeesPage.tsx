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
        <Button size="rounded" className="gap-5 px-32">
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.9997 13.6654V9.66537H18.9997V6.9987H22.9997V2.9987H25.6663V6.9987H29.6663V9.66537H25.6663V13.6654H22.9997ZM10.9997 10.9987C9.53301 10.9987 8.27745 10.4765 7.23301 9.43203C6.18856 8.38759 5.66634 7.13203 5.66634 5.66536C5.66634 4.1987 6.18856 2.94314 7.23301 1.8987C8.27745 0.854254 9.53301 0.332031 10.9997 0.332031C12.4663 0.332031 13.7219 0.854254 14.7663 1.8987C15.8108 2.94314 16.333 4.1987 16.333 5.66536C16.333 7.13203 15.8108 8.38759 14.7663 9.43203C13.7219 10.4765 12.4663 10.9987 10.9997 10.9987ZM0.333008 21.6654V17.932C0.333008 17.1765 0.527452 16.482 0.916341 15.8487C1.30523 15.2154 1.8219 14.732 2.46634 14.3987C3.84412 13.7098 5.24412 13.1931 6.66634 12.8487C8.08856 12.5043 9.53301 12.332 10.9997 12.332C12.4663 12.332 13.9108 12.5043 15.333 12.8487C16.7552 13.1931 18.1552 13.7098 19.533 14.3987C20.1775 14.732 20.6941 15.2154 21.083 15.8487C21.4719 16.482 21.6663 17.1765 21.6663 17.932V21.6654H0.333008ZM2.99967 18.9987H18.9997V17.932C18.9997 17.6876 18.9386 17.4654 18.8163 17.2654C18.6941 17.0654 18.533 16.9098 18.333 16.7987C17.133 16.1987 15.9219 15.7487 14.6997 15.4487C13.4775 15.1487 12.2441 14.9987 10.9997 14.9987C9.75523 14.9987 8.5219 15.1487 7.29967 15.4487C6.07745 15.7487 4.86634 16.1987 3.66634 16.7987C3.46634 16.9098 3.30523 17.0654 3.18301 17.2654C3.06079 17.4654 2.99967 17.6876 2.99967 17.932V18.9987ZM10.9997 8.33203C11.733 8.33203 12.3608 8.07092 12.883 7.5487C13.4052 7.02648 13.6663 6.3987 13.6663 5.66536C13.6663 4.93203 13.4052 4.30425 12.883 3.78203C12.3608 3.25981 11.733 2.9987 10.9997 2.9987C10.2663 2.9987 9.63856 3.25981 9.11634 3.78203C8.59412 4.30425 8.33301 4.93203 8.33301 5.66536C8.33301 6.3987 8.59412 7.02648 9.11634 7.5487C9.63856 8.07092 10.2663 8.33203 10.9997 8.33203Z"
              fill="white"
            />
          </svg>
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
