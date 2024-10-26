import { FC } from 'react';
import Link from 'next/link';
import { Product } from './models';
import Image from 'next/image';

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col h-full">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600 mt-2 max-h-16 overflow-hidden text-ellipsis">
        {product.description}
      </p>
      <p className="text-lg font-bold mt-auto">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="text-blue-500 hover:underline mt-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
