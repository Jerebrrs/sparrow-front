import { SeedProduct } from '@/seed/seed';
import React from 'react'
import { ProductCard } from './ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Props {
    products: SeedProduct[];
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}

            </div>
            <div className="text-center mt-8">
                <Button asChild>
                    <Link href="/productos">
                        Ver todos los productos
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </>

    )
}
