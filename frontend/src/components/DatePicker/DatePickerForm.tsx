"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
  onChangeDate: (n: Date | string | undefined) => void;
};

export function DatePickerForm({ onChangeDate }: Props) {
  //falta hacer logica para que reciba una startDate y una endDate, para limitar el rango de seleccion

  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn("h-[55px] w-[400px] justify-start text-center font-normal", !date && "text-muted-foreground")}
          >
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            {date ? format(date, "PPP", {}) : <span>Selecciona una fecha</span>}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          className="select-none capitalize"
          selected={date}
          onSelect={(value) => {
            onChangeDate(value?.toISOString()), setDate(value);
          }}
          initialFocus
          locale={es}
        />
      </PopoverContent>
    </Popover>
  );
}
