import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import registerFormSchema, { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { registerCredentials } from "@/constants/api";

interface RegisterFormProps {
  onSubmit?: (values: RegisterFormInputs) => void;
  loading?: boolean;
}

const RegisterForm2 = ({ loading, onSubmit }: RegisterFormProps) => {
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingresa tu email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingrese su nombre"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingrese su apellido"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direccion</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingrese su dirección"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de teléfono</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Ingrese su número de teléfono"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <Button className="w-full md:col-span-2" type="submit" size="rounded" disabled={loading}>
          Registrate
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm2;
