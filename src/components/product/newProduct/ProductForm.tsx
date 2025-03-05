'use client'
import { useState } from "react";
import { BasicInfoProduct } from "./BasicInfoProduct"
import { PriceStock } from "./PriceStock";
import { ProductDetails } from "./ProductDetails";
import { ProductImages } from "./ProductImages";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";


interface Size {
    size: string;
    stock: number;
}

export const ProductForm = () => {
    const [basicInfo, setBasicInfo] = useState({ title: "", slug: '', description: '' });
    const [priceStock, setPriceStock] = useState<{
        priceOriginal: string;
        price: string;
        inStock: string;
        hasSizes: boolean;
        sizes: Size[]; 
        singleSize: string;
    }>({
        priceOriginal: '',
        price: '',
        inStock: '',
        hasSizes: false,
        sizes: [], 
        singleSize: ''
    });
    const [details, setDetails] = useState({
        width: '',
        length: '',
        weight: '',
        category: '',
        subcategory: '',
        tags: ''
    })

    const [images, setImages] = useState<string[]>([])
    const [isNew, setIsNew] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar los datos del formulario
        console.log({ basicInfo, priceStock, details, images, isNew })
    }

    return (
        <form className="w-full h-auto mx-auto m-2 space-x-2">

            <div className=" h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <BasicInfoProduct   {...basicInfo}
                    onTitleChange={(title) => setBasicInfo({ ...basicInfo, title })}
                    onDescriptionChange={(description) => setBasicInfo({ ...basicInfo, description })}
                    onSlugChange={(slug) => setBasicInfo({ ...basicInfo, slug })}
                />
                <PriceStock
                    {...priceStock}
                    onPriceOriginalChange={(priceOriginal) => setPriceStock({ ...priceStock, priceOriginal })}
                    onPriceChange={(price) => setPriceStock({ ...priceStock, price })}
                    onInStockChange={(inStock) => setPriceStock({ ...priceStock, inStock })}
                    onHasSizesChange={(hasSizes) => setPriceStock({ ...priceStock, hasSizes })}
                    onSizesChange={(sizes) => setPriceStock({ ...priceStock, sizes })}
                    onSingleSizeChange={(singleSize) => setPriceStock({ ...priceStock, singleSize })} />

                <ProductDetails
                    {...details}
                    onWidthChange={(width) => setDetails({ ...details, width })}
                    onLengthChange={(length) => setDetails({ ...details, length })}
                    onWeightChange={(weight) => setDetails({ ...details, weight })}
                    onCategoryChange={(category) => setDetails({ ...details, category })}
                    onSubcategoryChange={(subcategory) => setDetails({ ...details, subcategory })}
                    onTagsChange={(tags) => setDetails({ ...details, tags })} />
                <ProductImages
                    images={images}
                    onImagesChange={setImages}
                />
                <div className="flex items-center space-x-2">
                    <Switch
                        id="isNew"
                        checked={isNew}
                        onCheckedChange={setIsNew}
                    />
                    <Label htmlFor="isNew">Marcar como producto nuevo</Label>
                </div>

            </div>

            <Button type="submit" className="w-full m-3">Crear Producto</Button>
        </form>
    )
}
