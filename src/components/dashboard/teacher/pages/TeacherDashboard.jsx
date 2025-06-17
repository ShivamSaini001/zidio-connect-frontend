import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@mui/material"
import { IconUsers, IconBook, IconCoin, IconChartBar } from "@tabler/icons-react"
import { GraduationCap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const InfoCard = ({title, icon, desc, className}) => {
  return (
    <Card className={`min-w-72 hover:scale-95 transition-all duration-300 ${className}`}>
        <CardHeader className={'flex justify-between text-gray-900/55 dark:text-white/70'}>
            <p>{title}</p>
            <span className='hover:scale-90 transition-all'>{icon}</span>
        </CardHeader>
        <CardContent>
            <p className='text-3xl font-semibold'>
                {desc}
            </p>
        </CardContent>
    </Card>
  )
}

const TeacherDashboard = () => {
  const dashboardInfo = [
    {
      title: 'Total Courses',
      icon: <IconBook />,
      desc: '12',
      className: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
    },
    {
      title: 'Active Students',
      icon: <IconUsers />,
      desc: '248',
      className: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900'
    },
    {
      title: 'Pending Assignments',
      icon: <GraduationCap />,
      desc: '32',
      className: 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900'
    },
    {
      title: 'Unread Messages',
      icon: <MessageSquare />,
      desc: '8',
      className: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900'
    },
    {
      title: 'Course Rating',
      icon: <IconChartBar />,
      desc: '4.8',
      className: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900'
    },
    {
      title: 'Total Earnings',
      icon: <IconCoin />,
      desc: '$2,450',
      className: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900'
    },
  ]

  return (
    <Container className="">
      <div className="flex flex-wrap gap-4 justify-center w-full pb-8">
        {dashboardInfo.map((item, index) => (
          <InfoCard key={index} title={item.title} icon={item.icon} desc={item.desc} className={item.className} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <div>
                <h3 className="font-medium">Advanced Web Development</h3>
                <p className="text-sm text-muted-foreground">32 students enrolled</p>
              </div>
              <Button size="sm" asChild>
                <Link to="/dashboard/teacher/courses/1">View</Link>
              </Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <div>
                <h3 className="font-medium">React for Beginners</h3>
                <p className="text-sm text-muted-foreground">48 students enrolled</p>
              </div>
              <Button size="sm" asChild>
                <Link to="/dashboard/teacher/courses/2">View</Link>
              </Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <div>
                <h3 className="font-medium">JavaScript Fundamentals</h3>
                <p className="text-sm text-muted-foreground">64 students enrolled</p>
              </div>
              <Button size="sm" asChild>
                <Link to="/dashboard/teacher/courses/3">View</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-md">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Jane Doe</h3>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
                <p className="text-sm">Question about the React assignment...</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-md">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Mike Smith</h3>
                  <span className="text-xs text-muted-foreground">5h ago</span>
                </div>
                <p className="text-sm">When will the next lecture be available?</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-md">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/04.png" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Alex Johnson</h3>
                  <span className="text-xs text-muted-foreground">1d ago</span>
                </div>
                <p className="text-sm">Thanks for the feedback on my project!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <h3 className="font-medium">JavaScript Quiz</h3>
                  <p className="text-sm text-muted-foreground">JavaScript Fundamentals • Due in 2 days</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <h3 className="font-medium">React Project Submissions</h3>
                  <p className="text-sm text-muted-foreground">React for Beginners • Due in 5 days</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                <div>
                  <h3 className="font-medium">Final Assessment</h3>
                  <p className="text-sm text-muted-foreground">Advanced Web Development • Due in 10 days</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default TeacherDashboard