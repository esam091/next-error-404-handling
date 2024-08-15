import { notFound } from "next/navigation";

interface Product {
  name: string;
  price: number
}

// We don't use database for the sake of simplicity
// /product/fail will show an error page
// /product/[number] will show the shop data
// Everything else results in product not found
async function getProductById(id: string): Promise<Product | null> {
  if (id === "fail") {
    throw new Error("Failed getting shop detail");
  }

  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    return null;
  }

  return {
    name: `Product ${idNumber}`,
    price: idNumber * 100
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="p-4">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="mt-2">$ {product.price}</p>
    </div>
  );
}
