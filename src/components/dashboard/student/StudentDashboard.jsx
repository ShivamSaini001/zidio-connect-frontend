"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Briefcase, BookOpen, Trophy, LayoutDashboard, Settings } from "lucide-react"; 


export default function StudentDashboard() {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr] bg-blue-100">
      {/* Sidebar */}
      <aside className="bg-white border-r p-6 flex flex-col gap-6">
  <div className="flex flex-col items-center">
    <Avatar className="w-16 h-16 mb-2">
      <AvatarImage src="/avatar.png" />
      <AvatarFallback>ST</AvatarFallback>
    </Avatar>
    <div className="text-lg font-semibold">Student Panel</div>
    <p className="text-xs text-muted-foreground">Manage profile and activities</p>
  </div>

  <nav className="flex flex-col gap-3 mt-6 text-sm font-medium">
    <Button variant="ghost" className="justify-start gap-2">
      <LayoutDashboard className="w-4 h-4" />
      Dashboard
    </Button>
    <Button variant="ghost" className="justify-start gap-2">
      <Briefcase className="w-4 h-4" />
      Jobs
    </Button>
    <Button variant="ghost" className="justify-start gap-2">
      <Trophy className="w-4 h-4" />
      Hackathons
    </Button>
    <Button variant="ghost" className="justify-start gap-2">
      <BookOpen className="w-4 h-4" />
      Courses
    </Button>
  </nav>

  <div className="mt-auto">
    <Button variant="outline" className="w-full justify-start gap-2">
      <Settings className="w-4 h-4" />
      Settings
    </Button>
  </div>
</aside>

      {/* Main Content */}
      <main className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Student</h1>
          <p className="text-muted-foreground">Here's an overview of your recent activity.</p>
        </div>

        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>

          <Card>
            <CardContent className="p-4">
              <Label className="block mb-2 font-semibold">Recent Activity</Label>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>📄 Applied to Software Engineer role</span>
                  <span className="text-xs text-muted-foreground">2 hrs ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>🏆 Registered for AI Hackathon</span>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <Label className="block mb-2 font-semibold">Reported Content</Label>
              <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                <span>ID</span>
                <span>Content</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-2 text-sm">
                <span>201</span>
                <span>Job Posting</span>
                <span className="text-yellow-500">Pending</span>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-2 text-sm">
                <span>202</span>
                <span>Hackathon</span>
                <span className="text-green-500">Resolved</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </CardContent>
          </Card>
        </Tabs>
      </main>
    </div>
  );
}
