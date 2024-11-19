export const revalidate = 60; // 60 segundos
import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import { redirect } from 'next/navigation';
// import { getPaginatedProductWithImages } from '@/actions';
// import { Pagination, ProductGrid, Title } from '@/components';

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const products = initialData.products;
  //   const { products, totalPage } = await getPaginatedProductWithImages({ page });


  //   if (products.length === 0) {
  //     redirect('/');
  //   }


  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2 text-center"
      />

      <ProductGrid
        products={products}
      />

      {/* 
      <Pagination totalPage={totalPage} />  */}

    </>
  );
}