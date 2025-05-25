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
import { MoreHorizontal, Plus } from "lucide-react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export function InternshipTable() {

    const internships = [
        {
            id: "1",
            name: "Summer Engineering Internship",
            department: "Engineering",
            duration: "3 months",
            status: "Active",
            startDate: "2023-06-01",
            applications: 45,
        },
        {
            id: "2",
            name: "Product Management Internship",
            department: "Product",
            duration: "6 months",
            status: "Upcoming",
            startDate: "2023-07-15",
            applications: 28,
        },
        {
            id: "3",
            name: "Design Internship Program",
            department: "Design",
            duration: "4 months",
            status: "Active",
            startDate: "2023-06-01",
            applications: 36,
        },
        {
            id: "4",
            name: "Data Science Internship",
            department: "Data",
            duration: "6 months",
            status: "Upcoming",
            startDate: "2023-08-01",
            applications: 19,
        },
        {
            id: "5",
            name: "Marketing Internship",
            department: "Marketing",
            duration: "3 months",
            status: "Completed",
            startDate: "2023-03-01",
            applications: 52,
        },
    ]

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Program Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>Applications</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {internships.map((internship) => (
                            <TableRow key={internship.id}>
                                <TableCell className="font-medium">{internship.name}</TableCell>
                                <TableCell>{internship.department}</TableCell>
                                <TableCell>{internship.duration}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            internship.status === "Active"
                                                ? "default"
                                                : internship.status === "Upcoming"
                                                    ? "outline"
                                                    : "secondary"
                                        }
                                    >
                                        {internship.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{internship.startDate}</TableCell>
                                <TableCell>{internship.applications}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                            <DropdownMenuItem>Edit internship</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>View applications</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">Delete internship</DropdownMenuItem>
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

