import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Code, Palette, Briefcase, Camera, Music } from 'lucide-react';
import CourcesSection from './CourcesSection';
import JobsSection from './JobsSection';
import InternshipsSection from './InternshipsSection';
import HackathonsSection from './HackathonsSection';
import StudentNavbar from '../../custom-components/navbar/StudentNavbar';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import FooterSection from './FooterSection';
import TestimonialSection from './TestimonialSection';
import InstructorSection from './InstructorSection';


const StudentHomePage = () => {
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
                {/* Navigation Bar*/}
                <StudentNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

                {/* Hero Section */}
                <HeroSection />

                {/* Featured Courses */}
                <CourcesSection />

                {/* Job Section */}
                <JobsSection />

                {/* Internship Section */}
                <InternshipsSection />

                {/* Hackathone Section */}
                <HackathonsSection />

                {/* Categories */}
                <CategoriesSection categories={categories} />

                {/* Instructor Highlights */}
                <InstructorSection instructors={instructors} />

                {/* Testimonials */}
                <TestimonialSection testimonials={testimonials} />

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
                <FooterSection />

            </div>
        </div>
    )
}

export default StudentHomePage;