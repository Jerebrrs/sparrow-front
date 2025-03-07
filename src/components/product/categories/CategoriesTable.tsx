import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Category {
    id: string
    name: string
    description: string
    parentCategory?: string
    subcategories?: number
    products?: number
}

interface CategoriesTableProps {
    categories: Category[]
    onViewDetails: (category: Category) => void
    onEdit: (category: Category) => void
    onDelete: (category: Category) => void
}

const CategoriesTable: React.FC<CategoriesTableProps> = ({
    categories,
    onViewDetails,
    onEdit,
    onDelete
}) => {
    return (
        <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Nombre</TableHead>
                <TableHead className="hidden md:table-cell">Descripción</TableHead>
                <TableHead className="hidden lg:table-cell w-[10%]">Subcategorías</TableHead>
                <TableHead className="hidden lg:table-cell w-[10%]">Productos</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    {category.name}
                    <div className="md:hidden text-sm text-muted-foreground">{category.description}</div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{category.description}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant="secondary">{category.subcategories || 0}</Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant="secondary">{category.products || 0}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="icon" onClick={() => onViewDetails(category)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => onEdit(category)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => onDelete(category)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="lg:hidden mt-2 text-sm text-muted-foreground">
                      <span className="mr-2">Subcategorías: {category.subcategories || 0}</span>
                      <span>Productos: {category.products || 0}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
}

export default CategoriesTable