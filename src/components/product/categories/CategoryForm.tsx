"use client"
import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";


interface CategoryFormProps {
    categories: { id: string, name: string }[]
    onSubmit: (data: { name: string; description: string; parentCategory?: string }) => void;
}
export const CategoryForm: React.FC<CategoryFormProps> = ({ categories, onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [parentCategory, setParentCategory] = useState<string | undefined>(undefined)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ name, description, parentCategory })
        setName('')
        setDescription('')
        setParentCategory(undefined)
    }

    return (
        <Card >
            <CardHeader>
                <CardTitle>Crear Nueva Categoria</CardTitle>
                <CardDescription>Añade una nueva categoria o subcategoria para tus productos</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre de la Categoria</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Jeans, Gorras, Remeras..." required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Breve descripcion de la cateegoria." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="parentCategory">Categoria Padre (Opcional)</Label>
                        <Select value={parentCategory} onValueChange={setParentCategory}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar categoria padre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="null">Ninguna (Categoria Principal)</SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit">Crear Categoría</Button>
                </form>
            </CardContent>
        </Card>
    )
}
