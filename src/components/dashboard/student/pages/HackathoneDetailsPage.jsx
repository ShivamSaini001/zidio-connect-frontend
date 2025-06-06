import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Code, MapPin, Mail, Phone, CheckCircle, AlertCircle, Star, Share2, Bookmark } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const HackathoneDetailsPage = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    // Mock hackathon data
    const hackathon = {
        id: 1,
        title: "AI Revolution Hackathon 2025",
        tagline: "Build the Future with Artificial Intelligence",
        banner: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop",
        status: "upcoming", // upcoming, ongoing, ended
        registrationDeadline: new Date("2025-07-15"),
        hackathonDate: new Date("2025-07-20"),
        resultDate: new Date("2025-07-25"),
        currentDate: new Date(),
        description: "Join us for the most exciting AI hackathon of the year! This 48-hour coding marathon challenges participants to create innovative AI solutions that can solve real-world problems. Whether you're passionate about machine learning, natural language processing, computer vision, or robotics, this is your chance to showcase your skills and win amazing prizes.",
        eligibility: [
            "Students from recognized universities and colleges",
            "Working professionals with less than 5 years of experience",
            "Freelancers and independent developers",
            "Team leaders must be 18+ years old"
        ],
        prizes: [
            { position: "1st Place", amount: "$10,000", description: "Cash prize + Internship opportunity" },
            { position: "2nd Place", amount: "$5,000", description: "Cash prize + Mentorship program" },
            { position: "3rd Place", amount: "$2,500", description: "Cash prize + Tech gadgets" },
            { position: "Special Prizes", amount: "$1,000 each", description: "Best AI Innovation, Best Social Impact, Best UI/UX" }
        ],
        teamSize: { min: 1, max: 4 },
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "React", "Node.js", "MongoDB", "AWS"],
        registeredTeams: 247,
        maxTeams: 500,
        organizer: {
            name: "TechCorp Innovation Lab",
            contact: {
                email: "hackathon@techcorp.com",
                phone: "+1-555-0123",
                website: "www.techcorp.com/hackathon"
            }
        },
        sponsors: ["Google", "Microsoft", "AWS", "OpenAI"],
        location: "Silicon Valley Convention Center + Virtual",
        eventDetails: [
            { date: "July 15, 2025", event: "Registration Deadline", icon: <Calendar className="w-5 h-5 text-blue-500 mt-1" /> },
            { date: "July 18, 2025", event: "Hackathon Dates", icon: <Clock className="w-5 h-5 text-green-500 mt-1" /> },
            {
                date: "July 20-22, 2025", event: "Results Announcement", icon: <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
            },
            {
                date: "45 Days", event: "Hackathon Duration", icon: <Clock className="w-5 h-5 text-green-500 mt-1" />
            },
            { date: "July 25, 2025", event: "Team Size", icon: <Users className="w-5 h-5 text-purple-500 mt-1" /> },
            { date: "Noida (UP)", event: "Location", icon: <MapPin className="w-5 h-5 text-red-500 mt-1" /> },
        ]
    };

    const isRegistrationOpen = hackathon.currentDate < hackathon.registrationDeadline;
    const isRegistrationFull = hackathon.registeredTeams >= hackathon.maxTeams;
    const canRegister = isRegistrationOpen && !isRegistrationFull && !isRegistered;
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    const themeClasses = isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gray-50 text-gray-900';

    const cardClasses = isDarkMode
        ? 'bg-gray-800 border-gray-700'
        : 'bg-white border-gray-200';

    const cardHoverStyles = {
        transform: 'scale(1.02)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const handleRegistration = () => {
        if (canRegister) {
            setIsRegistered(true);
            // Here you would typically make an API call
        }
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getRegistrationButtonText = () => {
        if (isRegistered) return "Registered Successfully";
        if (!isRegistrationOpen) return "Registration Closed";
        if (isRegistrationFull) return "Registration Full";
        return "Register Now";
    };

    const getRegistrationButtonColor = () => {
        if (isRegistered) return "bg-green-600 hover:bg-green-700";
        if (!canRegister) return "bg-gray-400 cursor-not-allowed";
        return "bg-blue-600 hover:bg-blue-700 transform hover:scale-105";
    };

    return (
        <div className="`min-h-screen transition-colors duration-300 ${themeClasses}`">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${hackathon.banner})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center flex-wrap">
                    <div className="text-white max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {hackathon.status.toUpperCase()}
                            </span>
                            <div className="flex items-center gap-2 text-yellow-300">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="text-sm">Featured Hackathon</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            {hackathon.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                            {hackathon.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(hackathon.hackathonDate)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{hackathon.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{hackathon.registeredTeams}/{hackathon.maxTeams} teams registered</span>
                            </div>
                        </div>
                    </div>
                    {/* Apply now */}
                    <button
                        onClick={handleRegistration}
                        disabled={!canRegister}
                        className={`${getRegistrationButtonColor()} text-white px-8 py-3 my-5 ms-auto mt-auto rounded-xl font-semibold transition-all duration-200 whitespace-nowrap min-w-[180px] flex items-center justify-center gap-2`}
                    >
                        {isRegistered && <CheckCircle className="w-5 h-5" />}
                        {!canRegister && !isRegistered && <AlertCircle className="w-5 h-5" />}
                        {getRegistrationButtonText()}
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-2">
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all">
                        <Share2 className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all">
                        <Bookmark className="w-5 h-5 text-white" />
                    </button>
                </div>


            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Description */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-8"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hackathon</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {hackathon.description}
                            </p>
                        </motion.div>

                        {/* Event Details */}
                        <motion.div variants={itemVariants} className={`p-6 rounded-xl ${cardClasses} border`}>
                            <Card>
                                <CardHeader>
                                    <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {
                                        hackathon.eventDetails.map((detail, index) => (
                                            <div className="flex items-start space-x-3">
                                                {detail.icon}
                                                <div>
                                                    <p className="font-medium">{detail.event}</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{detail.date}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Prizes */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-8"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Trophy className="w-6 h-6 text-yellow-500" />
                                Prizes & Rewards
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {hackathon.prizes.map((prize, index) => (
                                    <motion.div
                                        key={index}
                                        className="border border-gray-200 rounded-xl p-6"
                                        whileHover={{
                                            y: -4,
                                            borderColor: '#3b82f6',
                                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-bold text-lg text-gray-900">{prize.position}</h3>
                                            <span className="text-2xl font-bold text-green-600">{prize.amount}</span>
                                        </div>
                                        <p className="text-gray-600">{prize.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-8"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-600" />
                                Technologies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {hackathon.technologies.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer"
                                        whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 relative">
                        {/* Quick Info */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6 top-6 z-10"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>

                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-900">Registration Deadline</div>
                                        <div className="text-gray-600 text-sm">{formatDate(hackathon.registrationDeadline)}</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-900">Duration</div>
                                        <div className="text-gray-600 text-sm">48 hours</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-900">Team Size</div>
                                        <div className="text-gray-600 text-sm">{hackathon.teamSize.min}-{hackathon.teamSize.max} members</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-900">Mode</div>
                                        <div className="text-gray-600 text-sm">Hybrid (Physical + Virtual)</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Eligibility */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6 relative z-10"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility</h3>
                            <ul className="space-y-3">
                                {hackathon.eligibility.map((criteria, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-2 text-gray-700 p-2 rounded-lg"
                                        whileHover={{ backgroundColor: '#f9fafb', x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm leading-relaxed">{criteria}</span>
                                    </motion.div>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6 relative z-10"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact & Support</h3>

                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-center gap-3 p-2 rounded-lg"
                                    whileHover={{ backgroundColor: '#eff6ff', x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    <a href={`mailto:${hackathon.organizer.contact.email}`} className="text-blue-600 hover:underline text-sm">
                                        {hackathon.organizer.contact.email}
                                    </a>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3 p-2 rounded-lg"
                                    whileHover={{ backgroundColor: '#f0fdf4', x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{hackathon.organizer.contact.phone}</span>
                                </motion.div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-2">Organized by</p>
                                <motion.div
                                    className="p-2 rounded-lg"
                                    whileHover={{ backgroundColor: '#f8fafc' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <p className="font-semibold text-gray-900">{hackathon.organizer.name}</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Sponsors */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg p-6 relative z-10"
                            whileHover={{ y: -2, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsors</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {hackathon.sponsors.map((sponsor, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-3 text-center cursor-pointer"
                                        whileHover={{
                                            backgroundColor: '#f0f9ff',
                                            scale: 1.05,
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-sm font-medium text-gray-700">{sponsor}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            < div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50" >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                >
                    <button
                        onClick={handleRegistration}
                        disabled={!canRegister}
                        className={`${getRegistrationButtonColor()} text-white w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2`}
                    >
                        {isRegistered && <CheckCircle className="w-5 h-5" />}
                        {!canRegister && !isRegistered && <AlertCircle className="w-5 h-5" />}
                        {getRegistrationButtonText()}
                    </button>
                </motion.div>
            </div >
        </div>
    );
};

export default HackathoneDetailsPage;
