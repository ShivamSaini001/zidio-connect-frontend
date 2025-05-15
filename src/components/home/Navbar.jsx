import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Bell, ChevronDown, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  // Primary Navigation
  const mainNavLinks = [
    { 
      name: 'Opportunities', 
      href: '/opportunities',
      dropdown: [
        { name: 'Jobs', href: '/jobs', badge: 'New' },
        { name: 'Internships', href: '/internships' },
        { name: 'Remote Work', href: '/remote' },
        { name: 'Browse by Company', href: '/companies' },
        { name: 'Browse by Role', href: '/roles' },
      ]
    },
    { 
      name: 'Hackathons', 
      href: '/hackathons',
      dropdown: [
        { name: 'Upcoming Events', href: '/hackathons/upcoming' },
        { name: 'Past Winners', href: '/hackathons/winners' },
        { name: 'Host a Hackathon', href: '/hackathons/host', badge: 'Popular' },
        { name: 'Sponsorship', href: '/hackathons/sponsor' },
      ]
    },
    { 
      name: 'Courses', 
      href: '/courses',
      dropdown: [
        { name: 'Tech & Programming', href: '/courses/tech' },
        { name: 'Design & UX', href: '/courses/design' },
        { name: 'Business & Management', href: '/courses/business' },
        { name: 'Free Resources', href: '/courses/free', badge: 'Free' },
        { name: 'Become an Instructor', href: '/courses/teach' },
      ]
    },
    { name: 'Community', href: '/community' },
  ];

  // Secondary Navigation (varies by user role)
  const roleSpecificLinks = {
    student: [
      { name: 'My Applications', href: '/dashboard/applications' },
      { name: 'Saved Courses', href: '/dashboard/courses' },
      { name: 'Learning Path', href: '/dashboard/learning-path' },
    ],
    recruiter: [
      { name: 'Manage Listings', href: '/dashboard/listings' },
      { name: 'Candidates', href: '/dashboard/candidates' },
      { name: 'Analytics', href: '/dashboard/analytics' },
    ],
    teacher: [
      { name: 'My Courses', href: '/dashboard/mycourses' },
      { name: 'Student Progress', href: '/dashboard/students' },
      { name: 'Earnings', href: '/dashboard/earnings' },
    ],
    admin: [
      { name: 'Admin Panel', href: '/admin', highlight: true },
    ],
  };

  // For demo - in real implementation this would come from auth context
  const [userRole, setUserRole] = useState('student');
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside of dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('[data-dropdown-trigger]')
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutsideNav = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideNav);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNav);
    };
  }, []);

  // Toggle dropdown menus
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zidio Connect</span>
              </a>
            </div>
            
            {/* Desktop Main Navigation */}
            <div className="hidden md:ml-8 md:flex md:items-center md:space-x-1">
              {mainNavLinks.map((link, index) => (
                <div key={index} className="relative">
                  <button
                    data-dropdown-trigger="true"
                    onClick={() => toggleDropdown(index)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                      activeDropdown === index 
                        ? 'bg-gray-800 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Dropdown menus */}
                  {link.dropdown && activeDropdown === index && (
                    <div 
                      ref={dropdownRef}
                      className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.dropdown.map((item, idx) => (
                          <a 
                            key={idx}
                            href={item.href}
                            className="group flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            role="menuitem"
                          >
                            <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300"></span>
                            <span className="flex-grow">{item.name}</span>
                            {item.badge && (
                              <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                item.badge === 'New' ? 'bg-blue-500 text-blue-100' :
                                item.badge === 'Popular' ? 'bg-green-500 text-green-100' :
                                'bg-purple-500 text-purple-100'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side navigation - Search, Notifications, User Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search */}
            <button className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Search</span>
              <Search className="h-5 w-5" />
            </button>
            

            
            {/* Notifications */}
            <button className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-800"></span>
            </button>
            
            {/* User menu */}
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => toggleDropdown('profile')}
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  data-dropdown-trigger="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 border-2 border-gray-600">
                    <User className="h-5 w-5" />
                  </div>
                </button>
              </div>
              
              {/* User dropdown menu */}
              {activeDropdown === 'profile' && (
                <div
                  ref={dropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1 border-b border-gray-700">
                    <div className="px-4 py-3">
                      <p className="text-sm text-white">Signed in as</p>
                      <p className="text-sm font-medium text-gray-300 truncate">user@example.com</p>
                    </div>
                  </div>
                  <div className="py-1">
                    {roleSpecificLinks[userRole].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`block px-4 py-2 text-sm ${
                          item.highlight 
                            ? 'text-blue-400 hover:bg-gray-700' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-1 border-t border-gray-700">
                    <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      Settings
                    </a>
                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {mainNavLinks.map((link, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(`mobile-${index}`)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex justify-between items-center"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === `mobile-${index}` ? 'transform rotate-180' : ''}`} />
                )}
              </button>
              
              {link.dropdown && activeDropdown === `mobile-${index}` && (
                <div className="pl-4 mt-1 mb-2 space-y-1 border-l-2 border-gray-700">
                  {link.dropdown.map((item, subIndex) => (
                    <a
                      key={subIndex}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white flex justify-between"
                    >
                      {item.name}
                      {item.badge && (
                        <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          item.badge === 'New' ? 'bg-blue-500 text-blue-100' :
                          item.badge === 'Popular' ? 'bg-green-500 text-green-100' :
                          'bg-purple-500 text-purple-100'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile role selection */}
        <div className="px-4 py-3 border-t border-gray-700">
          <div className="flex items-center">
            <label htmlFor="mobile-role-select" className="block text-sm font-medium text-gray-300 mr-2">
              Role:
            </label>
            <select 
              id="mobile-role-select"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="bg-gray-800 text-sm text-gray-300 rounded-md py-1 px-2 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        
        {/* Mobile user-specific links */}
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 border-2 border-gray-600">
                <User className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">User Name</div>
              <div className="text-sm font-medium text-gray-400">user@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            {roleSpecificLinks[userRole].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.highlight 
                    ? 'text-blue-400 hover:bg-gray-700' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Settings
            </a>
            <a href="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}