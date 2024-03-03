export const apiUrl = (import.meta.env.VITE_API_URL as string) ?? "/";

export const authCredentials = {
  email: "juanperez@mail.com",
  password: "pepe1234",
};

export const registerCredentials = {
  ...authCredentials,
  name: "Usuario",
  lastname: "test",
  email: "Test",
  address: "Calle Falsa 123",
  phone: "123456789",
};
