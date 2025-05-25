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


const JobsTable = () => {


    const jobs = [
        {
            id: "1",
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Remote",
            status: "Active",
            postedDate: "2023-05-15",
            applications: 24,
        },
        {
            id: "2",
            title: "Product Manager",
            department: "Product",
            location: "New York, NY",
            status: "Active",
            postedDate: "2023-05-12",
            applications: 18,
        },
        {
            id: "3",
            title: "UX Designer",
            department: "Design",
            location: "San Francisco, CA",
            status: "Active",
            postedDate: "2023-05-10",
            applications: 12,
        },
        {
            id: "4",
            title: "Backend Engineer",
            department: "Engineering",
            location: "Remote",
            status: "Draft",
            postedDate: "2023-05-08",
            applications: 0,
        },
        {
            id: "5",
            title: "Marketing Specialist",
            department: "Marketing",
            location: "Chicago, IL",
            status: "Closed",
            postedDate: "2023-04-20",
            applications: 32,
        },
    ]

    return (
        <div className="space-y-4 w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Job Title</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Posted Date</TableHead>
                            <TableHead>Applications</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {jobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.title}</TableCell>
                                <TableCell>{job.department}</TableCell>
                                <TableCell>{job.location}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={job.status === "Active" ? "default" : job.status === "Draft" ? "outline" : "secondary"}
                                    >
                                        {job.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{job.postedDate}</TableCell>
                                <TableCell>{job.applications}</TableCell>
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
                                            <DropdownMenuItem>Edit job</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>View applications</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">Delete job</DropdownMenuItem>
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

export default JobsTable
