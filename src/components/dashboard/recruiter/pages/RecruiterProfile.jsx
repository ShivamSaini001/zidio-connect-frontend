import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Edit, Phone, User } from 'lucide-react';
import React, { useState } from 'react'
import AddressCard from '../../common-components/AddressCard';
import PersonalInformation from '../customComponents/profile/PersonalInformation';
import CompanyInformation from '../customComponents/profile/CompanyInformation';

const RecruiterProfile = () => {
    const [formData, setFormData] = useState({
        fullName: 'Shivam saini',
        companyName: 'TechCorp Solutions',
        designation: 'Senior Technical Recruiter',
        workEmail: 'sarah.johnson@techcorp.com',
        phoneNumber: '+1 (555) 123-4567',
        linkedinUrl: 'https://linkedin.com/in/sarah-johnson',
        companyWebsite: 'https://techcorp.com',
        bio: 'Experienced technical recruiter with 8+ years in connecting top talent with innovative companies. Specialized in full-stack development, DevOps, and data science roles.',
        status: 'Verified',
        totalJobsPosted: 42,
        totalInternshipsPosted: 15
    });

    const [profileImage, setProfileImage] = useState('');

    const recruiterDesignations = {
        "Entry-Level Roles": [
            { label: "Talent Acquisition Associate", value: "talent_acquisition_associate" },
            { label: "HR Intern", value: "hr_intern" },
            { label: "Junior Recruiter", value: "junior_recruiter" },
            { label: "Recruitment Trainee", value: "recruitment_trainee" },
            { label: "Sourcing Specialist", value: "sourcing_specialist" }
        ],
        "Mid-Level Roles": [
            { label: "Talent Acquisition Executive", value: "talent_acquisition_executive" },
            { label: "Technical Recruiter", value: "technical_recruiter" },
            { label: "Non-Technical Recruiter", value: "non_technical_recruiter" },
            { label: "Recruitment Consultant", value: "recruitment_consultant" },
            { label: "Campus Recruiter", value: "campus_recruiter" },
            { label: "HR Executive", value: "hr_executive" },
            { label: "Staffing Specialist", value: "staffing_specialist" }
        ],
        "Senior-Level Roles": [
            { label: "Senior Recruiter", value: "senior_recruiter" },
            { label: "Talent Acquisition Lead", value: "talent_acquisition_lead" },
            { label: "Senior Technical Recruiter", value: "senior_technical_recruiter" },
            { label: "Recruitment Manager", value: "recruitment_manager" },
            { label: "HR Manager", value: "hr_manager" },
            { label: "Hiring Manager", value: "hiring_manager" }
        ],
        "Leadership Roles": [
            { label: "Head of Talent Acquisition", value: "head_of_talent_acquisition" },
            { label: "Recruitment Head", value: "recruitment_head" },
            { label: "HR Business Partner", value: "hr_business_partner" },
            { label: "VP of Talent", value: "vp_of_talent" },
            { label: "Director of HR", value: "director_of_hr" },
            { label: "Chief Human Resources Officer (CHRO)", value: "chro" }
        ]
    };

    const handleImageUpload = (type) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (type === 'profile') {
                        setProfileImage(e.target.result);
                    } else {
                        setCompanyLogo(e.target.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Manage your profile and company information</p>
                </div>

                <section className='flex flex-col gap-5'>
                    {/* Profile Image update Overview Card */}
                    <Card className="text-center p-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                        <CardContent className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative">
                            {/* Profile Image positioned absolutely */}
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                                <div className="relative">
                                    {profileImage && (<img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-32 h-32 rounded-full border-2 border-gray-200 dark:border-gray-800 bg-white object-cover"
                                    />)}
                                    {!profileImage && (
                                        <User className='w-32 h-32 rounded-full border-2 border-gray-200 bg-white p-7' />
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => handleImageUpload('profile')}
                                        className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors"
                                    >
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </CardContent>

                        {/* Profile Info with proper spacing */}
                        <div className="pt-11 px-6 pb-6">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{formData.fullName}</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300">{formData.workEmail}</p>
                                    <p className="text-gray-500 dark:text-gray-400">{formData.bio}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Personal Information card */}
                    <PersonalInformation formData={formData} setFormData={setFormData} recruiterDesignations={recruiterDesignations} />

                    {/* Address card */}
                    <AddressCard />

                    {/* Company Information card */}
                    <CompanyInformation formData={formData} setFormData={setFormData} recruiterDesignations={recruiterDesignations}/>
                </section>
            </div >
        </div >
    )
}

export default RecruiterProfile
