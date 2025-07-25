import React from 'react'
import InputField from '../input/InputField'
import SelectField from '../input/SelectField'
import { Label } from '@/components/ui/label'

const EducationForm = (
    {
        education,
        handleEducationChange,
        educationFormError,
        className,
    }
) => {

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

    const branchOptions = [
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

    return (
        <div className={'grid grid-cols-1 gap-4'}>
            {/* Id */}
            <InputField
                value={education?.id}
                type='hidden'
            />

            {/* College Name */}
            <InputField
                label={"College Name"}
                value={education?.collegeName}
                onChange={(e) => handleEducationChange('collegeName', e.target.value)}
                placeholder={"Enter College Name"}
                name="collegeName"
                isRequired={true}
                error={educationFormError?.collegeName}
            />

            <InputField
                label={"University Name"}
                value={education?.universityName}
                onChange={(e) => handleEducationChange('universityName', e.target.value)}
                placeholder={"Enter University Name"}
                name="universityName"
                isRequired={true}
                error={educationFormError?.universityName}
            />

            <div className='grid grid-cols-2 gap-y-4 gap-x-2'>
                {/* Course name */}
                <SelectField
                    label={"Course Name"}
                    value={education?.courseName}
                    name="courceName"
                    onValueChange={(value) => handleEducationChange('courseName', value)}
                    placeholder={"Please Select..."}
                    selectLabel={'Courses'}
                    options={degreeOptions}
                    isRequired={true}
                    error={educationFormError?.courseName}
                />

                {/* Branch */}
                <SelectField
                    label={"Branch"}
                    value={education?.branch}
                    name="branch"
                    onValueChange={(value) => handleEducationChange('branch', value)}
                    placeholder={"Please Select..."}
                    selectLabel={'Branches'}
                    options={branchOptions}
                    isRequired={true}
                    error={educationFormError?.branch}
                />

                {/* Starting year */}
                <SelectField
                    label={"Starting Year"}
                    value={education?.startingYear}
                    name="startingYear"
                    onValueChange={(value) => handleEducationChange('startingYear', value)}
                    placeholder={"Please Select..."}
                    selectLabel={'Starting Year'}
                    options={graduationYearOptions}
                    isRequired={true}
                    error={educationFormError?.startingYear}
                />

                {/* Passing year */}
                <SelectField
                    label={"Passing Year"}
                    value={education?.passingYear}
                    name="passingYear"
                    onValueChange={(value) => handleEducationChange('passingYear', value)}
                    placeholder={"Please Select..."}
                    selectLabel={'Passing Year'}
                    options={graduationYearOptions}
                    isRequired={true}
                    error={educationFormError?.passingYear}
                />
            </div>

            {/* Marks */}
            <div className='flex flex-col gap-3'>
                <Label
                    htmlFor="marks"
                    className={'scroll-m-20 font-semibold tracking-tight'}>
                    Result
                </Label>
                <div className='flex'>
                    {/* Result Type */}
                    <SelectField
                        value={education?.resultType}
                        name="resultType"
                        onValueChange={(value) => handleEducationChange('resultType', value)}
                        placeholder={"Please Select..."}
                        selectLabel={'Result Type'}
                        options={[
                            {
                                label: 'Percentage',
                                value: 'percentage'
                            },
                            {
                                label: 'CGPA',
                                value: 'CGPA'
                            }
                        ]}
                        isRequired={true}
                        className={'w-auto rounded-tr-none rounded-br-none'}
                    />

                    {/* Marks Input */}
                    <InputField
                        value={education?.result}
                        type={'number'}
                        onChange={(e) => handleEducationChange('result', e.target.value)}
                        placeholder={"Enter Result"}
                        name="result"
                        isRequired={true}
                        className='w-full rounded-tl-none rounded-bl-none'
                    />
                </div>
                {/* Show Errors */}
                {(educationFormError?.resultType || educationFormError?.result) && (
                    <p className="text-sm text-red-500">
                        {educationFormError?.resultType} {" "} {educationFormError?.result}
                    </p>
                )}

            </div>
        </div>
    )
}

export default EducationForm
