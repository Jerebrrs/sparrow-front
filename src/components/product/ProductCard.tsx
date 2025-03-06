"use client"

import Link from "next/link";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";


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

export const ProductCard = ({ id, images, isNew, price, priceOriginal, sizes, slug, title }: ProductCardProps) => {

    const discount = priceOriginal ? Math.round((1 - price / priceOriginal) * 100) : 0;
    const [displeyImage, setDispleyImage] = useState(images[0]);
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
            <Link href={`/product/${slug}`} className="block">
                <div className="relative aspect-square">
                    <Image
                        src={displeyImage}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        onMouseEnter={() => setDispleyImage(images[1])}
                        onMouseLeave={() => setDispleyImage(images[0])} />
                    {isNew && (
                        <Badge className="absolute top-2 right-2" variant="secondary">
                            Nuevo
                        </Badge>
                    )}
                    {discount > 0 && (
                        <Badge className="absolute top-2 left-2" variant="destructive">
                            -{discount}%
                        </Badge>
                    )}
                </div>
                <CardContent className="p-4">
                    <h3 className="font-semibold text-lg truncate">{title}</h3>
                    <div>
                        <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
                        {priceOriginal && (
                            <span className="text-sm text-muted-foreground line-through ml-2">${priceOriginal.toFixed(2)}</span>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                        {sizes.length} tallas disponibles
                    </div>
                    <Button size="sm">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        +
                    </Button>
                </CardFooter>

            </Link>
        </Card>
    )
}
