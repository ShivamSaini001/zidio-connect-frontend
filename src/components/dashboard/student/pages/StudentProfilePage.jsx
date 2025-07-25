import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    File,
    GraduationCap,
    EditIcon,
    X,
    Save,
} from 'lucide-react';
import ProfileSection from '../custom-components/profile/ProfileImage';
import PersonalInformation from '../custom-components/profile/PersonalInformation';
import AddressCard from '../../common-components/AddressCard';
import SkillsCard from '../custom-components/cards/SkillsCard';
import EducationCard from '../custom-components/cards/EducationCard';
import ResumeSection from '../custom-components/profile/ResumeSection';
import { Button } from '@/components/ui/button';
import {
    addUserEducatoin,
    addUserSkill,
    getStudentProfile,
    removeUserEducation,
    removeUserSkill,
    updateStudentProfile,
    updateUserEducation
} from '@/services/UserProfileService';

// Mock data
const initialProfile = {
    firstName: 'Alex',
    lastName: 'Johnson',
    tagline: 'Web Developer || Java Developer',
    bio: 'Passionate computer science student with a focus on web development and machine learning. Always eager to learn new technologies and work on innovative projects. Currently pursuing my Bachelor\'s degree with a GPA of 3.8.',
    mobile: '7302848668',
    gender: 'male',
    dateOfBirth: '',
    resumeUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    profileImageUrl: '',
    skills: [
        {
            id: '1',
            name: 'Java',
        },
    ],
    education: [
        {
            id: '1',
            collegeName: 'Krishna Institute Of Education & Management',
            courceName: 'Bechelor Of Computer Applications (BCA)',
            universityName: 'CCS University',
            branch: 'Computer Science',
            startingYear: '2020',
            passingYear: '2023',
            resultType: 'percentage', // percentage, CGPA
            result: '80.5',
        },
        {
            id: '2',
            collegeName: 'Gocher Krishi Inter College',
            courceName: 'BA',
            universityName: 'CCS University',
            branch: 'IT',
            startingYear: '2018',
            passingYear: '2022',
            resultType: 'CGPA', // percentage, CGPA
            result: '90.5',
        },
        {
            id: '3',
            collegeName: 'Krishna Institute Of Education & Management',
            courceName: 'MCA',
            universityName: 'CCS University',
            branch: 'Computer Science',
            startingYear: '2023',
            passingYear: '2025',
            resultType: 'percentage', // percentage, CGPA
            result: '85.5',
        },
    ],
    address: {
        city: 'Saharanpur',
        state: 'Uttar Pradesh',
        country: 'India',
        zipCode: '247451',
    },
    userDto: {
        email: 'shivamsaini3209@gmail.com',
        createdAt: '2025-07-22',
        updatedAt: '2025-07-02',
        enabled: true,
    },
};

const StudentProfilePage = () => {

    const [activeTab, setActiveTab] = useState('profile');
    const [formData, setFormData] = useState({});
    const [formDataErrors, setformDataErrors] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const [backupProfile, setBackupProfile] = useState(null);

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'education', label: 'Education & Skills', icon: GraduationCap },
        { id: 'resume', label: 'Resume', icon: File },
    ];

    useEffect(() => {
        async function fetchData() {
            setFormData(await getStudentProfile());
        }
        fetchData();
    }, [])

    console.log(formData)

    // Handle input changes
    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error message.
        if (formDataErrors[field]) {
            setformDataErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    // Handle address changes
    const handleAddressChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                [field]: value,
            },
        }));
        // Clear error message.
        if (formDataErrors.address && formDataErrors.address[field]) {
            setformDataErrors(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [field]: '',
                }
            }));
        }
    };

    // Handle education changes
    const handleSaveEducationChange = async (educationData) => {
        const updatedEducation = await addUserEducatoin(educationData)
        setFormData((prevData) => ({
            ...prevData,
            education: updatedEducation,
        }));
    };

    const handleDeleteEducationChange = async (educationData) => {
        const updatedEducation = await removeUserEducation(educationData);
        setFormData((prevData) => ({
            ...prevData,
            education: updatedEducation,
        }));
    };

    const handleUpdateEducationChange = async (educationData) => {
        const updatedEducation = await updateUserEducation(educationData);
        setFormData((prevData) => ({
            ...prevData,
            education: updatedEducation,
        }));
    };

    // Handle skills add
    const addNewSkill = async (newSkill) => {
        const updatedSkills = await addUserSkill(newSkill);
        setFormData(prev => ({
            ...prev,
            skills: updatedSkills,
        }));
    };

    // Handle skills remove
    const removeSkill = async (skill) => {
        const UpdatedSkills = await removeUserSkill(skill);
        setFormData(prev => ({
            ...prev,
            skills: UpdatedSkills,
        }));
    };

    // Update Student profile 
    const handleSaveProfile = async () => {
        setIsEditing(false);
        setFormData(await updateStudentProfile(formData));
    }

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
                            className='flex flex-col gap-2'
                        >
                            {/* Edit profile buttons */}
                            <div className='flex gap-3 ms-auto'>
                                {
                                    !isEditing ?
                                        <Button
                                            className={'cursor-pointer'}
                                            onClick={() => {
                                                setIsEditing(!isEditing)
                                                setBackupProfile(formData);
                                            }}
                                        >
                                            <EditIcon />
                                            Edit profile
                                        </Button>
                                        :
                                        <div className='flex gap-3'>
                                            {/* Cancel button */}
                                            <Button
                                                className={'cursor-pointer hover:bg-red-700'}
                                                variant={'destructive'}
                                                onClick={() => {
                                                    setIsEditing(!isEditing)
                                                    setFormData(backupProfile);
                                                }}
                                            >
                                                <X />
                                                Cancel
                                            </Button>
                                            {/* Save Button */}
                                            <Button
                                                className={'cursor-pointer bg-green-700 text-white hover:bg-green-800'}
                                                variant={'default'}
                                                onClick={handleSaveProfile}
                                            >
                                                <Save />
                                                Save
                                            </Button>
                                        </div>
                                }
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 w-full">
                                {/* Enhanced Profile Sidebar */}
                                <div className={'min-w-sm'}>
                                    <ProfileSection formData={formData} />
                                </div>

                                {/* Enhanced Main Content */}
                                <div className={'gap-5 grid grid-cols-1 w-full'}>
                                    <PersonalInformation
                                        formData={formData}
                                        handleFormDataChange={handleFormDataChange}
                                        formDataErrors={formDataErrors}
                                        isEditing={isEditing}
                                    />

                                    <AddressCard
                                        formData={formData}
                                        handleAddressChange={handleAddressChange}
                                        formDataErrors={formDataErrors}
                                        isEditing={isEditing}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Education Tab */}
                    {activeTab === 'education' && (
                        <motion.div
                            key="education"
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className='flex flex-col gap-6'
                        >
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
                                    <GraduationCap className="text-blue-600" size={40} />
                                    Educations & Skills
                                </h1>
                                <p className="text-gray-600">Academic achievements and qualifications</p>
                            </div>
                            <SkillsCard
                                formData={formData}
                                addNewSkill={addNewSkill}
                                removeSkill={removeSkill}
                                formDataErrors={formDataErrors}
                                setformDataErrors={setformDataErrors}
                            />

                            <EducationCard
                                formData={formData}
                                handleSaveEducationChange={handleSaveEducationChange}
                                handleDeleteEducationChange={handleDeleteEducationChange}
                                handleUpdateEducationChange={handleUpdateEducationChange}
                                formDataErrors={formDataErrors}
                            />

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
            </div>
        </div>
    );
};

export default StudentProfilePage;