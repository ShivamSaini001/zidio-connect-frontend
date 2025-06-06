import React from 'react'

const InstructorSection = ({instructors}) => {
    return (
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
    )
}

export default InstructorSection
