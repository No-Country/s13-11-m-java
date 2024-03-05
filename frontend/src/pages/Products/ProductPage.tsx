import { Link } from "react-router-dom";

import ProductForm from "@/components/ProductForm/ProductForm";
import { Button } from "@/components/ui/button";

import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Product } from "@/schemas/apiSchemas";
import { useCreateProductMutation } from "@/app/services/api";
const AddProduct = () => {
  const navigate = useNavigate();
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = async (values: Product) => {
    console.log(values);
    await createProduct(values);
    navigate("/products");
  };

  return (
    <div className="container w-full pt-6">
      <div className="flex">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={"/order"}>
            <MdArrowBackIos className="h-5 w-5" />
          </Link>
        </Button>
        <h2 className="text-2xl">Agregar un nuevo producto</h2>
      </div>
      <div className="mx-auto max-w-2xl">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProduct;
