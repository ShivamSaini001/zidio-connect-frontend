import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MapPin, User, Camera } from 'lucide-react';
import { Mail, Phone } from '@mui/icons-material';

const ProfileImage = ({ profile, className }) => {
    const [profileImage, setProfileImage] = useState(null);

    // Handle profile image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={className}
        >
            <div className={'rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 sticky top-6 bg-white/75 border border-gray-200/50'
                + ' dark:bg-gray-800/90 dark:border dark:border-gray-700/50'}>
                {/* Profile Picture with Status */}
                <div className="text-center mb-6 md:mb-8">
                    {/* Profile Image */}
                    <div className="relative inline-block">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mx-auto">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <User className="w-12 h-12 md:w-16 md:h-16 text-gray-400" />
                                </div>
                            )}
                        </div>
                        <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-1.5 md:p-2 rounded-full cursor-pointer transition-colors">
                            <Camera className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                    </div>

                    <h2 className={'text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-1 md:mb-2 dark:text-white text-gray-900'}>
                        {profile.name}
                    </h2>
                    <p className={'text-base md:text-lg font-medium mb-1 dark:text-purple-400 text-blue-600'}>
                        {profile.title}
                    </p>
                    <p className={'text-xs md:text-sm dark:text-gray-400 text-gray-600'}>
                        Member since {profile.joinDate}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className={'text-center p-4 rounded-2xl'
                            + ' dark:bg-gray-700/50 dark:border dark:border-gray-600/30'
                            + ' bg-gray-100 border border-gray-200/50'}>
                            <div className={'text-2xl font-bold dark:text-white text-gray-900'}>
                                {value}
                            </div>
                            <div className={'text-xs capitalize dark:text-gray-400 text-gray-600'}>
                                {key}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3 md:space-y-4">
                    <div className={'flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl'
                        + ' dark:bg-gray-700/30 dark:text-gray-300'
                        + ' bg-gray-100 text-gray-700'
                    }>
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                        <span className="text-xs md:text-sm font-medium truncate">{profile.email}</span>
                    </div>
                    <div className={'flex items-center gap-4 p-4 rounded-2xl'
                        + ' dark:bg-gray-700/30 dark:text-gray-300'
                        + ' bg-gray-100 text-gray-700'}>
                        <Phone className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium">{profile.phone}</span>
                    </div>
                    <div className={'flex items-center gap-4 p-4 rounded-2xl'
                        + ' dark:bg-gray-700/30 dark:text-gray-300'
                        + ' bg-gray-100 text-gray-700'}>
                        <MapPin className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium">{profile.location}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileImage;
