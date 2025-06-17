
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Building, Calendar, Camera, CircleCheck, Mail } from 'lucide-react'
import React, { useState } from 'react'

const AdminProfile = () => {

    const [profileImage, setProfileImage] = useState("https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "Shivam",
        lastName: "saini",
        email: "john.doe@example.com",
        phone: "1234567890",
        designation: 'Administrator',
        department: 'Information Technology',
        bio: 'Experienced system administrator with 8+ years managing educational platforms. Specialized in user management, security protocols, and system optimization.',
        joinDate: '2019-03-15',
        status: true,
    })

    const designations = ['Administrator', 'Senior Administrator', 'System Administrator', 'Super Administrator'];
    const departments = ['Information Technology', 'Human Resources', 'Marketing', 'Sales', 'Customer Service', 'Finance', 'Legal', 'Research and Development', 'Product Management', 'Quality Assurance', 'Support', 'Training and Development', 'Other'];

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0]
        if (file.size > 5 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, image: 'Image size should be less than 5MB' }));
            return;
        }

        if (!file.type.startsWith('image/')) {
            setErrors(prev => ({ ...prev, image: 'Please select a valid image file' }));
            return;
        }
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    }

    console.log(formData);


    return (
        <>
            {/* Profile Card */}
            <Card className='mx-5'>
                <CardHeader>
                    <CardTitle>
                        <h1 className='text-2xl font-bold'>Admin Profile</h1>
                        <p className='text-sm text-muted-foreground'>Manage your profile information and settings</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='flex gap-10'>
                        {/* Profile Image */}
                        <div className='flex flex-col gap-4'>
                            <div className='relative w-32 h-32'>
                                <img
                                    src={profileImage}
                                    alt="Admin Profile"
                                    className='w-full h-full rounded-full border-2'
                                />
                                <Camera
                                    className='absolute size-8 bottom-0 right-4 border-2 bg-white rounded-full p-1 z-10 cursor-pointer'
                                    onClick={() => {
                                        document.getElementById('profile-image-input').click()
                                    }}
                                />
                                <Input
                                    type='file'
                                    className='hidden'
                                    id='profile-image-input'
                                    accept='image/*'
                                    onChange={handleProfileImageChange}
                                />
                            </div>
                        </div>

                        {/* Profile Informatio  */}
                        <div className='grid grid-cols-1 gap-2 '>
                            <p className='text-2xl font-bold'>{formData.firstName + " " + formData.lastName}</p>
                            <p className='text-sm text-muted-foreground flex gap-2 items-center'>
                                <Mail className='size-4' />
                                {formData.email}
                            </p>
                            <p className='text-sm text-muted-foreground flex gap-2 items-center'>
                                <Building className='size-4' />
                                {formData.designation}
                            </p>
                            <p className='text-sm text-muted-foreground flex gap-2 items-center'>
                                <Calendar className='size-4' />
                                {formData.joinDate}
                            </p>
                            <p className='text-sm text-muted-foreground flex gap-2 items-center'>
                                {formData.status ? <Badge variant="outline">Active</Badge> : <Badge variant="destructive">Inactive</Badge>}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Profile Information */}
            <Card className='mx-5 mt-5'>
                <CardHeader>
                    <CardTitle>
                        <h1 className='text-2xl font-bold'>Profile Information</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        {/* First Name */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='firstName'>First Name</Label>
                            <Input
                                type='text'
                                id='firstName'
                                name='firstName'
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        {/* Last Name */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='lastName'>Last Name</Label>
                            <Input
                                type='text'
                                name='lastName'
                                id='lastName'
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                type='tel'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {/* Phone */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='phone'>Phone</Label>
                            <Input
                                type='phone'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        {/* Designation */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='designation'>Designation</Label>
                            <Select
                                id='designation'
                                name='designation'
                                value={formData.designation}
                                onValueChange={(value) => setFormData({ ...formData, designation: value })}
                            >
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select a designation' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a designation</SelectLabel>
                                        {designations.map((designation) => (
                                            <SelectItem key={designation} value={designation}>{designation}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Department */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='department'>Department</Label>
                            <Select
                                id='department'
                                name='department'
                                value={formData.department}
                                onValueChange={(value) => setFormData({ ...formData, department: value })}
                            >
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select a department' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a department</SelectLabel>
                                        {departments.map((department) => (
                                            <SelectItem key={department} value={department}>{department}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className='flex flex-col gap-2 mt-5'>
                        <Label htmlFor="bio">Bio <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="bio"
                            name='bio'
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            placeholder="300–500 characters introduction"
                            rows={4}
                        />
                        <p className="text-sm text-gray-500 mt-1">{formData.bio.length} characters</p>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default AdminProfile
