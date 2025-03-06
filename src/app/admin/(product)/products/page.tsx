import { ProductDashboard } from "@/components";
import { initialData } from "@/seed/seed";

export default function ProductsPage() {
    return (
        <div className="container mx-auto py-10">
            <ProductDashboard initialProducts={initialData.products} />
        </div>
    )
}