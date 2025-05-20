"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function HackathonForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-md bg-white space-y-6">
      <h2 className="text-2xl font-bold">Create Hackathon</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="hackathonId" className="mb-2 block">Hackathon ID</Label>
          <Input id="hackathonId" placeholder="Enter Hackathon ID" />
        </div>

        <div>
          <Label htmlFor="recruiterId3" className="mb-2 block">Recruiter ID</Label>
          <Input id="recruiterId3" placeholder="Enter Recruiter ID" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="title1" className="mb-2 block">Title</Label>
          <Input id="title1" placeholder="Enter hackathon title" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" placeholder="Enter description" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="theme" className="mb-2 block">Theme</Label>
          <Input id="theme" placeholder="e.g., AI, Sustainability" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="eligibility" className="mb-2 block">Eligibility</Label>
          <Input id="eligibility" placeholder="e.g., Only final year students" />
        </div>

        <div>
          <Label htmlFor="startDate" className="mb-2 block">Start Date</Label>
          <Input id="startDate" type="date" />
        </div>

        <div>
          <Label htmlFor="endDate" className="mb-2 block">End Date</Label>
          <Input id="endDate" type="date" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="registrationDeadline" className="mb-2 block">Registration Deadline</Label>
          <Input id="registrationDeadline" type="date" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="location1" className="mb-2 block">Location</Label>
          <Input id="location1" placeholder="e.g., Online or Delhi Campus" />
        </div>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </div>
  );
}
