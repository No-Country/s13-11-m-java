import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import loginFormSchema, { LoginFormInputs } from "@/schemas/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const linkItems = [
  {
    title: "Olvidé mi contraseña",
    link: "/forgot-password",
  },
  {
    title: "¿Aún no tenés cuenta? Registrate",
    link: "/register",
  },
];

const LoginForm = () => {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormInputs) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-full max-w-3xl space-y-8 pt-8">
        <h2 className="text-4xl">Iniciar sesión</h2>
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
        <br />
        <Button className="w-full" type="submit" size="rounded">
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
