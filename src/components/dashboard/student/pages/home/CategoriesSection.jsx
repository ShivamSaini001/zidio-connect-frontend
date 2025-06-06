import React from 'react'

const CategoriesSection = ({categories}) => {
    return (
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
    )
}

export default CategoriesSection
