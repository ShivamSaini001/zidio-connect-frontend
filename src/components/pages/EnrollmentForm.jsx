import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function EnrollmentForm() {
  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Enroll in a Course</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="enrollmentId">Enrollment ID</Label>
          <Input id="enrollmentId" placeholder="Enter Enrollment ID" />
        </div>
        <div>
          <Label htmlFor="studentId">Student ID</Label>
          <Input id="studentId" placeholder="Enter Student ID" />
        </div>
        <div>
          <Label htmlFor="courseId">Course ID</Label>
          <Input id="courseId" placeholder="Enter Course ID" />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="InProgress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full mt-4">Submit Enrollment</Button>
      </CardContent>
    </Card>
  )
}
