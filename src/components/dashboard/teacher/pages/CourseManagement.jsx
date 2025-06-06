import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@mui/material"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconSearch, IconPlus, IconEdit, IconTrash, IconEye } from "@tabler/icons-react"
import { Link } from "react-router"

const CourseManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      students: 32,
      rating: 4.7,
      status: "published",
      lastUpdated: "2023-10-15"
    },
    {
      id: 2,
      title: "React for Beginners",
      students: 48,
      rating: 4.9,
      status: "published",
      lastUpdated: "2023-11-02"
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      students: 64,
      rating: 4.8,
      status: "published",
      lastUpdated: "2023-09-28"
    },
    {
      id: 4,
      title: "Node.js Masterclass",
      students: 0,
      rating: 0,
      status: "draft",
      lastUpdated: "2023-12-01"
    },
    {
      id: 5,
      title: "Full Stack Development",
      students: 0,
      rating: 0,
      status: "draft",
      lastUpdated: "2023-12-05"
    },
  ]
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const publishedCourses = filteredCourses.filter(course => course.status === "published")
  const draftCourses = filteredCourses.filter(course => course.status === "draft")

  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <Button asChild>
          <Link to="/dashboard/teacher/courses/create">
            <IconPlus className="mr-2 h-4 w-4" />
            Create Course
          </Link>
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Courses ({filteredCourses.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({publishedCourses.length})</TabsTrigger>
          <TabsTrigger value="draft">Drafts ({draftCourses.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </TabsContent>
        
        <TabsContent value="published" className="space-y-4">
          {publishedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </TabsContent>
        
        <TabsContent value="draft" className="space-y-4">
          {draftCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </TabsContent>
      </Tabs>
    </Container>
  )
}

const CourseCard = ({ course }) => {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="bg-muted w-full md:w-48 h-32 md:h-auto flex items-center justify-center">
          <span className="text-4xl">📚</span>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <div className="flex items-center mt-2 md:mt-0">
              <span className={`px-2 py-1 rounded text-xs ${course.status === 'published' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'}`}>
                {course.status === 'published' ? 'Published' : 'Draft'}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Students</p>
              <p className="font-medium">{course.students}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rating</p>
              <p className="font-medium">{course.rating > 0 ? course.rating : 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="font-medium">{new Date(course.lastUpdated).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link to={`/dashboard/teacher/courses/${course.id}`}>
                <IconEye className="mr-1 h-4 w-4" /> View
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to={`/dashboard/teacher/courses/${course.id}/edit`}>
                <IconEdit className="mr-1 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600">
              <IconTrash className="mr-1 h-4 w-4" /> Delete
            </Button>
            {course.status === 'draft' && (
              <Button size="sm">
                Publish
              </Button>
            )}
            {course.status === 'published' && (
              <Button size="sm" variant="outline">
                Unpublish
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CourseManagement