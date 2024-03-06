// import React from "react";

// import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
// import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import SelectColumns from "@/components/ui/select-columns";

// import AddEmployee from "@/components/icons/AddEmployee";

import { columns } from "./columns";
// import { Employee } from "@/app/services/api/types";
import {optionsComparative } from "@/data/Dashboard/comparative/comparative.chart";
import { dataEmployee } from "@/data/Dashboard/donuts/employee.data";
// import { AccessorKeyColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import {
  ArcElement,
  BarElement, // Legend,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { dataProcessE } from "@/data/Dashboard/donuts/employeedonut.data";
import { dataComparativeEmployee } from "@/data/Dashboard/comparative/comparativeEmployee.chart";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  CategoryScale,
  PointElement,
  LineElement
);
const EmployeesPage = () => {
  // const [selectedColumn, setSelectedColumn] = React.useState("");
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const employees = [
    {
      id : 1,
      name: "Juan García",
      state: true,
      startdate: "2015-03-15",
      jornada: "8 hs",
      cantidadfinalizados: 70,
      productId: 7,
      clientId: 7,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
    {
      id: 2,
      name: "Ana Rodríguez",
      state: true,
      startdate: "2018-07-20",
      jornada: "7 hs",
      cantidadfinalizados: 45,
      productId: 3,
      clientId: 3,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
    {
      id: 3,
      name: "Carlos López",
      state: false,
      startdate: "2017-02-10",
      jornada: "6 hs",
      cantidadfinalizados: 55,
      productId: 2,
      clientId: 2,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
    {
      id: 4,
      name: "Laura Sánchez",
      state: false,
      startdate: "2019-09-05",
      jornada: "8 hs",
      cantidadfinalizados: 60,
      productId: 6,
      clientId: 6,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
    {
      id: 5,
      name: "Pedro Pérez",
      state: true,
      startdate: "2016-11-03",
      jornada: "7 hs",
      cantidadfinalizados: 65,
      productId: 4,
      clientId: 4,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
    {
      id: 6,
      name: "Martin Gonzalez",
      state: true,
      startdate: "2016-11-03",
      jornada: "8 hs",
      cantidadfinalizados: 70,
      productId: 4,
      clientId: 4,
      role: "usuario",
      timeEstimatedCompletion: "",
      company: "1",
      active: true,
    },
  ];

  // const onlyVisibleColumns = React.useMemo(
  //   () => columns.filter((column) => !column.meta?.hidden) as AccessorKeyColumnDef<Employee[], unknown>[],
  //   []
  // );

  // const handleColumnChange = (value: string) => {
  //   setSelectedColumn(value);
  //   setColumnFilters([]);
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   const value = event.target.value;
  //   setColumnFilters(value ? [{ id: selectedColumn, value }] : []);
  // };

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">Empleados</h2>
        {/* <Button size="rounded-xl" className="w-full max-w-sm max-sm:px-0">
          <AddEmployee className="h-6 w-6" />
          VINCULAR UN EMPLEADO
        </Button> */}
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-6">
        <div className="col-span-full flex h-full grid-flow-row flex-col rounded-2xl">
          <div className="flex flex-col py-4 max-md:gap-2 md:flex-row">
            {/* <SelectColumns
              className="w-[180px]"
              columns={onlyVisibleColumns}
              defaultValue={selectedColumn}
              onValueChange={handleColumnChange}
            /> */}
            {/* <Input
              disabled={!selectedColumn}
              value={(columnFilters.find((e) => e.id === selectedColumn)?.value as string) ?? ""}
              placeholder={"Ingrese Valor"}
              onChange={handleChange}
              className="max-w-sm"
            /> */}
          </div>
          <div className="col-span-full h-[50vh] grid-flow-row rounded-2xl bg-background p-4 shadow-2xl md:col-span-3 md:row-span-2 md:h-[60vh]">
            <ScrollArea className="h-full whitespace-nowrap rounded-md border">
              <div className="flex">
                <DataTable
                  columns={columns}
                  data={employees}
                  // columnFilters={columnFilters}
                  // setColumnFilters={setColumnFilters}
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <div className="rounded-2xl bg-background p-4 shadow-2xl md:col-span-2">
          <div className="max-w-48">
          <h2 className="text-1xl">Rendimiento de empleados</h2>
            <Doughnut className="max-w-48 mt-10" data={dataProcessE} />
          </div>
        </div>
        <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-md:order-5 md:col-span-3">
          <Line options={optionsComparative} data={dataComparativeEmployee} height={200} />
        </div>
        <div className="rounded-2xl bg-background p-4 shadow-2xl md:col-span-2">
          <div className="max-w-48">
          <h2 className="text-1xl">Rendimiento de empleados</h2>
            <Doughnut className="max-w-48 mt-10" data={dataEmployee} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeesPage;
