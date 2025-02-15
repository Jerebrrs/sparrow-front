"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { LuExternalLink } from "react-icons/lu";
import { TeamSwitcher } from "./Team-Switcher";
import { NavUser } from "./NavUser";


export const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-semibold">Sparrow Admin</span>
                                <Link href={"/"} className="justify-center flex items-center gap-1 hover:text-gray-400">
                                    <span>Visitar Pagina</span>
                                    <LuExternalLink className="size-4" />
                                </Link>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader >
            <SidebarContent>
                <TeamSwitcher />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar >
    )
}
