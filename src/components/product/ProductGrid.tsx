import { Product } from '@/interface/product.interface';
import { SeedProduct } from '@/seed/seed';
import React from 'react'
import { ProductGridItems } from './ProductGridItems';
import { ProductCard } from './ProductCard';

interface Props {
    products: SeedProduct[];
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map(product => (
                <ProductCard key={product.id} {...product} />
                // <ProductGridItems key={product.slug} product={product} />
            ))}
        </div>
    )
}
