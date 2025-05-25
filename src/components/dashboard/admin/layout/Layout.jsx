import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from 'react-router'
import { cn } from '@/lib/utils'
import Header from './Header'
import { ThemeSwitch } from '../../../context/ThemeSwitch'
import { ProfileDropdown } from './ProfileDropdown'
import { Badge, IconButton } from '@mui/material'
import { IconBell } from '@tabler/icons-react'
import { AppSidebar } from './AppSidebar'


const Layout = () => {

    return (
        <SidebarProvider className={'bg-muted'}>
            
            <AppSidebar />
            <main id='content'
                className={cn(
                    'ml-auto w-full max-w-full h-full',
                    'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
                    'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
                    'sm:transition-[width] sm:duration-200 sm:ease-linear',
                    'flex flex-col',
                    'group-data-[scroll-locked=1]/body:h-full',
                    'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
                )}>
                {/* Header */}
                <Header className={'shadow-md mb-4'}>
                    <div>
                        <p className='font-bold text-xl'>Admin Dashboard</p>
                    </div>
                    <div className='ml-auto flex items-center gap-4'>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <IconBell className='dark:text-white/80'/>
                            </Badge>
                        </IconButton>
                        <ThemeSwitch />
                        <ProfileDropdown />
                    </div>
                </Header>

                <div className='h-full pb-5'>
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Layout
