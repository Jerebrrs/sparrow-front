'use client'
import { useState } from "react";
import { BasicInfoProduct } from "./BasicInfoProduct"
import { PriceStock } from "./PriceStock";

export const ProductForm = () => {
    const [basicInfo, setBasicInfo] = useState({ title: "", slug: '', description: '' });

    return (
        <form className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <BasicInfoProduct   {...basicInfo}
                onTitleChange={(title) => setBasicInfo({ ...basicInfo, title })}
                onDescriptionChange={(description) => setBasicInfo({ ...basicInfo, description })}
                onSlugChange={(slug) => setBasicInfo({ ...basicInfo, slug })}
            />
            {/* <PriceStock /> */}
        </form>
    )
}
