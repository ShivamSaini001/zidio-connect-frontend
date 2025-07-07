import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Bell, ChevronDown, User, SignalIcon } from 'lucide-react';
import { ThemeSwitch } from '../context/ThemeSwitch';
import { Link } from 'react-router';
import { Button } from '@mui/material';


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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${activeDropdown === index
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
                              <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.badge === 'New' ? 'bg-blue-500 text-blue-100' :
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

            {/* Theme switch */}
            <button className="bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
              <span className='h-6 w-6'>
                <ThemeSwitch />
              </span>
            </button>

            {/* Sign up button */}
            <Link to="/sign-up">
              <Button variant="contained">Register</Button>
            </Link>

            {/* Sign in button */}
            <Link to="/sign-in" className='text-white outline-white'>
              <Button variant="outlined"  color='inherit'>Login</Button>
            </Link>

            {/* User menu */}
            <div className="relative ml-3">

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
                        <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.badge === 'New' ? 'bg-blue-500 text-blue-100' :
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
      </div>
    </nav>
  );
}