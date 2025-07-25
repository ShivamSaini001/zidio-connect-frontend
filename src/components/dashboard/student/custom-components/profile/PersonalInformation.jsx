import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import InputField from '@/components/dashboard/common-components/input/InputField';
import SelectField from '@/components/dashboard/common-components/input/SelectField';
import TextareaField from '@/components/dashboard/common-components/input/TextareaField';


const PersonalInformation = (
    {
        formData,
        handleFormDataChange,
        formDataErrors,
        isEditing,
        className,
    }
) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={className}
        >
            <Card className="p-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Personal Information
                        </h2>
                    </div>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                    {/* Bio Section */}
                    <TextareaField
                        label={"About Me"}
                        value={formData?.bio || ''}
                        onChange={(e) => handleFormDataChange('bio', e.target.value)}
                        placeholder={"Tell the world about yourself..."}
                        name="bio"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.bio}
                        rows={4}
                    />

                    {/* tagline */}
                    <InputField
                        label={"Tagline"}
                        value={formData?.tagline || ''}
                        onChange={(e) => handleFormDataChange('tagline', e.target.value)}
                        placeholder={"Enter Tagline"}
                        name="tagline"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.tagline}
                    />

                    {/* Form Fields */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* First Name Field */}
                        <InputField
                            label={"First Name"}
                            value={formData?.firstName || ''}
                            onChange={(e) => handleFormDataChange('firstName', e.target.value)}
                            placeholder={"Enter First Name"}
                            name="firstName"
                            isRequired={true}
                            isEditing={isEditing}
                            error={formDataErrors.firstName}
                        />

                        {/* Last Name Field */}
                        <InputField
                            label={"Last Name"}
                            value={formData?.lastName || ''}
                            onChange={(e) => handleFormDataChange('lastName', e.target.value)}
                            placeholder={"Enter Last Name"}
                            name="lastName"
                            isRequired={true}
                            isEditing={isEditing}
                            error={formDataErrors.lastName}
                        />

                        {/* Phone Field */}
                        <InputField
                            label={"Mobile"}
                            value={formData?.mobile || ''}
                            type={'tel'}
                            onChange={(e) => handleFormDataChange('mobile', e.target.value)}
                            placeholder={"Enter Mobile number"}
                            name="mobile"
                            isRequired={true}
                            isEditing={isEditing}
                            error={formDataErrors.mobile}
                        />

                        {/* DOB field */}
                        <InputField
                            label={"Date of Birth"}
                            value={formData?.dateOfBirth || ''}
                            type='date'
                            onChange={(e) => handleFormDataChange('dateOfBirth', e.target.value)}
                            name="dateOfBirth"
                            isRequired={true}
                            isEditing={isEditing}
                            error={formDataErrors.dateOfBirth}
                        />

                        {/* LinkedIn url */}
                        <InputField
                            label={"Linkedin Url"}
                            value={formData?.linkedInUrl || ''}
                            onChange={(e) => handleFormDataChange('linkedInUrl', e.target.value)}
                            placeholder={"Enter here"}
                            name="linkedInUrl"
                            isRequired={false}
                            isEditing={isEditing}
                            error={formDataErrors.linkedInUrl}
                        />

                        {/* Github url */}
                        <InputField
                            label={"Github Url"}
                            value={formData?.githubUrl || ''}
                            type='text'
                            onChange={(e) => handleFormDataChange('githubUrl', e.target.value)}
                            placeholder={"Enter here"}
                            name="githubUrl"
                            isRequired={false}
                            isEditing={isEditing}
                            error={formDataErrors.githubUrl}
                        />
                    </div>
                    <div>
                        {/* Gender field */}
                        <SelectField
                            label={"Gender"}
                            value={formData?.gender || ''}
                            name="gender"
                            onValueChange={(value) => handleFormDataChange('gender', value)}
                            placeholder={"Please Select..."}
                            options={[
                                {
                                    label: 'Male',
                                    value: 'male',
                                },
                                {
                                    label: 'Female',
                                    value: 'female',
                                },
                                {
                                    label: 'Other',
                                    value: 'other',
                                },
                            ]}
                            isEditing={isEditing}
                            isRequired={true}
                            error={formDataErrors.gender}
                        />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default PersonalInformation;
