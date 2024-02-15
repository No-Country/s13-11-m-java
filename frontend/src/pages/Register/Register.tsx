import RegisterForm from "@/components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-[900px]">
      <section className="left-0 flex w-1/3 items-center justify-center bg-[#00304B]">
        <img src="@/assets/bro.png" />
      </section>
      <section className="right-0 flex w-2/3 flex-col items-center justify-center">
        <header className="mb-3 text-start text-4xl">Crea tu cuenta</header>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
