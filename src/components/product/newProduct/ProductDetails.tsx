import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailsProps {
    width: string;
    length: string;
    weight: string;
    category: string;
    subcategory: string;
    tags: string;
    onWidthChange: (value: string) => void;
    onLengthChange: (value: string) => void;
    onWeightChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onSubcategoryChange: (value: string) => void;
    onTagsChange: (value: string) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ category, length, onCategoryChange, onLengthChange, onSubcategoryChange, onTagsChange, onWeightChange, onWidthChange, subcategory, tags, weight, width }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Detalles del Producto</CardTitle>
                <CardDescription>Especifique las caracteristicas fisicas y categorizacion del producto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Tabs defaultValue="category" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="category" >Categorización</TabsTrigger>
                        <TabsTrigger value="dimensions">Dimenciones</TabsTrigger>
                    </TabsList>
                    <TabsContent value="category">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Categoria</Label>
                                <Select value={category} onValueChange={onCategoryChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="jeans">Jeans</SelectItem>
                                        <SelectItem value="remeras">Remeras</SelectItem>
                                        <SelectItem value="Gorras">Gorras</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subcategory">Sub Categoria</Label>
                                <Select value={subcategory} onValueChange={onSubcategoryChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar subcategoria." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="oversize">Overize</SelectItem>
                                        <SelectItem value="Gorras">Gorras</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2 mt-4">
                            <Label htmlFor="tags">Etiquetas</Label>

                            <Input id="tags" value={tags} onChange={(e) => onTagsChange(e.target.value)} placeholder="Jeans, remeras, etc.. " />

                            <p className="text-sm text-gray-500">Separe las etiquetas con comas</p>
                        </div>
                    </TabsContent>
                    <TabsContent value="dimensions">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="width">Ancho (cm)</Label>
                                <Input
                                    id="width"
                                    type="number"
                                    value={width}
                                    onChange={(e) => onWidthChange(e.target.value)}
                                    placeholder="0"
                                    min="0"
                                    step="0.1"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="length">Largo (cm)</Label>
                                <Input
                                    id="length"
                                    type="number"
                                    value={length}
                                    onChange={(e) => onLengthChange(e.target.value)}
                                    placeholder="0"
                                    min="0"
                                    step="0.1"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight">Peso (kg)</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    value={weight}
                                    onChange={(e) => onWeightChange(e.target.value)}
                                    placeholder="0.00"
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
