import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { FaArrowLeft } from "react-icons/fa";

function PrivacyPolicy() {
  return (
    <div className="position container fixed top-20 mt-6 h-screen overflow-y-auto bg-[#fafafa] px-0 py-4 pb-40">
      <div className="flex items-center gap-4 py-4">
        <Link to="/settings" className="transition-transform hover:scale-125">
          <FaArrowLeft size={24} />
        </Link>
        <span className="text-3xl">Política de Privacidad</span>
      </div>
      <div className="text-md flex w-3/4 flex-col gap-4">
        <span>Última actualización: 20 de febrero de 2024.</span>
        <span>
          Esta Política de Privacidad describe cómo Smart Business Tracker recopila, utiliza y protege la información
          que recopilamos de los usuarios de nuestro sitio web [nombre del sitio web] y de nuestros servicios
          relacionados.
        </span>
        <span className="font-semibold">Información que recopilamos:</span>
        <span>
          Podemos recopilar la siguiente información personal de los usuarios cuando interactúan con nuestro sitio web o
          nuestros servicios:
        </span>
        <div className="ml-4">
          <li>Información de contacto, como nombre, dirección de correo electrónico y número de teléfono.</li>
          <li>Información de identificación personal, como fecha de nacimiento y número de identificación.</li>
          <li>Información demográfica, como ubicación geográfica y preferencias personales.</li>
        </div>
        <span>
          Además, nuestro sitio web puede recopilar automáticamente cierta información no personal sobre el equipo del
          usuario, como la dirección IP, el tipo de navegador, la ubicación geográfica, el idioma preferido y otros
          datos similares.
        </span>
        <span className="font-semibold">Uso de la Información Recopilada: </span>
        <span>Utilizamos la información recopilada para los siguientes propósitos:</span>
        <div className="ml-4">
          <li>Personalizar la experiencia del usuario y ofrecer contenido y publicidad relevantes.</li>
          <li>Procesar transacciones y proporcionar los productos o servicios solicitados.</li>
          <li>Mejorar nuestros productos y servicios.</li>
          <li>
            Comunicarnos con los usuarios sobre actualizaciones, ofertas promocionales y otros fines relacionados con el
            servicio.
          </li>
          <li>Cumplir con las leyes y regulaciones aplicables.</li>
        </div>
        <span className="font-semibold">Cookies y Tecnologías Similares </span>
        <span>
          Nuestro sitio web puede utilizar cookies y otras tecnologías de seguimiento para mejorar la experiencia del
          usuario y recopilar información sobre cómo los usuarios interactúan con nuestro sitio. Estas tecnologías
          pueden incluir, entre otras, cookies de sesión, cookies persistentes, balizas web y píxeles de seguimiento.
          Los usuarios pueden configurar sus navegadores para que rechacen todas las cookies o para que les avisen
          cuando se envíe una cookie. Sin embargo, si los usuarios optan por desactivar las cookies, es posible que
          algunas partes de nuestro sitio web no funcionen correctamente.
        </span>
        <span className="font-semibold">Consentimiento: </span>
        <span>
          Al utilizar nuestro sitio web y servicios, usted acepta los términos de esta Política de Privacidad. Si no
          está de acuerdo con esta Política de Privacidad, le rogamos que no utilice nuestro sitio web ni nuestros
          servicios.
        </span>
        <span className="font-semibold">Mensaje Final:</span>
        <span>
          Al continuar utilizando nuestro sitio web y servicios, usted acepta los términos y condiciones establecidos en
          esta Política de Privacidad. Si no está de acuerdo con estos términos, le rogamos que cese inmediatamente el
          uso de nuestro sitio web y servicios. ¿Acepta los términos de nuestra Política de Privacidad?
        </span>
        <Button variant="default">Aceptar</Button>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
