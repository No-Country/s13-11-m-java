import { Link, useNavigate } from "react-router-dom";

import OrderForm from "@/components/OrderForm/OrderForm";
import { Button } from "@/components/ui/button";

import { MdArrowBackIos } from "react-icons/md";

import { useCreateOrderMutation } from "@/app/services/api/order";
import { CreateOrderRequestAPI } from "@/app/services/api/types";

const OrderPage = () => {
  const navigate = useNavigate();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleSubmit = async (values: CreateOrderRequestAPI) => {
    await createOrder(values).unwrap();
    navigate("/orders");
  };
  return (
    <div>
      <div className="flex">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={"/products"}>
            <MdArrowBackIos className="h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Hacer un nuevo pedido</h2>
      </div>
      <div className="flex justify-center">
        <OrderForm isLoading={isLoading} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default OrderPage;
