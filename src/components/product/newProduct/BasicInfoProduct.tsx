import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

interface BasicInfoProps {
    title: string;
    slug: string;
    description: string;
    onTitleChange: (value: string) => void
    onSlugChange: (value: string) => void
    onDescriptionChange: (value: string) => void
}
export const BasicInfoProduct = ({ description, onDescriptionChange, onSlugChange, onTitleChange, slug, title }: BasicInfoProps) => {
    return (
        <Card className='sm:w-auto'>
            <CardHeader>
                <CardTitle>Informacion basica del Producto</CardTitle>
                <CardDescription>Ingrese los detalles principales del producto.</CardDescription>
            </CardHeader>
            <CardContent >
                <div className='items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-3 sm:grid-cols-1'>
                    <div className='space-y-2'>
                        <Label htmlFor="title">Título</Label>
                        <Input
                            id='title'
                            value={title}
                            onChange={(e) => onTitleChange(e.target.value)}
                            placeholder='Titulo del producto' />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            id='slug'
                            value={slug}
                            onChange={(e) => onSlugChange(e.target.value)}
                            placeholder='Slug del producto' />
                    </div>

                </div>
                <div className='space-y-3 p-3 w-full'>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id='description'
                        value={description}
                        onChange={(e) => onDescriptionChange(e.target.value)}
                        placeholder='Description del producto'
                        className='w-full' />
                </div>
            </CardContent>


        </Card>
    )
}
