import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Select as MUISelect, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Box, Chip } from '@mui/material';
import { CheckBox } from '@mui/icons-material';

const ProfessionalDetailsCard = ({ formData, handleInputChange, handleSelectChange, isEditing, handleMultiSelectChange }) => {

    const teacherDesignations = [
        "Instructor",
        "Lecturer",
        "Assistant Professor",
        "Associate Professor",
        "Professor",
        "Subject Matter Expert",
        "Visiting Faculty",
        "Adjunct Instructor",
        "Course Creator",
        "Online Tutor"
    ];

    const highestQualifications = [
        // Diplomas & Certifications
        "Diploma (Engineering/Technical/Polytechnic)",
        "Advanced Diploma",
        "Professional Certification (e.g., CA, CS, CFA, PMP)",
        "Vocational Training Certificate",

        // Undergraduate Degrees
        "Bachelor of Arts (BA)",
        "Bachelor of Science (B.Sc)",
        "Bachelor of Commerce (B.Com)",
        "Bachelor of Business Administration (BBA)",
        "Bachelor of Computer Applications (BCA)",
        "Bachelor of Technology (B.Tech)",
        "Bachelor of Education (B.Ed)",

        // Postgraduate Degrees
        "Master of Arts (MA)",
        "Master of Science (M.Sc)",
        "Master of Commerce (M.Com)",
        "Master of Business Administration (MBA)",
        "Master of Computer Applications (MCA)",
        "Master of Technology (M.Tech)",
        "Master of Education (M.Ed)",

        // Research & Doctorate
        "Master of Philosophy (M.Phil.)",
        "Doctor of Philosophy (Ph.D.)",
        "Doctor of Education (Ed.D)",
        "Postdoctoral Research",

        // Competitive/Qualification Exams
        "NET (National Eligibility Test) Qualified",
        "SET (State Eligibility Test) Qualified",
        "GATE Qualified",
        "UPSC Qualified",

        // Medical & Legal
        "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        "Doctor of Medicine (MD)",
        "Bachelor of Laws (LLB)",
        "Master of Laws (LLM)",

        // Miscellaneous
        "Currently Pursuing",
        "Other"
    ];

    const teacherSpecializations = [
        "JavaScript",
        "React",
        "Node.js",
        "Machine Learning",
        "Data Structures",
        "Python",
        "Java",
        "C++",
        "C",
        "C#",
        "PHP",
        "SQL",
        "NoSQL",
        "MongoDB",
        "MySQL",

        // Core Academic Subjects
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "History",
        "Geography",
        "Political Science",
        "Economics",
        "Sociology",
        "Psychology",

        // Computer & IT
        "Computer Science",
        "Information Technology",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Cyber Security",
        "Web Development",
        "Software Engineering",

        // Engineering & Technical
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Robotics",

        // Commerce & Business
        "Business Studies",
        "Finance",
        "Marketing",
        "Human Resource Management",

        // Vocational & Others
        "Fashion Designing",
        "Graphic Design",
        "Photography",
    ];

    const languagesKnown = [
        "English",
        "Spanish",
        "French",
        "German",
        "Hindi",
    ];

    const modeOfTeaching = [
        "Online",
        "Offline",
        "Hybrid",
    ];

    const preferredStudentLevel = [
        "School",
        "College",
        "Working Professionals",
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Professional Details</CardTitle>
                <CardDescription>Qualifications and experience information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Designation */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="designation">Designation / Role <span className='text-red-500'>*</span></Label>
                        <Select
                            id="designation"
                            name="designation"
                            value={formData.designation ?? ''}
                            onValueChange={(value) => handleSelectChange("designation", value)}
                            disabled={!isEditing}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Designation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Designation</SelectLabel>
                                    {teacherDesignations.map((designation) => (
                                        <SelectItem key={designation} value={designation}>{designation}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Teaching Experience */}
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="yearOfExperience">Teaching Experience (Years) <span className='text-red-500'>*</span></Label>
                        <Input
                            id="yearOfExperience"
                            name="yearOfExperience"
                            type="number"
                            placeholder="Enter experience"
                            value={formData.yearOfExperience ?? ''}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                {/* Highest Qualification */}
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="highestQualification">Highest Qualification <span className='text-red-500'>*</span></Label>
                    <Select
                        id="highestQualification"
                        name="highestQualification"
                        value={formData.highestQualification ?? ''}
                        onValueChange={(value) => handleSelectChange("highestQualification", value)}
                        disabled={!isEditing}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Highest Qualification" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Qualification</SelectLabel>
                                {highestQualifications.map((qualification) => (
                                    <SelectItem key={qualification} value={qualification}>{qualification}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Specializations */}
                <div>
                    <FormControl className='w-full'>
                        <InputLabel id="specializations-checkbox-label" className='text-sm'>Specializations</InputLabel>
                        <MUISelect
                            labelId="specializations-checkbox-label"
                            id="specializations-checkbox"
                            name='specializations'
                            multiple
                            value={formData.specializations}
                            onChange={handleInputChange}
                            input={<OutlinedInput label="Specializations" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            disabled={!isEditing}
                        >
                            {teacherSpecializations.map((specialization, index) => (
                                <MenuItem key={index} value={specialization}>
                                    <Checkbox
                                        checked={formData?.specializations?.indexOf(specialization) > -1}
                                        className='mr-2'
                                    />
                                    <ListItemText primary={specialization} />
                                </MenuItem>
                            ))}
                        </MUISelect>
                    </FormControl>
                </div>

                {/* Languages Known */}
                <div>
                    <FormControl className='w-full'>
                        <InputLabel id="language-known-checkbox-label" className='text-sm'>Language Known</InputLabel>
                        <MUISelect
                            labelId="language-known-checkbox-label"
                            id="language-known-checkbox"
                            name="languagesKnown"
                            multiple
                            value={formData.languagesKnown}
                            onChange={handleInputChange}
                            input={<OutlinedInput label="Language Known" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            disabled={!isEditing}
                        >
                            {languagesKnown.map((language, index) => (
                                <MenuItem key={index} value={language}>
                                    <Checkbox
                                        checked={formData?.languagesKnown?.indexOf(language) > -1}
                                        className='mr-2'
                                    />
                                    <ListItemText primary={language} />
                                </MenuItem>
                            ))}
                        </MUISelect>
                    </FormControl>
                </div>

                {/* Mode of Teaching */}
                <div className='flex flex-col gap-2'>
                    <Label>Mode of Teaching <span className='text-red-500'>*</span></Label>
                    <div className="ms-10 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {modeOfTeaching.map((mode) => (
                            <div key={mode} className="flex items-center space-x-2">
                                <Checkbox
                                    id={mode}
                                    name="modeOfTeaching"
                                    value={mode}
                                    checked={formData?.modeOfTeaching?.includes(mode)}
                                    onCheckedChange={(checked) => handleMultiSelectChange("modeOfTeaching", mode, checked)}
                                    disabled={!isEditing}
                                />
                                <Label htmlFor={mode} className="text-sm">{mode}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preferred Student Level */}
                <div className='flex flex-col gap-2'>
                    <Label>Preferred Student Level <span className='text-red-500'>*</span></Label>
                    <div className="ms-10 grid grid-cols-2 md:grid-cols-4 gap-2">
                        {preferredStudentLevel.map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                                <Checkbox
                                    id={level}
                                    name="preferredStudentLevel"
                                    checked={formData?.preferredStudentLevel?.includes(level)}
                                    onCheckedChange={(checked) => handleMultiSelectChange('preferredStudentLevel', level, checked)}
                                    disabled={!isEditing}
                                />
                                <Label htmlFor={level} className="text-sm">{level}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfessionalDetailsCard
