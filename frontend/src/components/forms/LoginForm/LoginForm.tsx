import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import loginFormSchema, { LoginFormInputs } from "@/schemas/loginFormSchema";

import { formItems, linkItems } from "./items";
import { authCredentials } from "@/constants/api";

interface LoginFormProps {
  onSubmit?: (values: LoginFormInputs) => void;
  loading?: boolean;
}

const LoginForm = ({ loading, onSubmit }: LoginFormProps) => {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: authCredentials.email,
      password: authCredentials.password,
    },
  });

  function handleSubmit(values: LoginFormInputs) {
    onSubmit?.(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto w-full max-w-3xl space-y-8">
        <h2 className="text-4xl">Iniciar sesión</h2>
        {formItems.map((item, index) => (
          <FormField
            key={index}
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
        <Button className="w-full" type="submit" size="rounded" disabled={loading}>
          Iniciar sesión
        </Button>
        <div className="flex flex-col">
          {linkItems.map((item, index) => (
            <Button asChild variant="link" key={index}>
              <Link to={item.link}>{item.title}</Link>
            </Button>
          ))}
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
