import { Briefcase, Camera, Code, Palette, Play, Star, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const CourseCard = ({course}) => {
    return (
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
                    <Link to={'/student/cource-details'}>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium">
                            Enroll Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CourseCard
