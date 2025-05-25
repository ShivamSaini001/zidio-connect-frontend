import { useEffect } from 'react'
import { IconCheck, IconMoon, IconSun } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react';


export function ThemeSwitch() {

    const getSystemTheme = () => {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'; 
    }

    const [theme, setTheme] = useState(() => {
        // Check localStorage
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) return savedTheme;

        return getSystemTheme();
    });

    /* Update theme-color meta tag
     * when theme is updated */
    useEffect(() => {
        localStorage.setItem('theme', theme);

        // Apply or remove 'dark' class on <html>
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }
        else if (theme === 'system') {

        }
        else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button size='icon' className="scale-95 rounded-full size-8 flex items-center justify-center hover:bg-muted transition-colors"
                    type="button">
                    <IconSun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                    <IconMoon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                    <span className='sr-only'>Toggle theme</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light{' '}
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'light' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'dark' && 'hidden')}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme(getSystemTheme())}>
                    System
                    <IconCheck
                        size={14}
                        className={cn('ml-auto', theme !== 'system' && 'hidden')}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
