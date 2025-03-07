"use client"

import { CategoryDetailModal, CategoryForm } from "@/components";
import CategoriesTable from "@/components/product/categories/CategoriesTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
const initialCategories = [
    {
        id: '1',
        name: 'Ropa',
        description: 'Todo tipo de prendas de vestir',
        subcategories: 2,
        products: 15,
    },
    {
        id: '2',
        name: 'Accesorios',
        description: 'Complementos para tus outfits',
        subcategories: 1,
        products: 8,
    },
    // Añade más categorías de ejemplo aquí
]

export default function CategoriesPage() {
    const [categories, setCategories] = useState(initialCategories)
    const [showForm, setShowForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleViewDetails = (category: any) => {
        setSelectedCategory(category)
        setIsModalOpen(true)
      }
    
      const handleEdit = (category: any) => {
        // Implementar lógica de edición
        console.log('Editar categoría:', category)
      }
    
      const handleDelete = (category: any) => {
        // Implementar lógica de eliminación
        console.log('Eliminar categoría:', category)
      }
    
    const handleCreateCategory = (data: { name: string; description: string; parentCategory?: string }) => {
        const newCategory = {
            id: (categories.length + 1).toString(),
            ...data,
            subcategories: 0,
            products: 0,
        }
        setCategories([...categories, newCategory])
        // setShowForm(false)
    }
    return (
        <div className="space-y-6 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Gestión de Categorías</h1>
                <Button onClick={() => setShowForm(!showForm)}>
                    <PlusCircle className="mr-2 h4 w-4" />
                    {showForm ? "Cerrar Formulario" : "Nueva Categoría"}
                </Button>
            </div>
            {showForm && (
                <CategoryForm
                    categories={categories}
                    onSubmit={handleCreateCategory}
                />
            )}

            <CategoriesTable
                categories={categories}
                onViewDetails={handleViewDetails}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <CategoryDetailModal category={selectedCategory} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div >
    )
}