import { BookOpen } from 'lucide-react'
import React from 'react'

const FooterSection = () => {
    return (
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
    )
}

export default FooterSection
