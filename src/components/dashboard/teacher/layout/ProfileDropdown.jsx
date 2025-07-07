import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { LogOutIcon, Settings, User } from 'lucide-react'
import { Link } from 'react-router'
import LogoutButton from '../../common-components/LogoutButton'
import { Money } from '@mui/icons-material'
import { IconMoneybag } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export function ProfileDropdown() {

    const [userData, setUserData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        username: 'teacher@zidioconnect.com',
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUserData(user);
    }, []);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <button variant='ghost' className='relative h-8 w-8 rounded-full hover:bg-accent focus:outline-none'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/avatars/01.png' alt='@teacher' />
                        <AvatarFallback>
                            {userData?.firstName?.charAt(0)?.toUpperCase() + userData?.lastName?.charAt(0)?.toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm leading-none font-medium'>
                            {userData?.firstName} {userData?.lastName}
                        </p>
                        <p className='text-muted-foreground text-xs leading-none'>
                            {userData?.username}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link to='/teacher/profile'>
                            Profile
                            <DropdownMenuShortcut>
                                <User />
                            </DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to='/dashboard/teacher/earnings'>
                            Earnings
                            <DropdownMenuShortcut>
                                <IconMoneybag />
                            </DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to='/dashboard/teacher/settings'>
                            Settings
                            <DropdownMenuShortcut>
                                <Settings />
                            </DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <LogoutButton>
                    <span className='flex items-center justify-between w-full px-2 py-1 text-sm hover:cursor-default hover:bg-gray-100 rounded-sm'>
                        Logout
                        <LogOutIcon className='size-4' />
                    </span>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}