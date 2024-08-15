import { notFound } from "next/navigation";

interface Shop {
  name: string;
  description: string;
}

// We don't use database for the sake of simplicity
// /shop/fail will show an error page
// /shop/[number] will show the shop data
// Everything else results in shop not found
async function getShopById(id: string): Promise<Shop | null> {
  if (id === "fail") {
    throw new Error("Failed getting shop detail");
  }

  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    return null;
  }

  return {
    name: `Shop ${idNumber}`,
    description: `Description ${idNumber}`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const shop = await getShopById(params.id);

  if (!shop) {
    notFound();
  }

  return (
    <div>
      <h2 className="font-semibold">Welcome to {shop.name}</h2>
      <p className="mt-2">{shop.description}</p>
    </div>
  );
}
