import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App';
import Home from './components/pages/Home'
import { AdminApp } from './components/dashboard/admin/AdminApp';
import RecruiterDashboard from './components/dashboard/recruiter/pages/RecruiterDashboard';
import AdminDashboard from './components/dashboard/admin/pages/AdminDashboard';
import UserManagement from './components/dashboard/admin/pages/UserManagement';
import UserProfile from './components/dashboard/admin/pages/UserProfile';
import ApplicationStatistics from './components/dashboard/admin/pages/ApplicationStatistics';
import JobManagement from './components/dashboard/admin/pages/JobManagement';
import InternshipManagement from './components/dashboard/admin/pages/InternshipManagement';
import RegistrationForm from './components/pages/RegistrationForm';
import { LoginPage } from './components/pages/LoginPage';
import UnauthorisedError from './components/pages/errors/UnauthorisedError';
import ForbiddenError from './components/pages/errors/ForbiddenError';
import NotFoundError from './components/pages/errors/NotFoundError';
import MaintenanceError from './components/pages/errors/MaintenanceError';
import GeneralError from './components/pages/errors/GeneralError';
import RecruiterApp from './components/dashboard/recruiter/RecruiterApp';
import JobDetailsPage from './components/dashboard/student/pages/JobDetailsPage';
import CourseDetailsPage from './components/dashboard/student/pages/CourseDetailsPage';
import InternshipDetailsPage from './components/dashboard/student/pages/InternshipDetailsPage';
import StudentProfilePage from './components/dashboard/student/pages/StudentProfilePage';

// Add these imports for teacher dashboard pages
import CourseManagement from './components/dashboard/teacher/pages/CourseManagement';
import QuizManagement from './components/dashboard/teacher/pages/QuizManagement';
import StudentManagement from './components/dashboard/teacher/pages/StudentManagement';
import AnalyticsDashboard from './components/dashboard/teacher/pages/AnalyticsDashboard';
import NotificationsPage from './components/dashboard/teacher/pages/NotificationsPage';
import TeacherEarnings from './components/dashboard/teacher/pages/TeacherEarnings';
import CourseForm from './components/dashboard/recruiter/pages/CourseForm';
import AssignmentManagement from './components/dashboard/teacher/pages/AssignmentManagement';
import StudentHomePage from './components/dashboard/student/pages/home/StudentHomePage';
import HackathoneDetailsPage from './components/dashboard/student/pages/HackathoneDetailsPage';
import BasicLayout from './components/dashboard/student/layout/BasicLayout';
import RecruiterProfile from './components/dashboard/recruiter/pages/RecruiterProfile';
import TeacherProfilePage from './components/dashboard/teacher/pages/TeacherProfilePage';
import TeacherDashboard from './components/dashboard/teacher/pages/TeacherDashboard';
import TeacherApp from './components/dashboard/teacher/TeacherApp';
import AdminProfile from './components/dashboard/admin/customComponents/AdminProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <RegistrationForm />,
  },
  {
    path: "/forgot-password",
    element: <h1 className='text-4xl'>This page is under maintanance.</h1>,
  },
  {
    path: "/401",
    element: <UnauthorisedError />,
  },
  {
    path: "/403",
    element: <ForbiddenError />,
  },
  {
    path: "/404",
    element: <NotFoundError />,
  },
  {
    path: "/500",
    element: <GeneralError />,
  },
  {
    path: "/503",
    element: <MaintenanceError />,
  },
  {
    path: "/admin",
    element: <AdminApp />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/user-management",
        element: <UserManagement />,
      },
      {
        path: "/admin/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/admin/job-management",
        element: <JobManagement />,
      },
      {
        path: "/admin/internship-management",
        element: <InternshipManagement />,
      },
      {
        path: "/admin/application-statistics",
        element: <ApplicationStatistics />,
      },
    ]
  },
  {
    path: "/recruiter",
    element: <RecruiterApp />,
    children: [
      {
        path: "/recruiter/dashboard",
        element: <RecruiterDashboard />,
      },
      {
        path: "/recruiter/profile",
        element: <RecruiterProfile />,
      },
    ]
  },
  // Update the teacher dashboard route to include children routes
  {
    path: "/teacher",
    element: <TeacherApp />,
    children: [
      {
        path: "/teacher/dashboard", // Default route
        element: <TeacherDashboard />,
      },
      {
        path: "/teacher/courses",
        element: <CourseManagement />,
      },
      {
        path: "/teacher/courses/create",
        element: <CourseForm />,
      },
      {
        path: "/teacher/courses/:id",
        element: <CourseForm />,
      },
      {
        path: "/teacher/courses/:id/edit",
        element: <CourseForm />,
      },
      {
        path: "/teacher/assignments",
        element: <AssignmentManagement />,
      },
      {
        path: "/teacher/assignments/create",
        element: <AssignmentManagement />,
      },
      {
        path: "/teacher/quizzes",
        element: <QuizManagement />,
      },
      {
        path: "/teacher/students",
        element: <StudentManagement />,
      },
      {
        path: "/teacher/forums",
        element: <div>Discussion Forums</div>,
      },
      {
        path: "/teacher/analytics/courses",
        element: <AnalyticsDashboard type="courses" />,
      },
      {
        path: "/teacher/analytics/students",
        element: <AnalyticsDashboard type="students" />,
      },
      {
        path: "/teacher/reports",
        element: <div>Reports</div>,
      },
      {
        path: "/teacher/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/teacher/profile",
        element: <TeacherProfilePage />,
      },
      {
        path: "/teacher/earnings",
        element: <TeacherEarnings />,
      },
    ],
  },
  // Student routing
  {
    path: "/student",
    element: <BasicLayout />,
    children: [
      {
        path: "/student/home",
        element: <StudentHomePage />,
      },
      {
        path: "/student/profile",
        element: <StudentProfilePage />,
      },
      {
        path: "/student/job-details",
        element: <JobDetailsPage />,
      },
      {
        path: "/student/cource-details",
        element: <CourseDetailsPage />,
      },
      {
        path: "/student/internship-details",
        element: <InternshipDetailsPage />,
      },
      {
        path: "/student/hackathon-details",
        element: <HackathoneDetailsPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
