import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@mui/material"
import { IconUsers } from "@tabler/icons-react"
import { Book, Briefcase, Building, GraduationCap, School } from "lucide-react"
import InfoCard from "../customComponents/InfoCard"

const AdminDashboard = () => {

  const AppInfo = [
    {
      title: 'Total Users',
      icon: <IconUsers />,
      desc: 156076
    },
    {
      title: 'Total Jobs',
      icon: <Briefcase />,
      desc: 43897
    },
    {
      title: 'Active Internships',
      icon: <GraduationCap />,
      desc: 7656
    },
    {
      title: 'Total Students',
      icon: <School />,
      desc: 4345
    },
    {
      title: 'Total Recruiters',
      icon: <Building />,
      desc: 9875
    },
    {
      title: 'Total Teachers',
      icon: <Book />,
      desc: 65579
    },
  ]

  return (
    <Container className="">
      <div className="flex flex-wrap gap-2 justify-center w-full pb-5">
        {
          AppInfo.map((item, index) => {
            let count = item.desc
            count = count.toLocaleString('en-IN');
            return <InfoCard key={index} title={item.title} icon={item.icon} desc={count} />
          })
        }
      </div>
      <div>
        <Card>
          {/* Card Header (Title) */}
          <CardHeader>
            <CardTitle>
              
            </CardTitle>
          </CardHeader>

          <CardContent></CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default AdminDashboard

