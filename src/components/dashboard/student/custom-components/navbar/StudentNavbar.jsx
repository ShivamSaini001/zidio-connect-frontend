import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, Moon, Sun, X, User, Settings, LogOut, Calendar, LogOutIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoutButton from '@/components/dashboard/common-components/LogoutButton';

const StudentNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'));

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', true);
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('darkMode', false);
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const studentData = {
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  };

  return (
    <div>
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to={'/student/home'} className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zidio Connect
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Courses</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Categories</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Instructors</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Log In/Sign Up */}
              {!isLoggedIn && (
                <div className="hidden md:flex space-x-3">
                  <Link to={'/sign-in'}>
                    <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Log In
                    </button>
                  </Link>
                  <Link to={'/sign-up'}>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {/* Student Profile */}
              {isLoggedIn && (
                <div className="flex items-center relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={studentData.avatar} alt={studentData.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {studentData.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80" align="end" forceMount>
                      {/* Profile Header */}
                      <div className="flex items-start space-x-3 p-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={studentData.avatar} alt={studentData.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {studentData.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-semibold text-foreground">{studentData.name}</h4>
                          <p className="text-xs text-muted-foreground">{studentData.email}</p>
                        </div>
                      </div>

                      <DropdownMenuSeparator />

                      {/* Menu Items */}
                      <Link to={'/student/profile'}>
                        <DropdownMenuItem className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>View Profile</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="cursor-pointer">
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>My Courses</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Schedule</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />

                      {/* Logout */}
                        <LogoutButton >
                          <span className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer">
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            <span>Logout</span>
                          </span>
                        </LogoutButton>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Courses</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Categories</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">Instructors</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">About</a>
            {
              !isLoggedIn && (
                <div className="flex space-x-3 px-3 py-2">
                  <button className="flex-1 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg">Log In</button>
                  <button className="flex-1 py-2 text-center bg-blue-600 text-white rounded-lg">Sign Up</button>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentNavbar
