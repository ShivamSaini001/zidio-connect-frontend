import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function AdminProfileForm() {
  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Admin Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="adminId">Admin ID</Label>
          <Input id="adminId" placeholder="Enter Admin ID" />
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
        <div>
          <Label htmlFor="mobile1">Mobile</Label>
          <Input id="mobile1" placeholder="Enter mobile number" />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="block">Block</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full mt-4">Save Profile</Button>
      </CardContent>
    </Card>
  )
}
