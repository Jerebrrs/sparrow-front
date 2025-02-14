import { ProductCard } from "./ProductCard"


interface ProductCardProps {
    id: number;
    description?: string;
    images: string[];
    inStock?: number;
    priceOriginal: number;
    price: number;
    sizes: string[];
    slug: string;
    tags?: string[];
    title: string;
    category?: string;
    subcategory?: string;
    isNew?: boolean;
}

interface BestSellersProps {
    products: ProductCardProps[]
}

export const BestSellers = ({ products }: BestSellersProps) => {
    return (
        <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Productos más vendidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                images={product.images}
                price={product.price}
                priceOriginal={product.priceOriginal}
                slug={product.slug}
                sizes={product.sizes}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </section>
    )
}
