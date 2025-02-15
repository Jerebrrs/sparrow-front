import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";



export default function AdminPage() {
    return (

        <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" placeholder="Título del producto" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" placeholder="slug-del-producto" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Descripción del producto" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="priceOriginal">Precio Original</Label>
                    <Input id="priceOriginal" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">Precio de Venta</Label>
                    <Input id="price" type="number" placeholder="0.00" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="inStock">Stock</Label>
                    <Input id="inStock" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="sizes">Tallas</Label>
                    <Input id="sizes" placeholder="S, M, L, XL" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="category">Categoría</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="jeans">Jeans</SelectItem>
                            <SelectItem value="camisetas">Camisetas</SelectItem>
                            <SelectItem value="accesorios">Accesorios</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subcategory">Subcategoría</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar subcategoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mom">Mom</SelectItem>
                            <SelectItem value="skinny">Skinny</SelectItem>
                            <SelectItem value="boyfriend">Boyfriend</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="tags">Etiquetas</Label>
                <Input id="tags" placeholder="bermuda, jean, verano" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="images">Imágenes</Label>
                <Input id="images" type="file" multiple />
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" id="isNew" />
                <Label htmlFor="isNew">Producto Nuevo</Label>
            </div>
            <Button type="submit">Crear Producto</Button>
        </form>
    )


}