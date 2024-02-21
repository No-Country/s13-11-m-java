// Definición de la interfaz para un usuario
export interface User {
  username: string;
  password: string;
}

const users: User[] = [
  { username: "test@mail.com", password: "1234" },
  { username: "test@nocountry.com", password: "contraseña2" },
  { username: "admin@mail.com", password: "contraseña3" },
];

export default users;
