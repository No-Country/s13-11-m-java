export const apiUrl = (import.meta.env.VITE_API_URL as string) ?? "/";

export const authCredentials = {
  email: "usuario@test.com",
  password: "usuario",
};

export const registerCredentials = {
  ...authCredentials,
  name: "Usuario",
  email: "Test",
  address: "Calle Falsa 123",
  phone: "123456789",
};
