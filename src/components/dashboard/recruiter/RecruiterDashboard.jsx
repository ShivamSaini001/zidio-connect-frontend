import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, UserPlus, FileText } from "lucide-react"

export default function RecruiterDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, Recruiter</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Posted Jobs */}
        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg">Posted Jobs</CardTitle>
            <Briefcase className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Total Active Listings</p>
          </CardContent>
        </Card>

        {/* Applications Received */}
        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg">Applications</CardTitle>
            <FileText className="text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">56</p>
            <p className="text-sm text-muted-foreground">New Applications</p>
          </CardContent>
        </Card>

        {/* Shortlisted Candidates */}
        <Card className="shadow-md">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg">Shortlisted</CardTitle>
            <UserPlus className="text-purple-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Candidates Selected</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
