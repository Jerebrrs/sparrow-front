import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'

interface Category {
    id: string;
    name: string;
    description: string;
    parentCategory?: string;
    subCategories?: Category[];
    products?: { id: string; name: string; price: number }[]
}

interface CategoryDetailsModalProps {
    category: Category | null
    isOpen: boolean
    onClose: () => void
}
export const CategoryDetailModal: React.FC<CategoryDetailsModalProps> = ({ category, isOpen, onClose }) => {

    if (!category) return null;


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[625px'>
                <DialogHeader>
                    <DialogTitle>{category.name}</DialogTitle>
                    <DialogDescription>{category.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                    {category.subCategories && category.subCategories.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Subcategorías</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Descripción</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {category.subCategories.map((subcat) => (
                                        <TableRow key={subcat.id}>
                                            <TableCell>{subcat.name}</TableCell>
                                            <TableCell>{subcat.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                    {category.products && category.products.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Productos</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Precio</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {category.products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>${product.price.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
