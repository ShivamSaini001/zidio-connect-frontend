import {
    IconBarrierBlock,
    IconBrowserCheck,
    IconBug,
    IconChecklist,
    IconError404,
    IconGraph,
    IconHelp,
    IconLayoutDashboard,
    IconLock,
    IconLockAccess,
    IconLogout,
    IconMessages,
    IconNotification,
    IconPackages,
    IconPalette,
    IconServerOff,
    IconSettings,
    IconTool,
    IconUser,
    IconUserCog,
    IconUserOff,
    IconUsers,
} from '@tabler/icons-react'
import { BedSingle, Briefcase, GraduationCap } from 'lucide-react'

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
                    url: '/admin/dashboard',
                    icon: IconLayoutDashboard,
                },
                {
                    title: 'User Management',
                    url: '/admin/user-management',
                    icon: IconUsers,
                },
                {
                    title: 'Job Management',
                    url: '/admin/job-management',
                    icon: Briefcase,
                },
                {
                    title: 'Internship Management',
                    url: '/admin/internship-management',
                    icon: GraduationCap,
                },
                {
                    title: 'Application Statistics',
                    url: '/admin/application-statistics',
                    icon: IconGraph,
                },
                {
                    title: 'Chats',
                    url: '/chats',
                    badge: '3',
                    icon: IconMessages,
                },
            ],
        },
        {
            title: 'Pages',
            items: [
                {
                    title: 'Auth',
                    icon: IconLockAccess,
                    items: [
                        {
                            title: 'Sign In',
                            url: '/sign-in',
                        },
                        {
                            title: 'Sign Up',
                            url: '/sign-up',
                        },
                        {
                            title: 'Forgot Password',
                            url: '/forgot-password',
                        },
                    ],
                },
                {
                    title: 'Errors',
                    icon: IconBug,
                    items: [
                        {
                            title: 'Unauthorized',
                            url: '/401',
                            icon: IconLock,
                        },
                        {
                            title: 'Forbidden',
                            url: '/403',
                            icon: IconUserOff,
                        },
                        {
                            title: 'Not Found',
                            url: '/404',
                            icon: IconError404,
                        },
                        {
                            title: 'Internal Server Error',
                            url: '/500',
                            icon: IconServerOff,
                        },
                        {
                            title: 'Maintenance Error',
                            url: '/503',
                            icon: IconBarrierBlock,
                        },
                    ],
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
