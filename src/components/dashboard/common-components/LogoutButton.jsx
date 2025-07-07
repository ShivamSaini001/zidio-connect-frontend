import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LogOutIcon } from 'lucide-react'

const LogoutButton = ({children}) => {

    const handleLogout = () => {
        // Perform logout logic here
        console.log('Logout initiated')
        // Redirect to the login page
        localStorage.removeItem('user');
        window.location.href = '/sign-in'
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Logout</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to logout?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-end">
                    <DialogClose>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="button"
                        onClick={handleLogout}
                        variant="default"
                    >
                        Ok
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default LogoutButton;
