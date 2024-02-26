import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoMdAddCircleOutline } from "react-icons/io";

function CalendarSettings() {
  return (
    <div className="position container fixed top-20 h-screen bg-[#fafafa] px-0 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 py-4">
          <Link to="/settings" className="transition-transform hover:scale-125">
            <FaArrowLeft size={24} />
          </Link>
          <span className="text-3xl">Calendario</span>
        </div>
        <div>
          <Button variant="default" className="flex items-center gap-2 px-12">
            <IoMdAddCircleOutline size={24} />
            Agregar feriado/ día no laborable
          </Button>
        </div>
      </div>
      <span className="text-xl">
        <h3 className="py-4 text-2xl font-bold">Feriados Nacionales:</h3>
        <li>1 de enero: Año Nuevo.</li>
        <li>12 y 13 de febrero: Carnaval.</li>
        <li>24 de marzo: Día Nacional de la Memoria por la Verdad y la Justicia.</li>
        <li>29 de marzo: Viernes Santo.</li>
        <li>2 de abril: Día del Veterano y de los Caídos en la Guerra de Malvinas..</li>
        <li>1 de mayo: Día del Trabajador.</li>
      </span>
      <span className="text-xl">
        <h3 className="py-4 text-2xl font-bold">Dias no laborales:</h3>
        <li>24 de abril</li>
        <div>
          <li>Sólo para habitantes que profesen la Religión Judía:</li>
          <div className="ml-4">
            <li>
              Pesaj primeros días desde el lunes 22/04/2024 al atardecer hasta el miércoles 24/04/2024 al atardecer
            </li>
            <li>Pesaj últimos días desde el domingo 28/04/2024 al atardecer hasta el martes 30/04/2024 al atardecer</li>
            <li>Rosh Hashaná desde el miércoles 2/10/2024 al atardecer hasta el viernes 4/10/2024 al atardecer</li>
            <li>Iom Kipur desde el sábado 11/10/2024 al atardecer hasta el domingo 12/10/2024 al atardecer</li>
          </div>
          <li>
            Los fines de semana con fines turísticos conforme lo prescriptos por el art. 7 de la Ley N° 27.399, Decreto
            106/2023.
          </li>
        </div>
      </span>
    </div>
  );
}

export default CalendarSettings;
