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

const TimePicker = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const handleTimeChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
    //es la hora
    console.log(e.target.value);
  };

  return (
    <input
      type="time"
      value={value}
      onChange={handleTimeChange}
      className="mx-auto mt-[-20px] block rounded-md border border-gray-300 p-2 text-center text-xl"
    />
  );
};

type Props = {
  onChangeDate: (n: Date | string | undefined) => void;
};

export function DatePickerForm({ onChangeDate }: Props) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>(moment().format("HH:mm"));

  const handleDateChange = (selectedDate: Date) => {
    if (time) {
      const combinedDateTime = moment(selectedDate)
        .set({
          hour: parseInt(time.split(":")[0]),
          minute: parseInt(time.split(":")[1]),
        })
        .toDate();
      setDate(combinedDateTime);
      //este valor se envia a form con onchange date
      onChangeDate(moment(combinedDateTime).local().format().slice(0, -6));
      console.log(combinedDateTime);
    } else {
      setDate(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-start rounded-none border border-[#D5D5D5] bg-[#F5F6FA]  hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent">
          <FormControl>
            <Button type="button" variant={"ghost"} className={cn("", !date && "text-muted-foreground")}>
              <CalendarIcon className="ml-auto mr-2 h-4 w-4 opacity-50" />
              {date ? format(date, "Pp", { locale: es }) : <span>Selecciona una fecha</span>}
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
            if (value instanceof Date) {
              handleDateChange(value);
            }
          }}
          initialFocus
          locale={es}
        />
        <div className="p-4">
          <TimePicker value={time} onChange={setTime} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
