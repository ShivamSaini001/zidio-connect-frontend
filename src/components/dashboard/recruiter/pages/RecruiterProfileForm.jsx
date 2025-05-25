// components/RecruiterProfileForm.tsx

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function RecruiterProfileForm() {
  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Recruiter Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="mobile2">Mobile</Label>
          <Input id="mobile2" placeholder="Enter mobile number" />
        </div>
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" placeholder="Enter company name" />
        </div>
        <div>
          <Label htmlFor="designation">Designation</Label>
          <Input id="designation" placeholder="Enter designation" />
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
        <div>
          <Label htmlFor="recruiterId1">Recruiter ID</Label>
          <Input id="recruiterId1" placeholder="Enter recruiter ID" />
        </div>
        <Button className="w-full mt-4">Save Profile</Button>
      </CardContent>
    </Card>
  )
}
