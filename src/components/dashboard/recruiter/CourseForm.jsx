"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CourseForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-md bg-white space-y-6">
      <h2 className="text-2xl font-bold">Create New Course</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="courseId" className="mb-2 block">Course ID</Label>
          <Input id="courseId" placeholder="Enter Course ID" />
        </div>

        <div>
          <Label htmlFor="teacherId" className="mb-2 block">Teacher ID</Label>
          <Input id="teacherId" placeholder="Enter Teacher ID" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="title2" className="mb-2 block">Title</Label>
          <Input id="title2" placeholder="Enter course title" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="description" className="mb-2 block">Description</Label>
          <Textarea id="description" placeholder="Enter course description" />
        </div>

        <div>
          <Label htmlFor="duration" className="mb-2 block">Duration</Label>
          <Input id="duration" placeholder="e.g., 6 weeks, 30 hours" />
        </div>

        <div>
          <Label htmlFor="tags" className="mb-2 block">Tags</Label>
          <Input id="tags" placeholder="e.g., Java, Spring, Backend" />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="syllabusUrl" className="mb-2 block">Syllabus URL</Label>
          <Input id="syllabusUrl" placeholder="Enter Syllabus Document URL" />
        </div>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </div>
  );
}
