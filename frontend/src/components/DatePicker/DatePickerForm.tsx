import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import moment from "moment";

const TimePicker = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const handleTimeChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="time"
      value={value}
      onChange={handleTimeChange}
      className="text-md mx-auto mt-[-20px] block rounded-md border border-gray-300 p-2 text-center"
    />
  );
};

type Props = {
  onChangeDate: (n: Date | string | undefined) => void;
  disabled?: boolean;
  defaultValue?: Date;
};

export function DatePickerForm({ onChangeDate, disabled, defaultValue }: Props) {
  const [date, setDate] = useState<Date | undefined>(defaultValue);
  const [time, setTime] = useState<string>(moment().format("HH:mm"));

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    if (date) {
      const combinedDateTime = moment(date)
        .set({
          hour: parseInt(newTime.split(":")[0]),
          minute: parseInt(newTime.split(":")[1]),
        })
        .toDate();
      setDate(combinedDateTime);
      onChangeDate(moment(combinedDateTime).local().format().slice(0, -6));
    }
  };

  const handleDateChange = (selectedDate: Date) => {
    const combinedDateTime = moment(selectedDate)
      .set({
        hour: parseInt(time.split(":")[0]),
        minute: parseInt(time.split(":")[1]),
      })
      .toDate();
    setDate(combinedDateTime);
    onChangeDate(moment(combinedDateTime).local().format().slice(0, -6));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"ghost"}
          className={cn(
            "flex w-full items-center justify-start rounded-none border border-[#D5D5D5]  bg-[#F5F6FA] pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent",
            !date && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
          {date ? format(date, "Pp", { locale: es }) : <span>Selecciona una fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          modifiers={{
            disabled: { before: new Date() },
          }}
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
          <TimePicker value={time} onChange={handleTimeChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
