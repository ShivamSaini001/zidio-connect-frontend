import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function BookmarkForm() {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Save a Job Bookmark</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="bookmarkId">Bookmark ID</Label>
          <Input id="bookmarkId" placeholder="Enter Bookmark ID" />
        </div>
        <div>
          <Label htmlFor="jobId1">Job ID</Label>
          <Input id="jobId1" placeholder="Enter Job ID to bookmark" />
        </div>
        <div>
          <Label htmlFor="studentId4">Student ID</Label>
          <Input id="studentId4" placeholder="Enter your Student ID" />
        </div>
        <Button className="w-full mt-4">Bookmark Job</Button>
      </CardContent>
    </Card>
  )
}
