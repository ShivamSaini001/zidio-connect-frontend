import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const EducationCard = () => {

    const graduationYearOptions = [
        { value: 'before2005', label: 'Before 2005' },
        { value: '2005', label: '2005' },
        { value: '2006', label: '2006' },
        { value: '2007', label: '2007' },
        { value: '2008', label: '2008' },
        { value: '2009', label: '2009' },
        { value: '2010', label: '2010' },
        { value: '2011', label: '2011' },
        { value: '2012', label: '2012' },
        { value: '2013', label: '2013' },
        { value: '2014', label: '2014' },
        { value: '2015', label: '2015' },
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
        { value: '2020', label: '2020' },
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
        { value: '2026', label: '2026' },
        { value: '2027', label: '2027' },
        { value: '2028', label: '2028' },
        { value: '2029', label: '2029' },
        { value: '2030', label: '2030' },
        { value: '2031', label: '2031' },
    ]

    const degreeOptions = [
        { value: 'BTech./BE', label: 'BTech./BE' },
        { value: 'MTech./ME', label: 'MTech./ME' },
        { value: 'BCA', label: 'BCA' },
        { value: 'MCA', label: 'MCA' },
        { value: 'BCS', label: 'BCS' },
        { value: 'MCS', label: 'MCS' },
        { value: 'BBA', label: 'BBA' },
        { value: 'MBA', label: 'MBA' },
        { value: 'BSC', label: 'BSC' },
        { value: 'MSC', label: 'MSC' },
        { value: 'BCom', label: 'BCom' },
        { value: 'BA', label: 'BA' },
        { value: 'MA', label: 'MA' },
        { value: 'B.ED.', label: 'B.ED.' },
        { value: 'LLB', label: 'LLB' },
        { value: 'BArch', label: 'BArch' },
        { value: 'BDes.', label: 'BDes.' },
        { value: 'CA', label: 'CA' },
        { value: 'BHM', label: 'BHM' },
        { value: 'BPT', label: 'BPT' },
        { value: 'BPharma', label: 'BPharma' },
        { value: 'BDS', label: 'BDS' },
        { value: 'BBS', label: 'BBS' },
        { value: 'BMS', label: 'BMS' },
        { value: 'BFA', label: 'BFA' },
        { value: 'BSIT', label: 'BSIT' },
        { value: 'Other', label: 'Other' },
    ]

    const departmentOptions = [
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Electrical Engineering', label: 'Electrical Engineering' },
        { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
        { value: 'Civil Engineering', label: 'Civil Engineering' },
        { value: 'Physic', label: 'Physic' },
        { value: 'Chemistry', label: 'Chemistry' },
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'English/Literature', label: 'English/Literature' },
        { value: 'Agriculture', label: 'Agriculture' },
        { value: 'IT', label: 'IT' },
        { value: 'Others', label: 'Others' },
    ]

    const jobStatusOptions = [
        { value: 'Working Professional', label: 'Working Professional' },
        { value: 'Graduate, Not Currently Employed', label: 'Graduate, Not Currently Employed' },
        { value: 'Student', label: 'Student' },
        { value: 'Other', label: 'Other' },
    ]

    return (
        <Card>
            <CardHeader>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    My Education
                </h2>
            </CardHeader>
            <CardContent className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'}>

                {/* College Name */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="collegeName"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        College Name
                    </Label>
                    <Input type='text'
                        id='collegeName'
                        name='collegeName'
                        placeholder='Enter here'
                        className='w-full'
                    />
                </div>

                {/* Graduation year */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="graduationYear"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        Graduation Year
                    </Label>
                    <Select id="graduationYear" name="graduationYear">
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Select Graduation Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Graduation Year</SelectLabel>
                                {
                                    graduationYearOptions.map((option, index) => (
                                        <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Degree */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="degree"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        Degree
                    </Label>
                    <Select id="degree" name="degree">
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Select Your Degree" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Your Degree</SelectLabel>
                                {
                                    degreeOptions.map((option, index) => (
                                        <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Marks */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="marks"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        Result
                    </Label>
                    <div className='flex'>
                        <Select id="marks" name="marks" value={"Percentage"}>
                            <SelectTrigger className="w-[150px] rounded-tr-none rounded-br-none bg-gray-100">
                                <SelectValue placeholder="--Select--" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Percentage">Percentage</SelectItem>
                                    <SelectItem value="CGPA">CGPA</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* Marks Input */}
                        <Input type='number'
                            id='marks'
                            name='marks'
                            placeholder='Enter here'
                            className='w-full rounded-tl-none rounded-bl-none'
                        />
                    </div>

                </div>

                {/* Department */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="department"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        Department
                    </Label>
                    <Select id="department" name="department">
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Select Your Department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Your Department</SelectLabel>
                                {
                                    departmentOptions.map((option, index) => (
                                        <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Job Status */}
                <div className='flex flex-col gap-3'>
                    <Label
                        htmlFor="jobStatus"
                        className={'scroll-m-20 font-semibold tracking-tight'}>
                        Job Status
                    </Label>
                    <Select id="jobStatus" name="jobStatus">
                        <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Your Job Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Your Job Status</SelectLabel>
                                {
                                    jobStatusOptions.map((option, index) => (
                                        <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </CardContent>
        </Card>
    )
}

export default EducationCard
