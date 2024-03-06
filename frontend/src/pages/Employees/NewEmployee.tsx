import { Link } from "react-router-dom";

import ProductForm from "@/components/ProductForm/ProductForm";
import { Button } from "@/components/ui/button";

import { MdArrowBackIos } from "react-icons/md";

const NewEmployee = () => {
  return (
    <div className="container pt-10">
      <div className="flex">
        <Button variant={"ghost"} className="px-6">
          <Link to={"/orders"}>
            <MdArrowBackIos className="mr-2 h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Vincular un empleado</h2>
      </div>
      <div className="flex justify-center ">
        <ProductForm />
      </div>
    </div>
  );
};

export default NewEmployee;
