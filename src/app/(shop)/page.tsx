export const revalidate = 60; // 60 segundos
import { BestSellers, InstagramSection, ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  const products = initialData.products;

  return (
    <>
      <Title
        title="No podemos cambiar el mundo sino cambiamos nosotros primero."
        subtitle="Todos los productos"
        className="mb-2 text-center"
      />

      <ProductGrid
        products={products}
      />
      <BestSellers products={products} />
      <InstagramSection />

    </>
  );
}