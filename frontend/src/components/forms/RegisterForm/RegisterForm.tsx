import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import registerFormSchema, { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { formItems } from "./items";

interface RegisterFormProps {
  loading?: boolean;
  defaultValues?: RegisterFormInputs;
  onSubmit?: (values: RegisterFormInputs) => void;
}

const RegisterForm = ({ loading, defaultValues, onSubmit }: RegisterFormProps) => {
  const form = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: defaultValues,
  });

  function handleSubmit(values: RegisterFormInputs) {
    onSubmit?.(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto grid w-full max-w-3xl gap-x-12 space-y-8 pt-8 md:grid-cols-2"
      >
        <h2 className="text-4xl md:col-span-2">Creá tu cuenta</h2>
        {formItems.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Ingresa tu email"
                    type={item.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <br />
        <Button className="w-full md:col-span-2" type="submit" size="rounded" disabled={loading}>
          Registrate
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
