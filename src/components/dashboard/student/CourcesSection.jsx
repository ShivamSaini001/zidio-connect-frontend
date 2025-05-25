import { Briefcase, Camera, ChevronRight, Code, Palette, Play, Star, Users } from 'lucide-react';
import React from 'react'

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
                        <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-t-2xl flex items-center justify-center">
                                    <div className="text-white text-6xl opacity-20">
                                        {course.category === 'Development' && <Code />}
                                        {course.category === 'Design' && <Palette />}
                                        {course.category === 'Business' && <Briefcase />}
                                        {course.category === 'Photography' && <Camera />}
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {course.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all">
                                        <Play className="h-4 w-4 text-blue-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">by {course.instructor}</p>

                                <div className="flex items-center mb-3">
                                    <div className="flex items-center mr-4">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Users className="h-4 w-4 mr-1" />
                                        <span>{course.students.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl font-bold text-green-600">${course.price}</span>
                                        <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                                    </div>
                                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
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
