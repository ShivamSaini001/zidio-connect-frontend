import React, { forwardRef } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import RegistrationForm from '@/components/pages/RegistrationForm';
import { ScrollArea } from '@/components/ui/scroll-area';

const AddNewUserForm = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="py-5 shadow-sm">
                        <Plus /> Add new User
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <ScrollArea className="h-[500px] w-full rounded-md ">
                        {/* Add User form (Registration Form) */}
                        <RegistrationForm title='Create New User' description='' />
                    </ScrollArea>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="destructive">
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default AddNewUserForm;
