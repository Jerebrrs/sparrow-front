import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import React, { useRef } from "react"

interface ProductImagesProps {
    images: string[]
    onImagesChange: (images: string[]) => void
}

export const ProductImages: React.FC<ProductImagesProps> = ({ images = [], onImagesChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file))
            onImagesChange([...images, ...newImages].slice(0, 4))
        }
    }

    const removeImage = (index: number) => {
        onImagesChange(images.filter((_, i) => i !== index))
    }
    return (
        <Card>
            <CardHeader>  <CardTitle>Imagenes del Producto</CardTitle>
                <CardDescription>Suba al menos 2 imagenes del producto (máximo 4).</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 mb-4">
                    {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="w-full sm:w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden relative"
                        >
                            {images && images[index] ? (
                                <div className="relative w-full h-full">
                                    <img
                                        src={images[index] || "/placeholder.svg"}
                                        alt={`Imagen ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        aria-label={`Eliminar imagen ${index + 1}`}
                                    >
                                        X
                                    </button>
                                </div>
                            ) : (
                                <Badge variant={index < 2 ? "destructive" : "secondary"}>
                                    {index < 2 ? 'Requerida' : 'Opcional'}
                                </Badge>
                            )}
                        </div>
                    ))}

                </div>
                <Input id="images"
                    type="file" multiple
                    accept="image/**"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                />
                <Button type="button"
                    disabled={images.length >= 4}
                    onClick={() => fileInputRef.current?.click()}>
                    Subir Imagenes
                </Button>
                {images.length < 2 && (
                    <p className="text-sm text-red-500 flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Se requieren al menos 2 imágenes
                    </p>
                )}
            </CardContent >
        </Card >
    )
}
