'use client'


import { SeedProduct } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: SeedProduct;
}

export const ProductGridItems = ({ product }: Props) => {

    const [displeyImage, setDispleyImage] = useState(product.images[0]);

    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`} >

                <Image src={`/products/${displeyImage}`}
                    alt={product.title}
                    className="w-full object-cover rounded" width={200} height={200}
                    onMouseEnter={() => setDispleyImage(product.images[1])}
                    onMouseLeave={() => setDispleyImage(product.images[0])}
                />
            </Link>


            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`} >
                    {product.title}
                </Link>
                <span className="font-bold">${product.price}</span>
            </div>

        </div>
    )
}