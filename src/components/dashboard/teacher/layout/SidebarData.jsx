import {
    IconLayoutDashboard,
    IconBook,
    IconUsers,
    IconClipboardList,
    IconChartBar,
    IconBell,
    IconSettings,
    IconCoin,
    IconMessages,
    IconFileAnalytics,
    IconUserCircle,
    IconLogout,
} from '@tabler/icons-react'
import { BookOpen, GraduationCap, PenTool } from 'lucide-react'

export const sidebarData = {
    user: {
        name: 'teacher',
        email: 'teacher@zidioconnect.com',
        avatar: '/avatars/teacher.jpg',
    },
    navGroups: [
        {
            title: 'Main',
            items: [
                {
                    title: 'Dashboard',
                    url: '/teacher/dashboard',
                    icon: IconLayoutDashboard,
                },
                {
                    title: 'Course Management',
                    url: 'teacher/courses',
                    icon: IconBook,
                    items: [
                        {
                            title: 'All Courses',
                            url: '/teacher/courses',
                        },
                        {
                            title: 'Create Course',
                            url: '/teacher/courses/create',
                        },
                    ],
                },
                {
                    title: 'Assignments & Quizzes',
                    url: '/teacher/assignments',
                    icon: PenTool,
                    items: [
                        {
                            title: 'All Assignments',
                            url: '/teacher/assignments',
                        },
                        {
                            title: 'Create Assignment',
                            url: '/teacher/assignments/create',
                        },
                        {
                            title: 'Quizzes',
                            url: '/teacher/quizzes',
                        },
                    ],
                },
                {
                    title: 'Students',
                    url: '/teacher/students',
                    icon: IconUsers,
                    badge: '24',
                },
                {
                    title: 'Discussion Forums',
                    url: '/teacher/forums',
                    icon: IconMessages,
                    badge: '5',
                },
            ],
        },
        {
            title: 'Analytics',
            items: [
                {
                    title: 'Course Analytics',
                    url: '/teacher/analytics/courses',
                    icon: IconChartBar,
                },
                {
                    title: 'Student Performance',
                    url: '/teacher/analytics/students',
                    icon: GraduationCap,
                },
                {
                    title: 'Reports',
                    url: '/teacher/reports',
                    icon: IconFileAnalytics,
                },
            ],
        },
        {
            title: 'Account',
            items: [
                {
                    title: 'Notifications',
                    url: '/teacher/notifications',
                    icon: IconBell,
                    badge: '3',
                },
                {
                    title: 'Profile Settings',
                    url: '/teacher/profile',
                    icon: IconUserCircle,
                },
                {
                    title: 'Earnings',
                    url: '/teacher/earnings',
                    icon: IconCoin,
                },
                {
                    title: 'Logout',
                    url: '/sign-in',
                    icon: IconLogout,
                },
            ],
        },
    ],
}