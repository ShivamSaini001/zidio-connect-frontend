import React from 'react'
import { Search } from 'lucide-react';

const HeroSection = () => {
    return (
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
    )
}

export default HeroSection
