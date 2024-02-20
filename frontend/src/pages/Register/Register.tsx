import RegisterForm from "@/components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <section className="flex min-h-screen w-full flex-col items-center justify-center bg-primary lg:w-1/3">
        <h1 className="mx-auto max-w-[80%] text-3xl text-white">
          Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza.
        </h1>
        <img src="/src/assets/register.svg" />
      </section>

      <section className="mx-auto flex min-h-screen flex-col justify-center lg:px-12">
        <header className="mb-6 text-start text-4xl">Crea tu cuenta</header>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
