import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoShield } from "react-icons/go";
function SecurityPrivacy() {
  return (
    <div className="position container fixed top-20 h-screen bg-[#fafafa] px-0 py-4">
      <div className="flex items-center gap-4 py-4">
        <Link to="/settings" className="transition-transform hover:scale-125">
          <FaArrowLeft size={24} />
        </Link>
        <span className="text-3xl">Privacidad y Seguridad</span>
      </div>
      <div className="text-2xl">
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <RiLockPasswordLine size={28} />
          <Link to="/settings/password">Reestablecer Contraseña</Link>
        </button>
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <GoShield size={28} />
          <Link to="/settings/privacy">Política de Privacidad</Link>
        </button>
      </div>
    </div>
  );
}

export default SecurityPrivacy;
