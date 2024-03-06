import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProductForm from "@/components/ProductForm/ProductForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { MdArrowBackIos } from "react-icons/md";

import { Product } from "@/schemas/apiSchemas";

import { useCreateProductMutation } from "@/app/services/api/product";

const AddProduct = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = async (values: Product) => {
    try {
      await createProduct(values);
      toast({
        variant: "success",
        title: "Producto Agregado",
        description: "Se agregó un nuevo producto: " + values.name,
      });
      navigate("/products");
    } catch (error) {
      console.error("Error fetching product to Database");
      toast({
        variant: "destructive",
        title: "Error al agregar el producto",
      });
    }
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
