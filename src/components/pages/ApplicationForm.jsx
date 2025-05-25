import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ApplicationForm() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card className="shadow-xl rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6">Submit Application</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="jobId2">Job ID</Label>
              <Input id="jobId2" name="jobId" placeholder="Enter Job ID" />
            </div>
            <div>
              <Label htmlFor="applicationId">Application ID</Label>
              <Input id="applicationId" name="applicationId" placeholder="Enter Application ID" />
            </div>
            <div>
              <Label htmlFor="appliedDate">Applied Date</Label>
              <Input id="appliedDate" name="appliedDate" type="date" />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="studentId2">Student ID</Label>
              <Input id="studentId2" name="studentId" placeholder="Enter Student ID" />
            </div>
            <Button type="submit" className="w-full mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
