"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, RefreshCcw } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ProductTable } from "./ProductTable"
import { SeedProduct } from "@/seed/seed"


interface ProductDashboardProps {
    initialProducts: SeedProduct[]
}

export const ProductDashboard = ({ initialProducts }: ProductDashboardProps) => {

    const [products, setProducts] = useState(initialProducts);
    const [searchTeam, setSearchTeam] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const categories = ['all', ...new Set(products.map(p => p.category))]

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTeam.toLowerCase()) && (categoryFilter === 'all' || product.category === categoryFilter));
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold"> Gestion de Productos.</h1>
                <div className="flex gap-2">
                    <Link href={"/admin/newProduct"}>
                        <Button><PlusCircle className="mr-2 h-4 w-4" />Añadir Producto</Button>
                    </Link>

                </div>
                <div className="flex gap-2" >
                    <Button variant="outline"><RefreshCcw className="mr-2 h-4 w-4" />Refrescar</Button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="Buscar Productos..."
                    value={searchTeam}
                    onChange={(e) => setSearchTeam(e.target.value)}
                    className="max-w-sm"
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
            <ProductTable data={filteredProducts} />
        </div>
    )
}
