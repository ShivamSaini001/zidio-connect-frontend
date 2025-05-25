"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function JobsForm() {
  const [type, setType] = useState("job");

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-md bg-white space-y-6">
      <h2 className="text-2xl font-bold">Post a Job</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="jobId" className="mb-2 block">Job ID</Label>
          <Input id="jobId" placeholder="Enter Job ID" />
        </div>

        <div>
          <Label htmlFor="recruiterId2" className="mb-2 block">Recruiter ID</Label>
          <Input id="recruiterId2" placeholder="Enter Recruiter ID" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="title" className="mb-2 block">Title</Label>
          <Input id="title" placeholder="Enter job title" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="type" className="mb-2 block">Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="job">Job</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" placeholder="Job description..." />
        </div>

        <div>
          <Label htmlFor="location2" className="mb-2 block">Location</Label>
          <Input id="location2" placeholder="Enter location" />
        </div>

        <div>
          <Label htmlFor="salaryOrStipend" className="mb-2 block">Salary / Stipend</Label>
          <Input id="salaryOrStipend" placeholder="Enter amount" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="requiredSkills" className="mb-2 block">Required Skills</Label>
          <Textarea id="requiredSkills" placeholder="Enter required skills (comma separated)" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="deadline" className="mb-2 block">Deadline</Label>
          <Input id="deadline" type="date" />
        </div>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </div>
  );
}
