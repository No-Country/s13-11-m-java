import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import moment from "moment";

type Props = {
  onChangeDate: (n: Date | string | undefined) => void;
};

export function DatePickerForm({ onChangeDate }: Props) {
  //falta hacer logica para que reciba una startDate y una endDate, para limitar el rango de seleccion

  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-start rounded-none border border-[#D5D5D5] bg-[#F5F6FA]  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent">
          <FormControl>
            <Button type="button" variant={"ghost"} className={cn("", !date && "text-muted-foreground")}>
              <CalendarIcon className="ml-auto mr-2 h-4 w-4 opacity-50" />
              {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
            </Button>
          </FormControl>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          className="select-none capitalize"
          selected={date}
          onSelect={(value) => {
            onChangeDate(moment(value).utc().format().slice(0, -1)), setDate(value);
          }}
          initialFocus
          locale={es}
        />
      </PopoverContent>
    </Popover>
  );
}
