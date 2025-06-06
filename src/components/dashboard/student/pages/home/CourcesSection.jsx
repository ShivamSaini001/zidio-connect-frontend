import { Briefcase, Camera, ChevronRight, Code, Palette, Play, Star, Users } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import CourseCard from '../../custom-components/cards/CourseCard';

const CourcesSection = () => {

    const featuredCourses = [
        {
            id: 1,
            title: "Complete React Development Course",
            instructor: "John Smith",
            rating: 4.8,
            students: 15420,
            price: 89.99,
            originalPrice: 179.99,
            category: "Development"
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            instructor: "Sarah Johnson",
            rating: 4.9,
            students: 12350,
            price: 69.99,
            originalPrice: 149.99,
            category: "Design"
        },
        {
            id: 3,
            title: "Digital Marketing Strategy",
            instructor: "Mike Davis",
            rating: 4.7,
            students: 8920,
            price: 79.99,
            originalPrice: 159.99,
            category: "Business"
        },
        {
            id: 4,
            title: "Photography Fundamentals",
            instructor: "Emma Wilson",
            rating: 4.6,
            students: 6750,
            price: 59.99,
            originalPrice: 119.99,
            category: "Photography"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Discover our most popular and highly-rated courses</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredCourses.map((course) => (
                        <CourseCard course={course} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all font-medium">
                        View All Courses
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CourcesSection
