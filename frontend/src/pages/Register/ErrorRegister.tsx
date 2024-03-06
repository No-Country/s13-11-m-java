const ErrorRegister = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/3 bg-primary flex justify-center items-center"></div>
      <div className="w-2/3 flex justify-center items-center max-w-[658px] text-center mx-auto">
        <p className="text-2xl">Lo sentimos, el nombre de usuario o la contraseña ingresados son incorrectos.</p>
      </div>
    </div>
  );
};

export default ErrorRegister;
