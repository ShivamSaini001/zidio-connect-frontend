import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    MapPin,
    Building,
    Clock,
    DollarSign,
    Users,
    ExternalLink,
    Briefcase,
    GraduationCap,
    Code,
    Star,
    Bookmark,
    Share,
    Building2,
    Currency,
    IndianRupee,
    BriefcaseBusiness
} from 'lucide-react';

const JobDetailsPage = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const handleApplyClick = () => {
        if (!isAuthenticated) {
            alert('Please login or register to apply for this position');
        } else {
            alert('Application submitted successfully!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <motion.div
                    {...fadeInUp}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="relative bg-white dark:bg-gray-800 p-8 border-b-4 border-blue-600">
                        <div className="absolute top-4 right-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                            >
                                <Bookmark className={`w-5 h-5 text-gray-600 dark:text-gray-300 ${isBookmarked ? "fill-current text-blue-600" : ""}`} />
                            </motion.button>
                        </div>

                        <div className="flex items-start gap-6">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-600"
                            >
                                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">TC</span>
                                </div>
                            </motion.div>

                            <div className="flex-1">
                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
                                >
                                    Senior Frontend Developer
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl mb-4 text-gray-700 dark:text-gray-300"
                                >
                                    <div className="flex items-center mt-1 space-x-2">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                            <Building2 className="w-3 h-3 mr-1" />
                                            {"Infosys"}
                                        </p>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs text-gray-500">{4.5}</span>
                                        </div>
                                    </div>
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex gap-4"
                                >
                                    {/* Experience */}
                                    <p className="flex items-center text-sm gap-1 text-gray-600 dark:text-gray-400">
                                        <BriefcaseBusiness size={14} />
                                        <span>0 - 3 Years</span>
                                    </p>

                                    <span>|</span>
                                    {/* Salary */}
                                    <p className="flex items-center text-sm gap-1 text-gray-600 dark:text-gray-400">
                                        <IndianRupee size={14} />
                                        <span>Not Disclosed</span>
                                    </p>

                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-wrap gap-3 mb-4"
                                >
                                    {/* Location */}
                                    <div className="flex items-center text-sm gap-1 text-gray-600 dark:text-gray-400">
                                        <MapPin size={14} />
                                        <span>San Francisco, CA (Remote)</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100">
                                        Full-Time
                                    </Badge>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100">
                                        Senior Level
                                    </Badge>
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100">
                                        Remote
                                    </Badge>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
                        >
                            <p>
                                Posted:
                                <span className='font-bold ms-2'>6 days ago</span>
                            </p>
                            <span>|</span>
                            <p>
                                Openings:
                                <span className='font-bold ms-2'>2</span>
                            </p>
                            <span>|</span>
                            <p>
                                Applicants:
                                <span className='font-bold ms-2'>6 days ago</span>
                            </p>

                            {/* Apply Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="ms-auto gap-4 flex justify-end"
                            >
                                <motion.div
                                    onClick={handleApplyClick}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg"
                                    >
                                        Apply Now
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>


                    </div>
                </motion.div>

                {/* Job Overview */}
                <motion.div
                    {...fadeInLeft}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Briefcase className="text-blue-600" />
                                Job Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                <motion.div variants={fadeInUp} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <DollarSign className="text-green-600 w-6 h-6" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Salary</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">$120K - $160K</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <Clock className="text-blue-600 w-6 h-6" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Posted</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">3 days ago</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <Users className="text-purple-600 w-6 h-6" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Openings</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">2 positions</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                    <MapPin className="text-orange-600 w-6 h-6" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Work Mode</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">Remote</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Description Section */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Code className="text-blue-600" />
                                    Job Description
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">About the Role</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We're looking for a passionate Senior Frontend Developer to join our dynamic team. You'll be responsible for building cutting-edge web applications using modern technologies and frameworks.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Responsibilities</h3>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <Star className="text-yellow-500 mt-1 w-4 h-4" />
                                            Develop and maintain high-quality React applications
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Star className="text-yellow-500 mt-1 w-4 h-4" />
                                            Collaborate with design and backend teams
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Star className="text-yellow-500 mt-1 w-4 h-4" />
                                            Optimize applications for maximum speed and scalability
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Star className="text-yellow-500 mt-1 w-4 h-4" />
                                            Mentor junior developers and conduct code reviews
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Star className="text-yellow-500 mt-1 w-4 h-4" />
                                            Stay up-to-date with emerging technologies
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git'].map((skill, index) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                            >
                                                <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100">
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Preferred Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Next.js', 'GraphQL', 'AWS', 'Docker', 'Jest'].map((skill, index) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + index * 0.1 }}
                                            >
                                                <Badge variant="outline" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Technologies We Use</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'].map((tech, index) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1.1 + index * 0.1 }}
                                            >
                                                <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100">
                                                    {tech}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Company Information Sidebar */}
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Building className="text-blue-600" />
                                    About TechCorp
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    TechCorp Solutions is a leading technology company specializing in innovative software solutions for enterprise clients worldwide.
                                </p>

                                <Separator />

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">Industry</span>
                                        <span className="text-gray-900 dark:text-white text-sm font-medium">Technology</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">Company Size</span>
                                        <span className="text-gray-900 dark:text-white text-sm font-medium">200-500 employees</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">Founded</span>
                                        <span className="text-gray-900 dark:text-white text-sm font-medium">2015</span>
                                    </div>
                                </div>

                                <Separator />

                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    Visit Company Website
                                    <ExternalLink size={16} />
                                </motion.a>
                            </CardContent>
                        </Card>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Card className="shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Ready to Apply?</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        Join our team and help build the future of technology.
                                    </p>
                                    <Button
                                        onClick={handleApplyClick}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 shadow-md hover:shadow-lg transition-all duration-200"
                                    >
                                        Apply Now
                                    </Button>
                                    {!isAuthenticated && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            Login required to apply
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;