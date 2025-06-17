import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Settings,
    CheckCircle,
    Moon,
    Sun,
    File,
    GraduationCap,
} from 'lucide-react';
import ProfileSection from '../custom-components/profile/ProfileImage';
import PersonalInformation from '../custom-components/profile/PersonalInformation';
import AddressCard from '../../common-components/AddressCard';
import SkillsCard from '../custom-components/cards/SkillsCard';
import EducationCard from '../custom-components/cards/EducationCard';
import ResumeSection from '../custom-components/profile/ResumeSection';

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
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'resume', label: 'Resume', icon: File },
    ];

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
            <div className="max-w-7xl mx-auto p-4 md:p-6">
                {/* Header with Dark Mode Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-6 md:mb-8"
                >
                    <div>
                        <h1 className={'*:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 dark:text-white text-gray-900'}>
                            My Profile
                        </h1>
                        <p className={'not-only:text-base md:text-lg dark:text-gray-300 text-gray-600'}>
                            Manage your academic and professional journey
                        </p>
                    </div>
                </motion.div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-6 md:mb-8 border-b border-gray-200 dark:border-gray-700">
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-t-lg transition-all text-sm md:text-base ${activeTab === tab.id
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
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Enhanced Profile Sidebar */}
                                <div className={''}>
                                    <ProfileSection profile={profile} />
                                </div>

                                {/* Enhanced Main Content */}
                                <div className={'gap-5 grid grid-cols-1'}>
                                    <PersonalInformation
                                        profile={profile}
                                        setProfile={setProfile}
                                        setShowToast={setShowToast}
                                        setToastMessage={setToastMessage}
                                        handleInputChange={handleInputChange}
                                        errors={errors}
                                        setErrors={setErrors}
                                    />

                                    <AddressCard />

                                    <SkillsCard />
                                </div>
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

                    {/* Education Tab */}
                    {activeTab === 'education' && (
                        <motion.div
                            key="education"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <EducationCard />

                        </motion.div>
                    )}
                </AnimatePresence>


                {/* Enhanced Toast Notification */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.8 }}
                            className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 md:px-8 md:py-6 rounded-2xl md:rounded-3xl shadow-2xl flex items-center gap-3 md:gap-4 z-50 border border-green-400/20"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-base md:text-lg">Success!</p>
                                <p className="text-sm md:text-base text-green-100">{toastMessage}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StudentProfilePage;