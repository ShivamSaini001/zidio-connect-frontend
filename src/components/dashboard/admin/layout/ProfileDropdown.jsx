import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import LogoutButton from '../../common-components/LogoutButton'

export function ProfileDropdown() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, []);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button variant='ghost' className='relative h-8 w-8 rounded-full hover:bg-accent focus:outline-none'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                        <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm leading-none font-medium'>satnaing</p>
                        <p className='text-muted-foreground text-xs leading-none'>
                            {userData?.username || "satnaingdev@gmail.com"}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link to='/admin/profile'>
                            Profile
                            <DropdownMenuShortcut>
                                <UserIcon className='size-4' />
                            </DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to='/settings'>
                            Settings
                            <DropdownMenuShortcut>
                                <SettingsIcon className='size-4' />
                            </DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem> */}
                <LogoutButton >
                    <span className='flex items-center justify-between w-full px-2 py-1 text-sm hover:cursor-default hover:bg-gray-100 rounded-sm'>
                        Logout
                        <LogOutIcon className='size-4' />
                    </span>
                </LogoutButton>
                {/* </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
