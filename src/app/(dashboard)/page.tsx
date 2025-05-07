import Products from '@/src/components/product/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-2xl shadow p-4">
        <Products />
      </div>
    </div>
  );
}
