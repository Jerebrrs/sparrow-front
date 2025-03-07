"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, RefreshCcw } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ProductTable } from "./ProductTable"
import { SeedProduct } from "@/seed/seed"


interface ProductDashboardProps {
    initialProducts: SeedProduct[]
}

export const ProductDashboard = ({ initialProducts }: ProductDashboardProps) => {

    const [products, setProducts] = useState(initialProducts);
    const [searchTeam, setSearchTeam] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const categories = useMemo(() => ['all', ...new Set(products.map(p => p.category))], [products]);


    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTeam.toLowerCase()) && (categoryFilter === 'all' || product.category === categoryFilter));
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold" aria-label="Gestión de Productos">Gestión de Productos</h1>
                <div className="flex gap-2">
                    <Link href={"/admin/newProduct"}>
                        <Button><PlusCircle className="mr-2 h-4 w-4 hover:bg-muted" />Añadir Producto</Button>
                    </Link>
                    <Button variant="outline"><RefreshCcw className="mr-2 h-4 w-4 hover:bg-muted" />Refrescar</Button>
                </div>
                
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="Buscar Productos..."
                    value={searchTeam}
                    onChange={(e) => setSearchTeam(e.target.value)}
                    className="max-w-sm shadow-sm border"
                />
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map(category => (
                            <SelectItem key={category} value={category}>
                                {category === 'all' ? 'Todas las categorias' : category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {filteredProducts.length > 0 ? (
                <ProductTable data={filteredProducts} />
            ) : (
                <p className="text-center text-gray-500 mt-4">No hay productos disponibles.</p>
            )}
        </div>
    )
}
