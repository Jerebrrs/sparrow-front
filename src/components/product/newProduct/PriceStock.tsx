import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Minus, Plus } from "lucide-react";

export interface Size {
    size: string;
    stock: number;
}

interface PriceStockProps {
    priceOriginal: string;
    price: string;
    inStock: string;
    hasSizes: boolean;
    sizes: Size[];
    singleSize: string;
    onPriceOriginalChange: (value: string) => void;
    onPriceChange: (value: string) => void;
    onInStockChange: (value: string) => void;
    onHasSizesChange: (value: boolean) => void;
    onSizesChange: (value: Size[]) => void;
    onSingleSizeChange: (value: string) => void;

}
export const PriceStock = ({ hasSizes, inStock, onHasSizesChange, onInStockChange, onPriceChange, onPriceOriginalChange, onSingleSizeChange, onSizesChange, price, priceOriginal, singleSize, sizes }: PriceStockProps) => {

    const handleSizeChange = (index: number, field: 'size' | 'stock', value: string) => {
        const newSizes = [...sizes]
        newSizes[index] = { ...newSizes[index], [field]: field === 'stock' ? parseInt(value) : value }
        onSizesChange(newSizes)
    }

    const addSizes = () => {
        onSizesChange([...sizes, { size: '', stock: 0 }]);
    }

    const removeSize = (index: number) => {
        onSizesChange(sizes.filter((_, i) => i !== index))
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Precios y Stock</CardTitle>
                <CardDescription>Configure los precios y el inventario del producto.s</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="priceOriginal" >Precio Original</Label>
                        <Input id="priceOriginal" type="number" value={priceOriginal} onChange={(e) => onPriceOriginalChange(e.target.value)} placeholder="0.00" min="0" step="0.01" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="price" >Precio de Venta</Label>
                        <Input id="price" type="number" value={price} onChange={(e) => onPriceChange(e.target.value)} placeholder="0.00" min="0" step="0.01" />
                    </div>
                </div>
                {!hasSizes && (
                    <div className="space-y-2">
                        <Label htmlFor="inStock">Stock</Label>
                        <Input id="inStock" type="number" value={inStock} onChange={(e) => onInStockChange(e.target.value)} placeholder="0" min={0} />
                    </div>
                )}
                <div className="flex items-center space-x-2">
                    <Switch id="hasSizes" checked={hasSizes} onCheckedChange={(checked) => onHasSizesChange(checked)} />

                    <Label htmlFor="hasSizes">Producto con tallas múltiples</Label>
                </div>
                {hasSizes && (
                    <div className="space-y-4">
                        <Label className="block">Tallas y Stock</Label>
                        {sizes.map((size, index) => (
                            <div key={index} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-start sm:items-center">
                                <Input
                                    placeholder="Talla"
                                    value={size.size}
                                    onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                                    className="w-full sm:w-1/3"
                                />
                                <Input
                                    type="number"
                                    placeholder="Stock"
                                    value={size.stock}
                                    onChange={(e) => handleSizeChange(index, 'stock', e.target.value)}
                                    min="0"
                                    className="w-full sm:w-1/3"
                                />
                                <Button type="button" variant="outline" size="icon" onClick={() => removeSize(index)}>
                                    <Minus className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        <div className="mt-4">
                            <Button type="button" variant="outline" onClick={addSizes}>
                                <Plus className="h-4 w-4 mr-2" /> Agregar Talla
                            </Button>
                        </div>

                    </div>

                )}
            </CardContent>
        </Card>
    )
}
