import './App.css'
import Navbar from './components/home/Navbar'
import AdminProfileForm from './components/dashboard/admin/AdminProfileForm'
import ApplicationForm from './components/pages/ApplicationForm'
import CourseForm from './components/dashboard/recruiter/CourseForm'
import HackathonForm from './components/dashboard/recruiter/HackathonForm'
import Home from './components/pages/Home'
import JobsForm from './components/dashboard/recruiter/JobsForm'
import RecruiterProfileForm from './components/dashboard/recruiter/RecruiterProfileForm'
import RegistrationForm from './components/pages/RegistrationForm'
import StudentDashboard from './components/dashboard/student/StudentDashboard'
import StudentProfileForm from './components/dashboard/student/StudentProfileForm'
import TeacherProfileForm from './components/dashboard/teacher/TeacherProfileForm'
import { Textarea } from './components/ui/textarea'
import EnrollmentForm from './components/pages/EnrollmentForm'
import HackathonParticipantForm from './components/pages/HackathonParticipantForm'
import BookmarkForm from './components/pages/BookmarkForm'
import RecruiterDashboard from './components/dashboard/recruiter/RecruiterDashboard'
import Services from './components/pages/Services'

function App() {

  return (
    <>
      <main className='w-full h-full inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90'>
      <Navbar />
      <Home />
      <RegistrationForm />
      <StudentProfileForm/>
      <JobsForm />
      <CourseForm/>
      <HackathonForm/>
      <StudentDashboard/>
      <RecruiterProfileForm/>
      <RecruiterDashboard/>
      <TeacherProfileForm/>
      <AdminProfileForm/>
      <ApplicationForm/>
      <EnrollmentForm/>
      <HackathonParticipantForm/>
      <BookmarkForm/>

      </main>
    </>
  )
}

export default App
