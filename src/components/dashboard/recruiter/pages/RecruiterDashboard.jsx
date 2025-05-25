import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, UserPlus, FileText, Calendar, BriefcaseBusiness } from "lucide-react"
import JobMetadataCard from "../customComponents/JobMetadataCard"

export default function RecruiterDashboard() {

  const jobInfoMetadata = [
    {
      title: 12,
      desc: 'Total Active Listings',
      icon: <BriefcaseBusiness className="text-blue-500" />
    },
    {
      title: 56,
      desc: 'Total Applications',
      icon: <FileText className="text-green-500" />
    },
    {
      title: 139,
      desc: 'Shortlisted',
      icon: <UserPlus className="text-purple-500" />
    },
    {
      title: 72,
      desc: 'Interviews Scheduled',
      icon: <Calendar className="text-yellow-500" />
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Posted Jobs */}
        {
          jobInfoMetadata.map((item) => {
            return <JobMetadataCard title={item.title} desc={item.desc} icon={item.icon} />
          })
        }
      </div>




      
    </div>
  )
}
