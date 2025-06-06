import { AlertCircle, Save, Edit, Phone, CalendarIcon } from 'lucide-react';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

// Import shadcn UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const PersonalInformation = ({ profile, setProfile, className, setShowToast, setToastMessage, handleInputChange, errors }) => {
    const [isEditing, setIsEditing] = useState(false);

    // Handle profile update
    const handleProfileUpdate = () => {
        if (validateProfile()) {
            setIsEditing(false);
            setToastMessage('Profile updated successfully!');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={className}
        >
            <Card className="p-6">
                <CardContent className="p-0 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                Personal Information
                            </h2>
                        </div>
                        {/* Action Buttons */}
                        {isEditing ? (
                            <Button
                                onClick={handleProfileUpdate}
                                size="lg"
                                className="gap-2"
                            >
                                <Save className="w-5 h-5" />
                                Save Changes
                            </Button>
                        ) : (
                            <Button
                                onClick={() => setIsEditing(true)}
                                variant="outline"
                                size="lg"
                                className="gap-2"
                            >
                                <Edit className="w-5 h-5" />
                                Edit Profile
                            </Button>
                        )}
                    </div>

                    {/* Bio Section */}
                    <div className="space-y-3">
                        <Label htmlFor="bio" className="scroll-m-20 text-xl font-semibold tracking-tight">
                            About Me
                        </Label>
                        <Textarea
                            id="bio"
                            value={profile.bio}
                            onChange={(e) => handleInputChange('bio', e.target.value)}
                            disabled={!isEditing}
                            rows={4}
                            placeholder="Tell the world about yourself..."
                            className="resize-none text-base"
                        />
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* First Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="firstName" className={'scroll-m-20 font-semibold tracking-tight'}>
                                First Name
                            </Label>
                            <div>
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={profile.firstName}
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    disabled={!isEditing}
                                    aria-invalid={errors.firstName ? "true" : "false"}
                                />
                                {errors.firstName && (
                                    <Alert variant="destructive" className="mt-2 py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.firstName}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        {/* Last Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="lastName" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Last Name
                            </Label>
                            <div>
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={profile.lastName}
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    disabled={!isEditing}
                                    aria-invalid={errors.lastName ? "true" : "false"}
                                />
                                {errors.lastName && (
                                    <Alert variant="destructive" className="mt-2 py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.lastName}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <Label htmlFor="phone" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Phone Number
                            </Label>
                            <div className="relative">
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={profile.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    disabled={!isEditing}
                                    className="pl-10"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                </div>
                                {errors.phone && (
                                    <Alert variant="destructive" className="mt-2 py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.phone}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        {/* Gender field */}
                        <div className="space-y-2">
                            <Label htmlFor="gender" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Gender
                            </Label>
                            <Select
                                id="gender"
                                value={profile.gender}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                disabled={!isEditing}
                                className="w-full border border-muted-foreground rounded-md px-4 py-2 text-base"
                                aria-invalid={errors.gender ? "true" : "false"}
                            >
                                <SelectTrigger className="w-[180px] md:w-auto lg:w-[180px]">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.gender && (
                                <Alert variant="destructive" className="mt-2 py-2">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{errors.gender}</AlertDescription>
                                </Alert>
                            )}
                        </div>

                        {/* LinkedIn url */}
                        <div className="space-y-2">
                            <Label htmlFor="linkedinUrl" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Linkedin Url
                            </Label>
                            <div>
                                <Input
                                    id="linkedinUrl"
                                    type="text"
                                    placeholder="Enter here"
                                    value={profile.linkedinUrl}
                                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                                    disabled={!isEditing}
                                    aria-invalid={errors.linkedinUrl ? "true" : "false"}
                                />
                                {errors.linkedinUrl && (
                                    <Alert variant="destructive" className="mt-2 py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.linkedinUrl}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        {/* DOB field */}
                        <div className="space-y-2">
                            <Label htmlFor="dob" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Date of Birth
                            </Label>
                            <div className="relative">
                                <Input
                                    id="dob"
                                    type="date"
                                    name="dateOfBirth"
                                    value={profile.dateOfBirth}
                                    onChange={(e) => console.log(e.target.value)}
                                    disabled={!isEditing}
                                    className="w-auto"
                                    aria-invalid={errors.dateOfBirth ? "true" : "false"}
                                />
                            </div>
                        </div>

                        {/* Github url */}
                        <div className="space-y-2">
                            <Label htmlFor="githubUrl" className={'scroll-m-20 font-semibold tracking-tight'}>
                                Github Url
                            </Label>
                            <div>
                                <Input
                                    id="githubUrl"
                                    type="text"
                                    placeholder="Enter here"
                                    value={profile.githubUrl}
                                    onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                                    disabled={!isEditing}
                                    aria-invalid={errors.githubUrl ? "true" : "false"}
                                />
                                {errors.githubUrl && (
                                    <Alert variant="destructive" className="mt-2 py-2">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{errors.githubUrl}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default PersonalInformation;
