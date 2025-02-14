import { BestSellers, ProductMobileSlidesShow, ProductSlidesShow } from "@/components";
import { Button } from "@/components/ui/button";
import { titleFont } from "@/config/font/fonts";
import { initialData } from "@/seed/seed";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link";
import { LuCornerUpLeft } from "react-icons/lu";
import { Label } from "@/components/ui/label"
import { notFound } from "next/navigation";
import { ResolvingMetadata } from "next";
export const revalidate = 10000;

interface Props {
    params: {
        slug: string;
    }
}

export const getProductBySlug = (slug: string) => {
    return initialData.products.find(product => product.slug === slug) || null;
};

const bestSellers = initialData.products;
export async function generateMEtadata({ params }: Props, parent: ResolvingMetadata) {
    const { slug } = params;

    const product = getProductBySlug(slug);

    return {
        tittle: product?.title ?? 'Producto no encontrado',
        description: product?.description ?? 'Description no encontrado',
        openGraph: {
            tittle: product?.title ?? 'Producto no encontrado',
            description: product?.description ?? 'Description no encontrado',
            images: [`/products/${product?.images[0]}`]
        }
    }
}

export default async function ProductBySlugPage({ params }: Props) {
    const { slug } = params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href={"/"} className="inline-block mb-6">
                <Button variant="outline" size="sm">
                    <LuCornerUpLeft className="mr-2 h-4 w-4" />
                    Volver
                </Button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <ProductMobileSlidesShow title={product.title} images={product.images} className="block md:hidden" />
                <ProductSlidesShow title={product.title} images={product.images} className="hidden md:block" />

                <div className="space-y-6">
                    <h1 className={`${titleFont.className} text-3xl font-bold`}>{product.title}</h1>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Precio</h3>
                        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                        {product.priceOriginal && product.priceOriginal > product.price && (
                            <p className="text-sm text-gray-500 line-through">${product.priceOriginal.toFixed(2)}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Selecciona una talla:</h2>
                        <RadioGroup defaultValue={product.sizes[0]}>
                            <div className="flex flex-wrap gap-4">
                                {product.sizes.map((size) => (
                                    <div key={size}>
                                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                                        <Label
                                            htmlFor={`size-${size}`}
                                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                                        >
                                            {size}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    <Button size="lg" className="w-full md:w-auto">
                        Agregar al carrito
                    </Button>
                </div>
            </div>

            <BestSellers products={bestSellers} />
        </div>
    )
}