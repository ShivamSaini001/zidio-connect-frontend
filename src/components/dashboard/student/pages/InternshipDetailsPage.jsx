import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    MapPin,
    Clock,
    Building2,
    Briefcase,
    Calendar,
    Users,
    Globe,
    DollarSign,
    Timer,
    Star,
    Bookmark,
    Building,
    ExternalLink,
    Share2,
} from 'lucide-react';

const InternshipDetailsPage = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const staggerItem = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };

    const techSections = [
        {
            title: "Frontend Technologies",
            icon: "💻",
            tools: [
                { name: "React 18", category: "framework" },
                { name: "TypeScript", category: "language" },
                { name: "Tailwind CSS", category: "styling" },
                { name: "Vite", category: "build" }
            ]
        },
        {
            title: "Backend & Database",
            icon: "🔧",
            tools: [
                { name: "Node.js", category: "runtime" },
                { name: "Express.js", category: "framework" },
                { name: "MongoDB", category: "database" },
                { name: "PostgreSQL", category: "database" }
            ]
        },
        {
            title: "DevOps & Tools",
            icon: "⚙️",
            tools: [
                { name: "Docker", category: "container" },
                { name: "AWS", category: "cloud" },
                { name: "Redis", category: "cache" },
                { name: "GitHub Actions", category: "ci-cd" }
            ]
        },
        {
            title: "Testing & Quality",
            icon: "✅",
            tools: [
                { name: "Jest", category: "testing" },
                { name: "React Testing Library", category: "testing" },
                { name: "Cypress", category: "e2e" },
                { name: "ESLint", category: "linting" }
            ]
        }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            framework: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
            language: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
            styling: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
            build: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
            runtime: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
            database: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
            container: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
            cloud: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
            cache: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
            "ci-cd": "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
            testing: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
            e2e: "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
            linting: "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        };
        return colors[category] || "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -4,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const iconVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.95 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <motion.div
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="w-full max-w-4xl mx-auto"
                >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                        <CardContent className="p-0">
                            {/* Header Section */}
                            <div className="p-6 pb-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-start gap-4">
                                        {/* Company Logo */}
                                        <motion.div
                                            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            TC
                                        </motion.div>

                                        {/* Job Title & Company */}
                                        <div className="flex-1">
                                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                                Software Engineering Intern
                                            </h1>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Building className="w-4 h-4 text-gray-500" />
                                                <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                                                    TechCorp Solutions
                                                </span>
                                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                                                    Verified
                                                </Badge>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.2</span>
                                                <span className="text-sm text-gray-500">(127 reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Details */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm font-medium">Remote</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium">Full-Time</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <DollarSign className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-medium">$2,000/month</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Calendar className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm font-medium">3 months</span>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>15 applicants</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>Posted 2 days ago</span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Mached Skills:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'JavaScript', 'Node.js', 'TypeScript', 'Git'].map((skill) => (
                                            <Badge key={skill} variant="secondary" className="text-xs bg-blue-50 text-blue-700 dark:bg-amber-200 dark:text-amber-950">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex "
                                    >
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg">
                                            Apply Now
                                        </Button>
                                    </motion.div>

                                    {/* Bookmark and share Buttons */}
                                    <div className="flex items-center gap-2">
                                        <motion.button
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onClick={() => setIsBookmarked(!isBookmarked)}
                                            className={`p-2 rounded-lg transition-colors ${isBookmarked
                                                ? 'bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-400'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                                        </motion.button>

                                        <motion.button
                                            variants={iconVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <Share2 className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Overview Section */}
                <motion.div
                    {...fadeInUp}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="w-full max-w-4xl mx-auto"
                    transition={{ delay: 0.2 }}
                >
                    <Card className="border-0 shadow-lg dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                Overview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.div variants={staggerItem} className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                                        <p className="font-medium text-gray-900 dark:text-white">June 1, 2025</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={staggerItem} className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Deadline</p>
                                        <p className="font-medium text-gray-900 dark:text-white">May 30, 2025</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={staggerItem} className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Openings</p>
                                        <p className="font-medium text-gray-900 dark:text-white">3 positions</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={staggerItem} className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Work Mode</p>
                                        <p className="font-medium text-gray-900 dark:text-white">Remote</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Description Section */}
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Responsibilities */}
                        <motion.div
                            {...fadeInUp}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="w-full max-w-4xl mx-auto"
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="border-0 shadow-lg dark:bg-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Responsibilities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Develop and maintain web applications using React and Node.js</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Collaborate with cross-functional teams on feature development</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Write clean, efficient, and well-documented code</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Participate in code reviews and contribute to best practices</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Develop and maintain web applications using React and Node.js</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Collaborate with cross-functional teams on feature development</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Write clean, efficient, and well-documented code</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                            <p className="text-gray-700 dark:text-gray-300">Participate in code reviews and contribute to best practices</p>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Skills & Perks */}

                        <div className="space-y-8">
                            <motion.div
                                {...fadeInUp}
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                className="w-full max-w-4xl mx-auto"
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="border-0 shadow-lg dark:bg-gray-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Skills Required
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Prerequisites</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="outline" className="border-blue-300 text-blue-700 dark:border-blue-500 dark:text-blue-400 px-3 py-1">JavaScript (ES6+)</Badge>
                                                <Badge variant="outline" className="border-cyan-300 text-cyan-700 dark:border-cyan-500 dark:text-cyan-400 px-3 py-1">React.js</Badge>
                                                <Badge variant="outline" className="border-green-300 text-green-700 dark:border-green-500 dark:text-green-400 px-3 py-1">HTML5 & CSS3</Badge>
                                                <Badge variant="outline" className="border-orange-300 text-orange-700 dark:border-orange-500 dark:text-orange-400 px-3 py-1">Git & GitHub</Badge>
                                                <Badge variant="outline" className="border-purple-300 text-purple-700 dark:border-purple-500 dark:text-purple-400 px-3 py-1">Node.js</Badge>
                                                <Badge variant="outline" className="border-indigo-300 text-indigo-700 dark:border-indigo-500 dark:text-indigo-400 px-3 py-1">TypeScript</Badge>
                                                <Badge variant="outline" className="border-emerald-300 text-emerald-700 dark:border-emerald-500 dark:text-emerald-400 px-3 py-1">REST APIs</Badge>
                                                <Badge variant="outline" className="border-rose-300 text-rose-700 dark:border-rose-500 dark:text-rose-400 px-3 py-1">Testing (Jest)</Badge>
                                                <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-500 dark:text-amber-400 px-3 py-1">Agile/Scrum</Badge>
                                                <Badge variant="outline" className="border-teal-300 text-teal-700 dark:border-teal-500 dark:text-teal-400 px-3 py-1">GraphQL</Badge>
                                                <Badge variant="outline" className="border-gray-300 text-gray-700 dark:border-gray-500 dark:text-gray-400 px-3 py-1">Docker</Badge>
                                                <Badge variant="outline" className="border-sky-300 text-sky-700 dark:border-sky-500 dark:text-sky-400 px-3 py-1">AWS/Cloud</Badge>
                                                <Badge variant="outline" className="border-lime-300 text-lime-700 dark:border-lime-500 dark:text-lime-400 px-3 py-1">MongoDB</Badge>
                                                <Badge variant="outline" className="border-violet-300 text-violet-700 dark:border-violet-500 dark:text-violet-400 px-3 py-1">CI/CD</Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Benifits */}
                            <motion.div
                                {...fadeInUp}
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                className="w-full max-w-4xl mx-auto"
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="border-0 shadow-lg dark:bg-gray-800">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Perks & Benefits
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                <span className="text-gray-700 dark:text-gray-300">Certificate of completion</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                <span className="text-gray-700 dark:text-gray-300">Pre-placement offer (PPO) opportunity</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                <span className="text-gray-700 dark:text-gray-300">Flexible working hours</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                <span className="text-gray-700 dark:text-gray-300">Mentorship from senior developers</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    {...fadeInUp}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="w-full max-w-4xl mx-auto"
                    transition={{ delay: 0.3 }}
                >
                    <Card className="w-full my-5 max-w-4xl mx-auto shadow-sm border-0 bg-white dark:bg-gray-800">
                        <CardHeader className="pb-4">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg">
                                    <span className="text-xl">🛠️</span>
                                </div>
                                <div>
                                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                        Tech Stack & Tools
                                    </CardTitle>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                        Technologies and tools you'll work with during this internship
                                    </p>
                                </div>
                            </motion.div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4"
                            >
                                {techSections.map((section, sectionIndex) => (
                                    <motion.div key={section.title} variants={itemVariants}>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{section.icon}</span>
                                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                                    {section.title}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {section.tools.map((tool, toolIndex) => (
                                                    <motion.div
                                                        key={tool.name}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{
                                                            duration: 0.2,
                                                            delay: sectionIndex * 0.05 + toolIndex * 0.02
                                                        }}
                                                        whileHover={{ scale: 1.03 }}
                                                        whileTap={{ scale: 0.97 }}
                                                    >
                                                        <Badge
                                                            variant="secondary"
                                                            className={`px-3 py-1 text-sm font-medium rounded-md cursor-default transition-all duration-150 hover:shadow-sm ${getCategoryColor(tool.category)}`}
                                                        >
                                                            {tool.name}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {sectionIndex < techSections.length - 1 && (
                                            <Separator className="mt-4" />
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>

                        </CardContent>
                    </Card>
                </motion.div>

                {/* About Company */}
                <motion.div
                    {...fadeInUp}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="w-full max-w-4xl mx-auto"
                    transition={{ delay: 0.5 }}
                >
                    <Card className="border-0 shadow-lg dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                About TechCorp Solutions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                TechCorp Solutions is a fast-growing technology company focused on building innovative software solutions for enterprises. We specialize in cloud-native applications, AI-powered analytics, and modern web development. Our team is passionate about creating products that make a real impact on businesses and their customers.
                            </p>

                            <Separator />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                            techcorp.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Building2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
                                        <p className="font-medium text-gray-900 dark:text-white">Technology</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                                        <p className="font-medium text-gray-900 dark:text-white">51-200 employees</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Our Culture</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    We believe in fostering innovation, continuous learning, and work-life balance. Our team collaborates across time zones, values diverse perspectives, and is committed to personal and professional growth.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Call to Action */}
                <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Join our team and gain hands-on experience in modern software development. Apply now to secure your spot for this exciting internship opportunity.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl shadow-lg font-semibold"
                                >
                                    Apply Now - Login Required
                                </Button>
                            </motion.div>
                            <p className="text-blue-100 text-sm mt-4">
                                Questions? Contact us at <a href="mailto:careers@techcorp.com" className="underline hover:text-white">careers@techcorp.com</a>
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div >
        </div >
    );
};

export default InternshipDetailsPage;