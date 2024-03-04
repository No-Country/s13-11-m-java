export const linkItems = [
  {
    title: "Olvidé mi contraseña",
    link: "/forgot-password",
  },
  {
    title: "¿Aún no tenés cuenta? Registrate",
    link: "/register",
  },
];

export const formItems = [
  {
    name: "email" as const,
    label: "Email",
    placeholder: "Ingresa tu email",
  },
  {
    name: "password" as const,
    label: "Contraseña",
    placeholder: "Ingresa tu contraseña",
    type: "password",
  },
];
