'use client';

import { useState } from 'react';
import ProductCard from '../ProductCard';
import { debounce } from '@/utils/debounce';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductList({ products }: { products: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = debounce((searchTerm: string) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(results);
  }, 500);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded p-2 mb-4 w-full"
        onChange={onSearchChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
