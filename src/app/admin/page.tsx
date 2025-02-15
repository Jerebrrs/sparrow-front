"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShoppingCart, Users, DollarSign } from "lucide-react";

export default function AdminPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta de Ventas Totales */}
            <Card>
                <CardHeader>
                    <CardTitle>Ventas Totales</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <DollarSign className="size-8 text-green-500" />
                    <span className="text-2xl font-bold">$15,230</span>
                </CardContent>
            </Card>

            {/* Tarjeta de Órdenes */}
            <Card>
                <CardHeader>
                    <CardTitle>Órdenes</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <ShoppingCart className="size-8 text-blue-500" />
                    <span className="text-2xl font-bold">320</span>
                </CardContent>
            </Card>

            {/* Tarjeta de Clientes */}
            <Card>
                <CardHeader>
                    <CardTitle>Clientes</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Users className="size-8 text-purple-500" />
                    <span className="text-2xl font-bold">120</span>
                </CardContent>
            </Card>

            {/* Tarjeta de Reportes */}
            <Card>
                <CardHeader>
                    <CardTitle>Reportes</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <BarChart className="size-8 text-orange-500" />
                    <span className="text-2xl font-bold">Ver más</span>
                </CardContent>
            </Card>
        </div>
    );
}
