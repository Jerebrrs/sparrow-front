'use client'
import { useState } from "react";
import { BasicInfoProduct } from "./BasicInfoProduct"
import { PriceStock } from "./PriceStock";


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
        sizes: Size[]; // Aquí definimos que es un array de Size
        singleSize: string;
    }>({
        priceOriginal: '',
        price: '',
        inStock: '',
        hasSizes: false,
        sizes: [], // Ahora TypeScript sabe que esto es un array de Size
        singleSize: ''
    });

    return (
        <form className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
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
        </form>
    )
}
