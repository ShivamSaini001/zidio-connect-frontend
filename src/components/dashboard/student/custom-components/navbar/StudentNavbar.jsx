import { BookOpen, Menu, Moon, Sun, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router';

const StudentNavbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zidio Connect
                </span>
              </div>
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
                <div className="flex items-center space-x-3">
                  profile
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
