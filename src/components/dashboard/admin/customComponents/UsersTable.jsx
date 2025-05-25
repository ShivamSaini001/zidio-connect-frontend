import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Plus } from "lucide-react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export function UsersTable() {


    const users = [
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "Admin",
            status: "Active",
            joinedDate: "2023-05-21 09:30",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "JD",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            role: "Manager",
            status: "Active",
            joinedDate: "2023-05-20 14:45",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "JS",
        },
        {
            id: "3",
            name: "Robert Johnson",
            email: "robert.johnson@example.com",
            role: "Editor",
            status: "Active",
            joinedDate: "2023-05-19 11:20",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "RJ",
        },
        {
            id: "4",
            name: "Emily Davis",
            email: "emily.davis@example.com",
            role: "Viewer",
            status: "Inactive",
            joinedDate: "2023-05-10 16:35",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "ED",
        },
        {
            id: "5",
            name: "Michael Wilson",
            email: "michael.wilson@example.com",
            role: "Manager",
            status: "Active",
            joinedDate: "2023-05-21 08:15",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "MW",
        },
    ]


    return (
        <div className="space-y-4 w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow className={'uppercase'}>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                            <AvatarFallback>{user.initials}</AvatarFallback>
                                        </Avatar>
                                        <div className="font-medium">{user.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            user.status === "Active" ? "default" : user.status === "Inactive" ? "outline" : "secondary"
                                        }
                                    >
                                        {user.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{user.joinedDate}</TableCell>
                                <TableCell className="text-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View profile</DropdownMenuItem>
                                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Reset password</DropdownMenuItem>
                                            <DropdownMenuItem>{user.status === "Active" ? "Deactivate" : "Activate"} user</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">Delete user</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="space-x-2 py-4 float-end">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#" isActive={true}>2</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                       

                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

