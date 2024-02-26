const ErrorRegister = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-1/3 items-center justify-center bg-primary"></div>
      <div className="mx-auto flex w-2/3 max-w-[658px] items-center justify-center text-center">
        <p className="text-2xl">Lo sentimos, el nombre de usuario o la contraseña ingresados son incorrectos.</p>
      </div>
    </div>
  );
};

export default ErrorRegister;
