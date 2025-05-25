import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import App from './App';
import Home from './components/pages/Home'
import { AdminApp } from './components/dashboard/admin/AdminApp';
import StudentDashboard from './components/dashboard/student/StudentDashboard';
import RecruiterDashboard from './components/dashboard/recruiter/pages/RecruiterDashboard';
import TeacherDashboard from './components/dashboard/teacher/TeacherDashboard';
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
import StudentHome from './components/dashboard/student/StudentHome';

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
    path: "/student-home",
    element: <StudentHome />,
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
    ]
  },
  {
    path: "/dashboard/student",
    element: <StudentDashboard />,
  },
  {
    path: "/dashboard/teacher",
    element: <TeacherDashboard />,
  }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
