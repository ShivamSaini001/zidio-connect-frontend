import { Command } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarRail,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import React from "react"
import { sidebarData } from "./SidebarData"
import { NavGroup } from "./NavGroup"

export function AppSidebar({ ...props }) {

    return (
        <Sidebar collapsible='icon' {...props}>
            {/* Sidebar header */}
            <SidebarHeader>
                {/* <TeamSwitcher teams={sidebarData.teams} /> */}
                <SidebarMenuButton size='lg' className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
                    <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                        {/* Logo */}
                        <Command />
                    </div>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate font-semibold'>
                            Zidio Connect
                        </span>
                        <span className='truncate text-xs'>
                            satnaingdev@gmail.com
                        </span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>

            {/* Body */}
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

