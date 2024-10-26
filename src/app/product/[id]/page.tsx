import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/models';

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

type ProductPageParamProps = Promise<{
  id: string;
}>;

export default async function ProductPage(props: {
  params: ProductPageParamProps;
}) {
  const { id } = await props.params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <p className="mt-4">{product.description}</p>
      <p className="text-2xl font-bold mt-2">${product.price}</p>
    </div>
  );
}
