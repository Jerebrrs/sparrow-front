"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SeedProduct } from "@/seed/seed";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { ArrowUpDown, Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const columns: ColumnDef<SeedProduct>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Titulo <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-10 h-10 relative hidden sm:block">
                    <Image src={row.original.images[0] || '/placeholder.svg'}
                        alt={row.getValue("title")}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div>{row.getValue("title")}</div>
            </div>

        )
    }, {
        accessorKey: "category",
        header: 'Categoria',
        cell: ({ row }) => <Badge className="hidden sm:table-cell">{row.getValue("category")}</Badge>,
        meta: { className: "hidden sm:table-cell" } // Ocultar en móvil
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Precio <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "ARG"
            }).format(price);
            return <div className="font-medium">{formatted}</div>

        }
    },
    {
        accessorKey: 'inStock',
        header: "Stock",
        cell: ({ row }) => {
            const stock = row.getValue('inStock') as number;
            return (
                <Badge variant={stock > 0 ? "outline" : "destructive"}>{stock > 0 ? `${stock} disponibles` : 'Agotado'}</Badge>
            )
        },
 
    },
    {
        accessorKey: "isNew",
        header: "Nuevo",
        cell: ({ row }) => (
            <Badge className="hidden sm:table-cell"  variant={row.getValue("isNew") ? "default" : "secondary"}>
                {row.getValue("isNew") ? "Nuevo" : "Regular"}
            </Badge>
        ),
        meta: { className: "hidden sm:table-cell" }
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const product = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0"><span className="sr-only">Abrir Menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id.toString())} >Copiar ID del Producto</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" /> Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Editar producto
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" /> Eliminar producto
                        </DropdownMenuItem>

                    </DropdownMenuContent >
                </DropdownMenu >
            )
        }
    }
];
export function ProductTable({ data = [] }: { data?: SeedProduct[] }) {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting
        }
    })
    return (
        <div className="space-y-4">
            <div className="rounded-md border overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        {table.getHeaderGroups().map((hederGroup) => (
                            <TableRow key={hederGroup.id} className="hidden sm:table-row">
                                {hederGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} datastatdata-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (<TableRow> <TableCell colSpan={columns.length} className="h-24 text-center">
                            No se encontraron resultados.
                        </TableCell></TableRow>)}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Anterior</Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Siguiente</Button>
                </div>
            </div>
        </div>
    )
}
