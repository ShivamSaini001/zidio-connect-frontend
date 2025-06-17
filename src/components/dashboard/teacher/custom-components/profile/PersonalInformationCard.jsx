import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, PhoneIcon, User } from 'lucide-react'

const PersonalInformationCard = ({ formData, handleInputChange, isEditing }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Basic details visible to admin and optionally to students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <div className='relative'>
                            <Input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                className="pl-8"
                                disabled={!isEditing}
                            />
                            <User className='absolute size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500' />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <div className='relative'>
                            <Input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                className="pl-8"
                                disabled={!isEditing}
                            />
                            <User className='absolute size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500' />
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <div className='relative'>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="pl-8"
                                disabled={!isEditing}
                            />
                            <Mail className='absolute size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500' />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <div className='relative'>
                            <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="pl-8"
                                disabled={!isEditing}
                            />
                            <PhoneIcon className='absolute size-5 left-2 top-1/2 -translate-y-1/2 text-gray-500' />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)} disabled={!isEditing}>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Date of Birth */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
                        <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            disabled={!isEditing}
                        />
                    </div>

                    {/* Country */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                        <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                            disabled={!isEditing}
                        />
                    </div>

                </div>

                {/* Bio */}
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="bio">Bio <span className="text-red-500">*</span></Label>
                    <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        placeholder="300–500 characters introduction"
                        rows={4}
                        disabled={!isEditing}
                    />
                    <p className="text-sm text-gray-500 mt-1">{formData.bio.length} characters</p>
                </div>

                {/* LinkedIn Profile */}
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
                    <Input
                        id="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        disabled={!isEditing}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

export default PersonalInformationCard
