import { Product, products } from "./data";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { Button } from "@/components/ui/button";
import { MdAddCircle } from "react-icons/md";

async function getData(): Promise<Product[]> {
  return products;
}

const ProductsPage = () => {
  const [data, setData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="pt-10">
      <div className="flex md:justify-between">
        <h2 className="text-2xl">Productos</h2>
        <Button size="rounded" className="px-6">
          <MdAddCircle className="mr-2 h-5 w-5" />
          Crear producto
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default ProductsPage;
