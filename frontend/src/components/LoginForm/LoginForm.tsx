import React from "react";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { MdWarning } from "react-icons/md";

import loginFormSchema, { LoginFormInputs } from "@/schemas/loginFormSchema";

import { inputs, linkItems } from "./items";
import { LoginError } from "@/app/services/api/types";
import { authCredentials } from "@/constants/api";

interface LoginFormProps {
  onSubmit?: (values: LoginFormInputs) => void | Promise<void>;
  loading?: boolean;
}

const LoginForm = ({ loading, onSubmit }: LoginFormProps) => {
  const [error, setError] = React.useState<string | null>(null);
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: authCredentials.email,
      password: authCredentials.password,
    },
  });

  async function handleSubmit(values: LoginFormInputs) {
    setError(null);
    try {
      await onSubmit?.(values);
    } catch (error) {
      const fetchError = error as LoginError;
      if (fetchError.status === 401 && fetchError.data.error) {
        setError(fetchError.data.error);
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto w-full max-w-3xl space-y-8 pt-8">
        <h2 className="text-4xl">Iniciar sesión</h2>
        {inputs.map((input, index) => (
          <FormField
            control={form.control}
            name={input.name as keyof LoginFormInputs}
            key={index}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder={input.placeholder}
                    type={input.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {error && (
          <FormMessage className="inline-flex items-center">
            <MdWarning size={32} className="mr-2" />
            {error}
          </FormMessage>
        )}
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
