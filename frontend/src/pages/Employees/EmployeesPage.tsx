import React from "react";

// import useEmployee from "@/hooks/useEmp";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SelectColumns from "@/components/ui/select-columns";

import AddEmployee from "@/components/icons/AddEmployee";

import { columns } from "./columns";
import { Employee } from "@/app/services/api/types";
import { dataComparative, optionsComparative } from "@/data/Dashboard/comparative/comparative.chart";
import { dataEmployee } from "@/data/Dashboard/donuts/employee.data";
import { dataProcessQ } from "@/data/Dashboard/donuts/process.dataq";
import { AccessorKeyColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import { Doughnut, Line } from "react-chartjs-2";

const EmployeesPage = () => {
  // const { employees } = useEmployee();
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
    <div className="container py-10">
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">Empleados</h2>
        <Button size="rounded-xl" className="w-full max-w-sm max-sm:px-0">
          <AddEmployee className="h-6 w-6" />
          VINCULAR UN EMPLEADO
        </Button>
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-full flex h-full max-h-[26rem] grid-flow-row flex-col rounded-2xl">
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
                data={employees}
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
              />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="rounded-2xl bg-background p-4 shadow-2xl md:col-span-2">
          <div className="max-w-48">
            <Doughnut data={dataProcessQ} />
          </div>
        </div>
        <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-md:order-5 md:col-span-3">
          <Line options={optionsComparative} data={dataComparative} height={200} />
        </div>
        <div className="rounded-2xl bg-background p-4 shadow-2xl md:col-span-2">
          <div className="max-w-48">
            <Doughnut data={dataEmployee} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeesPage;
