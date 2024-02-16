import RegisterForm from "@/components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-[calc(100%-70px)] md:flex">
        <section className="flex-col items-center justify-center bg-primary md:flex  md:w-1/3">
          <h1 className="mx-auto max-w-[80%] text-3xl text-white">
            Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza.
          </h1>
          <img src="/src/assets/register.svg" />
        </section>
        <section className="right-0 flex w-2/3 flex-col items-center justify-center">
          <header className="mb-3 text-start text-4xl">Crea tu cuenta</header>
          <RegisterForm />
        </section>
      </div>
    </div>
  );
};

export default Register;
