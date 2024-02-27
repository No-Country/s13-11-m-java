import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import registerFormSchema, { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { inputs } from "./items";
import { RegisterError } from "@/app/services/api/types";
import { registerCredentials } from "@/constants/api";

interface RegisterFormProps {
  onSubmit?: (values: RegisterFormInputs) => void | Promise<void>;
  loading?: boolean;
}

const RegisterForm = ({ loading, onSubmit }: RegisterFormProps) => {
  const form = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: registerCredentials.email,
      password: registerCredentials.password,
      firstName: registerCredentials.firstName,
      lastName: registerCredentials.lastName,
      address: registerCredentials.address,
      phone: registerCredentials.phone,
    },
  });

  async function handleSubmit(values: RegisterFormInputs) {
    try {
      await onSubmit?.(values);
    } catch (error) {
      const fetchError = error as RegisterError;
      if (fetchError?.status === 400 && fetchError.data.errors) {
        for (const key in fetchError.data.errors) {
          if (key in values) {
            form.setError(key as keyof RegisterFormInputs, {
              type: "server",
              message: fetchError.data.errors[key as keyof RegisterFormInputs]!,
            });
          }
        }
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto grid w-full max-w-3xl gap-x-12 space-y-8 pt-8 md:grid-cols-2"
      >
        <h2 className="text-4xl md:col-span-2">Creá tu cuenta</h2>

        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name as keyof RegisterFormInputs}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <Input variant="standard" placeholder={input.placeholder} type={input.type} {...field} />
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
