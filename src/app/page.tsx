import ProductList from '@/components/ProductList';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
}
