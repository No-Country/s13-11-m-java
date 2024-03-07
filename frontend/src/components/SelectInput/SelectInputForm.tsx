import { Link } from "react-router-dom";

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
  timeEstimatedCompletion?: number;
};

interface Props {
  finishTime?: (timeEstimatedCompletion: number) => void;
  fieldValue: string;
  title: string;
  fieldName: string;
  setValue: (fieldName: string, value: string) => void;
  selectOptions: Array<Option> | AllProductsResponse | undefined;
  isLoading?: boolean;
  pickId?: (id: number) => void;
  isProduct?: boolean;
}

const boxStyle =
  " bg-[#F5F6FA] w-full border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

const SelectInputForm = ({
  finishTime,
  selectOptions,
  fieldValue,
  setValue,
  title,
  fieldName,
  isLoading,
  pickId,
  isProduct,
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button variant="outline" role="combobox" className={boxStyle}>
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
            {isProduct && (
              <div className="p-4">
                <Button type="button" asChild variant={"outline"} className="my-2 w-full">
                  <Link to={"/product/create"}>Agregar Producto</Link>
                </Button>
              </div>
            )}
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
                        finishTime && finishTime(option.timeEstimatedCompletion!);
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
