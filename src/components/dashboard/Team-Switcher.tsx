"use client";

import { routesAdmin } from "@/lib/routes";
import { usePathname } from "next/navigation";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Plus, Minus, LucideIcon } from "lucide-react";
import Link from "next/link";
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarGroup,
    SidebarGroupLabel
} from "../ui/sidebar";

export const TeamSwitcher = () => {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Principal</SidebarGroupLabel>
            <SidebarMenu>
                {routesAdmin.map((item) => (
                    <Collapsible
                        key={item.title}
                        defaultOpen={item.items && item.items.some(subItem => pathname.startsWith(subItem.url))}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            {item.items ? ( // Si tiene subitems, se vuelve un colapsable
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.title}
                                        <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                                        <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                            ) : ( // Si no tiene subitems, es un enlace normal
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.title}
                                    </Link>
                                </SidebarMenuButton>
                            )}
                            {item.items && (
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={pathname === subItem.url}
                                                >
                                                    <Link href={subItem.url}>{subItem.title}</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            )}
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
};
