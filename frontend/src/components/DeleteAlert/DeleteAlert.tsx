import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { BsTrash } from "react-icons/bs";

type Props = {
  isLoading: boolean;
  deleteFn: (id: number) => void;
  cancelFn?: () => void;
  idItem: number;
};

const DeleteAlert = ({ isLoading, deleteFn, cancelFn, idItem }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="p-0 leading-3" variant={"ghost"}>
          <BsTrash className="mr-2" /> Eliminar pedido
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro de borrar este item?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente el pedido y eliminará sus datos de nuestro
            servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancelFn}>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            disabled={isLoading}
            onClick={() => {
              cancelFn?.();
              deleteFn(idItem);
            }}
          >
            Borrar este pedido
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
