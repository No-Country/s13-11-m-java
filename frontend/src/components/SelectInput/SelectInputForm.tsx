import { FormControl } from "../ui/form";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { FaCheck, FaChevronDown } from "react-icons/fa";

import { AllProductsResponse } from "@/app/services/api/types";
import { cn } from "@/lib/utils";

type Option = {
  name: string;
  id?: number | string;
  idUnico?: string;
};

interface Props {
  fieldValue: string;
  title: string;
  fieldName: string;
  setValue: (fieldName: string, value: string) => void;
  selectOptions: Array<Option> | AllProductsResponse | undefined;
  isLoading?: boolean;
  pickId?: (id: number) => void;
}

const boxStyle =
  "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

const SelectInputForm = ({ selectOptions, fieldValue, setValue, title, fieldName, isLoading, pickId }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={boxStyle}
            // className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
          >
            {fieldValue ? fieldValue : `Nombre del ${title}`}
            <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] p-0">
        <Command>
          <CommandInput placeholder={`Buscar ${title}...`} className="h-9" />
          <CommandEmpty>{title} no encontrado.</CommandEmpty>
          <CommandGroup>
            {isLoading
              ? "Loading..."
              : selectOptions?.map((option) => (
                  <CommandItem
                    value={option.name}
                    key={option.id}
                    onSelect={() => {
                      setValue(fieldName, option.name);
                      if (pickId && typeof option.id === "number") {
                        pickId(option.id!);
                      }
                    }}
                  >
                    {option.name}
                    <FaCheck
                      className={cn("ml-auto h-4 w-4", option.name === fieldValue ? "opacity-100" : "opacity-0")}
                    />
                  </CommandItem>
                ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectInputForm;
