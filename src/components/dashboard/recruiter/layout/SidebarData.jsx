import {
    IconBrowserCheck,
    IconCalendarEvent,
    IconGraph,
    IconHelp,
    IconLayoutDashboard,
    IconLogout,
    IconNotification,
    IconPalette,
    IconSettings,
    IconTool,
    IconUserCog,
} from '@tabler/icons-react'
import { ArrowDownSquare, Briefcase, GraduationCap } from 'lucide-react'

export const sidebarData = {
    user: {
        name: 'satnaing',
        email: 'satnaingdev@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navGroups: [
        {
            title: 'General',
            items: [
                {
                    title: 'Dashboard',
                    url: '/recruiter/dashboard',
                    icon: IconLayoutDashboard,
                },
                {
                    title: 'Applications',
                    url: '/recruiter',
                    badge: '3',
                    icon: ArrowDownSquare,
                },
                {
                    title: 'Company Profile',
                    url: '/recruiter',
                    icon: IconGraph,
                },
                {
                    title: 'Job/Internships',
                    icon: Briefcase,
                    items: [
                        {
                            title: 'View All',
                            url: '#',
                            icon: IconUserCog,
                        },
                        {
                            title: 'Create New',
                            url: '/recruiter/job/create',
                            icon: IconSettings,
                        },
                    ]
                },
                {
                    title: 'Hackathone Management',
                    icon: IconCalendarEvent,
                    items: [
                        {
                            title: 'All Hackathones',
                            url: '#',
                            icon: IconUserCog,
                        },
                        {
                            title: 'Create New Hackathone',
                            url: '/recruiter/hackathone/create',
                            icon: IconSettings,
                        },
                    ]
                },
            ],
        },
        {
            title: 'Other',
            items: [
                {
                    title: 'Settings',
                    icon: IconSettings,
                    items: [
                        {
                            title: 'Profile',
                            url: '/settings',
                            icon: IconUserCog,
                        },
                        {
                            title: 'Account',
                            url: '/settings/account',
                            icon: IconTool,
                        },
                        {
                            title: 'Appearance',
                            url: '/settings/appearance',
                            icon: IconPalette,
                        },
                        {
                            title: 'Notifications',
                            url: '/settings/notifications',
                            icon: IconNotification,
                        },
                        {
                            title: 'Display',
                            url: '/settings/display',
                            icon: IconBrowserCheck,
                        },
                    ],
                },
                {
                    title: 'Help Center',
                    url: '/help-center',
                    icon: IconHelp,
                },
                {
                    title: 'Logout',
                    url: '/',
                    icon: IconLogout,
                },
            ],
        },
    ],
}
