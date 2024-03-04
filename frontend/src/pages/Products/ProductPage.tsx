import { Link, useNavigate } from "react-router-dom";

import ProductForm from "@/components/ProductForm/ProductForm";
import { Button } from "@/components/ui/button";

import { MdArrowBackIos } from "react-icons/md";

import { ProductFormInputs } from "@/schemas/productSchema";

import { useCreateProductMutation } from "@/app/services/api";

const AddProduct = () => {
  const navigate = useNavigate();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleSubmit = async (values: ProductFormInputs) => {
    await createProduct(values).unwrap();
    navigate("/products");
  };

  const defaultValues: ProductFormInputs = {
    idUnico: "ejemplo007",
    name: "rueda puerco",
    instruction: "rueda negra",
    description: "hacer rueda cuadrada",
    timeEstimatedCompletion: "200",
  };

  return (
    <div className="container pt-10">
      <div className="flex">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={"/order"}>
            <MdArrowBackIos className="h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Agregar un nuevo producto</h2>
      </div>
      <div className="flex justify-center pb-10">
        <ProductForm loading={isLoading} onSubmit={handleSubmit} defaultValues={defaultValues} />
      </div>
    </div>
  );
};

export default AddProduct;
