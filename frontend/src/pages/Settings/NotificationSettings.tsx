import { Link } from "react-router-dom";

import { Switch } from "@/components/ui/switch";

import { FaArrowLeft } from "react-icons/fa";

const NotificationSettings = () => {
  return (
    <div>
      <div className="flex items-center gap-4 border-b-2 py-4">
        <Link to="/settings" className="transition-transform hover:scale-125">
          <FaArrowLeft size={24} />
        </Link>
        <span className="text-3xl">Notificaciones</span>
      </div>
      <div className="flex flex-col gap-4 border-b-2 py-4 text-xl">
        <span className="font-bold">Alertas de cambios en la programación</span>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <span className="mr-14">
              Recibir notificaciones sobre modificaciones en el horario de producción, cambios en las fechas de entrega
              de productos o ajustes en los tiempos de producción.
            </span>
            <Switch />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b-2 py-4 text-xl">
        <span className="font-bold">Recordatorios de fechas importantes</span>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <span className="mr-14">
              Ser notificado sobre fechas límite de proyectos, eventos importantes relacionados con la producción,
              reuniones de planificación o revisiones de desempeño del proceso.
            </span>
            <Switch />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-b-2 py-4 text-xl">
        <span className="font-bold">Informes de eficiencia y productividad</span>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <span className="mr-14">
              Recibir notificaciones periódicas que resuman la eficiencia y productividad de los diferentes procesos de
              producción, comparando con objetivos establecidos o con períodos anteriores, identificando áreas de mejora
              o éxito.
            </span>
            <Switch />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
