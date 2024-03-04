import { Link } from "react-router-dom";

import OrderForm from "@/components/OrderForm/OrderForm";
import { Button } from "@/components/ui/button";

import { MdArrowBackIos } from "react-icons/md";

const OrderPage = () => {
  return (
    <div className="container pt-10">
      <div className="flex">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={"/products"}>
            <MdArrowBackIos className="h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Hacer un nuevo pedido</h2>
      </div>
      <div className="flex justify-center ">
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
