import { Product } from '@/interface/product.interface';
import { SeedProduct } from '@/seed/seed';
import React from 'react'
import { ProductGridItems } from './ProductGridItems';

interface Props {
    products: SeedProduct[];
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
      
            {products.map(product => (
                <ProductGridItems key={product.slug} product={product} />
            ))}
        </div>
    )
}
