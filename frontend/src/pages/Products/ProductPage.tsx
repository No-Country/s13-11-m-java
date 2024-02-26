import { Button } from "@/components/ui/button";
import { MdArrowBackIos } from "react-icons/md";

import ProductForm from "@/components/ProductForm/ProductForm";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="container pt-10">
      <div className="flex">
        <Button variant={"ghost"} className="px-6">
          <Link to={"/order"}>
            <MdArrowBackIos className="mr-2 h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Agregar un nuevo producto</h2>
      </div>
      <div className="flex justify-center ">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProduct;
