import RegisterForm from "@/components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-[900px] flex">
      <section className="left bg-[#00304B] w-1/3 flex justify-center items-center">
        <img src="@/assets/bro.png" />
      </section>
      <section className="right w-2/3 flex flex-col justify-center items-center">
        <header className="text-4xl text-start mb-3">Crea tu cuenta</header>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
