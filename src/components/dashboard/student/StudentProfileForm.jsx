// components/StudentProfileForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function StudentProfileForm() {
  const [status, setStatus] = useState("active");

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-md bg-white space-y-6">
      <h2 className="text-2xl font-bold">Student Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="studentId" className="mb-2 block">Student ID</Label>
          <Input id="studentId" placeholder="Enter Student ID" />
        </div>

        <div>
          <Label htmlFor="mobile3" className="mb-2 block">Mobile</Label>
          <Input id="mobile3" placeholder="Enter mobile number" />
        </div>

        <div>
          <Label htmlFor="resumeUrl" className="mb-2 block">Resume URL</Label>
          <Input id="resumeUrl" placeholder="Enter resume link" />
        </div>

        <div>
          <Label htmlFor="linkedInProfileUrl" className="mb-2 block">LinkedIn Profile</Label>
          <Input id="linkedInProfileUrl" placeholder="Enter LinkedIn URL" />
        </div>

        <div>
          <Label htmlFor="collegeName" className="mb-2 block">College Name</Label>
          <Input id="collegeName" placeholder="Enter college name" />
        </div>

        <div>
          <Label htmlFor="graduationYear" className="mb-2 block">Graduation Year</Label>
          <Input id="graduationYear" type="number" placeholder="e.g., 2024" />
        </div>

        <div>
          <Label htmlFor="dateOfBirth" className="mb-2 block">Date of Birth</Label>
          <Input id="dateOfBirth" type="date" />
        </div>

        <div>
          <Label htmlFor="status" className="mb-2 block">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="block">Block</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="education" className="mb-2 block">Education</Label>
        <Textarea id="education" placeholder="Enter education details" />
      </div>

      <div>
        <Label htmlFor="skills" className="mb-2 block">Skills</Label>
        <Textarea id="skills" placeholder="Enter skills (comma separated)" />
      </div>

      <div>
        <Label htmlFor="address" className="mb-2 block">Address</Label>
        <Textarea id="address" placeholder="Enter address" />
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </div>
  );
}
