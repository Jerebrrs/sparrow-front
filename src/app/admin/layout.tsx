"use client"
import { DashboardSidebar } from "@/components";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const router = usePathname();

    const getPageTitle = () => {
        const path = router
        if (path === '/admin') return 'Admin'
        if (path.startsWith('/productos')) return 'Productos'
        if (path === '/ordenes') return 'Órdenes'
        if (path === '/perfil') return 'Mi Perfil'
        return 'Página'
    }

    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
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
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{getPageTitle()}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </header>
                    <main className="flex-grow p-6 overflow-auto w-full">
                        {children}
                    </main>
                </SidebarInset>

            </div>
        </SidebarProvider>
    );
}