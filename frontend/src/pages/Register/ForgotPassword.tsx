import AuthTemplate from "@/components/AuthTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ForgotPasswordImage from "@/assets/forgot_password.svg";
import forgotPasswordSchema, { ForgotPasswordFormInputs } from "@/schemas/forgotPasswordSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const ForgotPassword2 = () => {
  const form = useForm<ForgotPasswordFormInputs>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ForgotPasswordFormInputs) {
    console.log(values);
  }
  return (
    <AuthTemplate image={ForgotPasswordImage}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid max-w-3xl grid-cols-1 gap-4 space-y-4">
          <h2 className="text-4xl">¿Olvidaste tu contraseña?</h2>
          <p className="text-2xl">Ingresá tu mail para que podamos enviarte información de como recuperarla. </p>
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
          <Button className="w-full rounded-full">Enviar</Button>
        </form>
      </Form>
    </AuthTemplate>
  );
};

export default ForgotPassword2;