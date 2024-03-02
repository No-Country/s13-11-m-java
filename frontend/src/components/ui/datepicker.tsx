import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("h-[55px] w-[400px] justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4 capitalize" />
          {date ? format(date, "PPP", {}) : <span>Selecciona una fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-auto w-auto p-0">
        <Calendar
          mode="single"
          className="select-none capitalize"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={es}
        />
      </PopoverContent>
    </Popover>
  );
}
