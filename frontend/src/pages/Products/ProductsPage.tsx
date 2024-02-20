import { Product, products } from "./data";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import React from "react";

async function getData(): Promise<Product[]> {
  return products;
}

const ProductsPage = () => {
  const [data, setData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default ProductsPage;
