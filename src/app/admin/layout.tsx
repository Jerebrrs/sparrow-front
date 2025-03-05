"use client"
import { DashboardSidebar } from "@/components";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname, } from "next/navigation";
import path from "path";


export default function AdminLayout({
    children
}: {
    children: React.ReactNode;
}) {


    const path = usePathname();
    const getPageTitle = () => {


        const titles: Record<string, string> = {
            '/admin': '',
            '/admin/newProduct': 'Nuevo Producto',
            '/admin/products': 'Productos'
        }

        if (titles[path] !== undefined) return titles[path];

        return 'Página'
    }

    return (
        <SidebarProvider>
            <div className="flex h-screen w-full h-full">
                <DashboardSidebar />
                <SidebarInset className="flex flex-col flex-grow">
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">
                                        Deashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {path === '/admin' ? '' : <BreadcrumbSeparator />}
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{getPageTitle()}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    <main className="flex-grow overflow-auto w-full h-full">
                        {children}
                    </main>
                </SidebarInset>

            </div>
        </SidebarProvider>
    );
}