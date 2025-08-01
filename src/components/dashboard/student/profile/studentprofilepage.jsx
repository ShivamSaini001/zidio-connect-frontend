import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Settings,
    CheckCircle,
    Moon,
    Sun,
    File,
} from 'lucide-react';
import ResumeSection from '../custom-components/ResumeSection';
import ProfileSection from '../custom-components/ProfileSection';
import PersonalInformation from '../custom-components/PersonalInformation';

// Mock data
const initialProfile = {
    name: 'Alex Johnson',
    title: 'Computer Science Student',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: '2023',
    bio: 'Passionate computer science student with a focus on web development and machine learning. Always eager to learn new technologies and work on innovative projects. Currently pursuing my Bachelor\'s degree with a GPA of 3.8.',
    stats: {
        courses: 24,
        certificates: 8
    },
    socialLinks: {
        github: 'github.com/alexjohnson',
        linkedin: 'linkedin.com/in/alexjohnson',
        portfolio: 'alexjohnson.dev'
    }
};

const StudentProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [profile, setProfile] = useState(initialProfile);
    const [darkMode, setDarkMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'resume', label: 'Resume', icon: File },
        { id: 'certificates', label: 'Certificates', icon: CheckCircle },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    // Initialize dark mode from system preference
    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isDark);
    }, []);

    // Apply dark mode to document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Validation function
    const validateProfile = () => {
        const newErrors = {};

        if (!profile.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!profile.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?\d{10,15}$/.test(profile.phone.replace(/[\s\-\(\)]/g, ''))) {
            newErrors.phone = 'Invalid phone number format';
        }

        if (!profile.location.trim()) {
            newErrors.location = 'Location is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes
    const handleInputChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <div className={'min-h-screen transition-all duration-500 bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 from-blue-50 via-indigo-50 to-purple-50'}>
            <div className="max-w-7xl mx-auto p-6">
                {/* Header with Dark Mode Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-8"
                >
                    <div>
                        <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            My Profile
                        </h1>
                        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Manage your academic and professional journey
                        </p>
                    </div>

                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={'p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 dark:bg-yellow-500 dark:text-yellow-900 dark:hover:bg-yellow-400 bg-gray-800 text-yellow-400 hover:bg-gray-700'}
                    >
                        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                    </button>
                </motion.div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all ${activeTab === tab.id
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'profile' && (
                        <motion.div
                            key="profile"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid lg:grid-cols-4 gap-8">
                                {/* Enhanced Profile Sidebar */}
                                <ProfileSection profile={profile} />

                                {/* Enhanced Main Content */}
                                <PersonalInformation
                                    profile={profile}
                                    setShowToast={setShowToast}
                                    setToastMessage={setToastMessage}
                                    handleInputChange={handleInputChange}
                                    errors={errors}
                                    setErrors={setErrors}
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Resume Tab */}
                    {activeTab === 'resume' && (
                        <motion.div
                            key="resume"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <ResumeSection />
                        </motion.div>)
                    }
                </AnimatePresence>

                {/* Enhanced Toast Notification */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.8 }}
                            className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-6 rounded-3xl shadow-2xl flex items-center gap-4 z-50 border border-green-400/20"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Success!</p>
                                <p className="text-green-100">{toastMessage}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StudentProfilePage;