import React, { useState, useEffect } from 'react';
import { Search, Star, Users, Play, BookOpen, Code, Palette, Briefcase, Camera, Music, ChevronRight, Sun, Moon, Menu, X } from 'lucide-react';
import CourseDetailsPage from './CourseDetailsPage';
import JobsSection from './JobsSection';
import InternshipsSection from './InternshipsSection';
import HackathonsSection from './HackathonsSection';
import CourcesSection from './CourcesSection';

const StudentHome = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const categories = [
        { icon: Code, name: "Development", courses: 1250, color: "bg-blue-500" },
        { icon: Palette, name: "Design", courses: 890, color: "bg-purple-500" },
        { icon: Briefcase, name: "Business", courses: 650, color: "bg-green-500" },
        { icon: Camera, name: "Photography", courses: 420, color: "bg-red-500" },
        { icon: Music, name: "Music", courses: 380, color: "bg-yellow-500" },
        { icon: BookOpen, name: "Literature", courses: 290, color: "bg-indigo-500" }
    ];

    const instructors = [
        {
            name: "Dr. Alex Chen",
            title: "Full Stack Developer",
            students: 25000,
            courses: 12,
            rating: 4.9
        },
        {
            name: "Lisa Rodriguez",
            title: "UX Design Expert",
            students: 18500,
            courses: 8,
            rating: 4.8
        },
        {
            name: "David Park",
            title: "Business Strategist",
            students: 22000,
            courses: 15,
            rating: 4.7
        }
    ];

    const testimonials = [
        {
            name: "Jennifer Liu",
            role: "Software Engineer at Google",
            content: "The courses here completely transformed my career. I went from beginner to landing my dream job in just 8 months!",
            rating: 5
        },
        {
            name: "Marcus Thompson",
            role: "Freelance Designer",
            content: "Amazing instructors and practical projects. I've increased my freelance rates by 300% after completing the design courses.",
            rating: 5
        },
        {
            name: "Priya Patel",
            role: "Marketing Director",
            content: "The business courses gave me the confidence and skills to get promoted. Highly recommend to anyone looking to advance their career.",
            rating: 5
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {/* Navigation */}
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
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </button>

                                <div className="hidden md:flex space-x-3">
                                    <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Log In
                                    </button>
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                                        Sign Up
                                    </button>
                                </div>

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
                            <div className="flex space-x-3 px-3 py-2">
                                <button className="flex-1 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg">Log In</button>
                                <button className="flex-1 py-2 text-center bg-blue-600 text-white rounded-lg">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23e5e7eb' stroke-width='1' opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
                        }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Learn Anything,
                                </span>
                                <br />
                                <span className="text-gray-900 dark:text-white">Anytime, Anywhere</span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Join millions of learners worldwide and unlock your potential with expert-led courses,
                                practical projects, and a supportive community.
                            </p>

                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="What do you want to learn?"
                                        className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-lg"
                                    />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
                                        Search
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                                    Browse Courses
                                </button>
                                <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all transform hover:scale-105 shadow-lg">
                                    Watch Demo
                                </button>
                            </div>

                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                                    <div className="text-gray-600 dark:text-gray-400">Students</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1,200+</div>
                                    <div className="text-gray-600 dark:text-gray-400">Courses</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">150+</div>
                                    <div className="text-gray-600 dark:text-gray-400">Instructors</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">95%</div>
                                    <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Courses */}
                <CourcesSection />

                <JobsSection />
                <InternshipsSection />
                <HackathonsSection />

                {/* Categories */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">Explore courses across various subjects and skills</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {categories.map((category, index) => {
                                const IconComponent = category.icon;
                                return (
                                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-gray-700">
                                        <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="font-semibold mb-1">{category.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{category.courses} courses</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Instructor Highlights */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Instructors</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">Learn from industry professionals and academic experts</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {instructors.map((instructor, index) => (
                                <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-white dark:border-gray-700 shadow-lg">
                                        {instructor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{instructor.title}</p>

                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">{(instructor.students / 1000).toFixed(0)}K</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600">{instructor.courses}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Courses</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-yellow-600">{instructor.rating}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                                        View Profile
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-blue-900/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">Real success stories from our learning community</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of students and get 50% off your first course today!
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold mb-2">50%</div>
                                    <div className="opacity-90">Off First Course</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">30 Days</div>
                                    <div className="opacity-90">Money Back Guarantee</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="opacity-90">Student Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                                Get 50% OFF Now
                            </button>
                            <button className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                                Browse Free Courses
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center mb-4">
                                    <BookOpen className="h-8 w-8 text-blue-400" />
                                    <span className="ml-2 text-xl font-bold">LearnPro</span>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Empowering learners worldwide with quality education and expert instruction.
                                </p>
                                <div className="flex space-x-4">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold">f</span>
                                    </div>
                                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold">t</span>
                                    </div>
                                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                                        <span className="text-xs font-bold">i</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Company</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Support</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default StudentHome;