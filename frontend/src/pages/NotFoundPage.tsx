import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-light text-gray-600">Página no encontrada</p>
        <p className="mt-4 text-gray-600">Lo sentimos, la página que buscas no existe o fue movida.</p>
        <Link to="/">
          <Button className="mt-6" variant="default">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
