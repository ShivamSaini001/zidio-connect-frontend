import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Phone } from '@mui/icons-material'
import { Edit, User } from 'lucide-react'
import React from 'react'

const PersonalInformation = ({ formData, handleFormDataChange, recruiterDesignations }) => {
    return (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardHeader>
                <div className='flex justify-between'>
                    <p className='scroll-m-20 text-3xl font-semibold tracking-tight'>Personal Information</p>
                    <Button variant="outline">
                        <Edit />
                        edit
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    {/* BIO */}
                    <div className='space-y-2'>
                        <Label htmlFor='bio'>Bio/About <span className='text-red-500'>*</span> </Label>
                        <Textarea
                            type='text'
                            id="bio"
                            value={formData.bio}
                            onChange={(e) => {
                                if (e.target.value.length <= 500) {
                                    handleFormDataChange("bio", e.target.value);
                                }
                            }}
                            name="bio"
                            placeholder='Enter your bio'
                        />
                        <p className='text-sm text-gray-500'>
                            <span>{formData.bio.length}</span>/
                            500 Characters
                        </p>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        {/* First Name */}
                        <div className='space-y-2'>
                            <Label htmlFor='firstName'>First name <span className='text-red-500'>*</span> </Label>
                            <div className='relative'>
                                <Input
                                    type='text'
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleFormDataChange("firstName", e.target.value)}
                                    className='pl-9'
                                    placeholder='First name'
                                />
                                <User className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className='space-y-2'>
                            <Label htmlFor='lastName'>Last name <span className='text-red-500'>*</span> </Label>
                            <div className='relative'>
                                <Input
                                    type='text'
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleFormDataChange("lastName", e.target.value)}
                                    className='pl-9'
                                    placeholder='Last name'
                                />
                                <User className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div className='space-y-2'>
                        <Label htmlFor='mobileNumber'>Mobile <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='number'
                                id="mobileNumber"
                                name="mobile"
                                value={formData.mobile}
                                onChange={(e) => handleFormDataChange("mobile", e.target.value)}
                                className='pl-9'
                                placeholder='Enter your mobile number'
                            />
                            <Phone className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>

                        {/* Date of Birth */}
                        <div className='space-y-2'>
                            <Label htmlFor='dateOfBirth'>Date of Birth <span className='text-red-500'>*</span> </Label>
                            <Input
                                type='date'
                                id='dateOfBirth'
                                name='dateOfBirth'
                                value={formData.dateOfBirth}
                                onChange={(e) => handleFormDataChange("dateOfBirth", e.target.value)}
                                placeholder='Enter your date of birth'
                                className='w-auto'
                            />
                        </div>


                        {/* Gender */}
                        <div className='space-y-2'>
                            <Label htmlFor='gender'>Gender <span className='text-red-500'>*</span> </Label>
                            <Select
                                id='gender'
                                name='gender'
                                value={formData.gender}
                                onValueChange={(value) => handleFormDataChange("gender", value)}
                            >
                                <SelectTrigger className="w-[163px]">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Gender</SelectLabel>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* designation */}
                        <div className='space-y-2'>
                            <Label htmlFor='designation'>Designation <span className='text-red-500'>*</span> </Label>
                            <Select
                                id='designation'
                                name='designation'
                                value={formData.designation}
                                onValueChange={(value) => handleFormDataChange("designation", value)}
                            >
                                <SelectTrigger className="w-[163px]">
                                    <SelectValue placeholder="Select Desigination" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        Object.entries(recruiterDesignations).map(([group, roles]) => (
                                            <SelectGroup key={group}>
                                                <SelectLabel>{group}</SelectLabel>
                                                {
                                                    roles.map((role) => (
                                                        <SelectItem key={role.value} value={role.value}>{role.label}</SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        ))
                                    }

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PersonalInformation
