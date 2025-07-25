import EducationForm from '@/components/dashboard/common-components/forms/EducationForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Award, Building, Calendar, Edit, GraduationCap, PlusIcon, Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'

const EducationCard = (
    {
        formData,
        handleSaveEducationChange,
        handleUpdateEducationChange,
        handleDeleteEducationChange,
        className,
    }
) => {

    const [education, setEducation] = useState({
        educationId: '',
        collegeName: '',
        courseName: '',
        universityName: '',
        branch: '',
        startingYear: '',
        passingYear: '',
        resultType: '', // percentage, CGPA
        result: '',
    })

    const clearFormData = () => {
        setEducation({
            educationId: '',
            collegeName: '',
            courseName: '',
            universityName: '',
            branch: '',
            startingYear: '',
            passingYear: '',
            resultType: '', // percentage, CGPA
            result: '',
        })
    }

    const [educationFormError, setEducationFormError] = useState({});
    const createEducationBtn = useRef();

    const handleEducationChange = (key, value) => {
        setEducation((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    console.log(formData.educations)

    const handleEdit = (edu) => {
        setEducation(edu);
        // Open dialog 
        createEducationBtn.current.click();
    }

    const handleDelete = (edu) => {
        handleDeleteEducationChange(edu);
    }

    return (
        <Card className={'bg-white/80'}>
            <CardHeader>
                <div className='flex justify-between'>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        My Educations
                    </h2>

                    {/* Add New Education */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button ref={createEducationBtn} className={`cursor-pointer`} variant="outline">
                                Add Education
                                <PlusIcon />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>Add new education</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re
                                    done.
                                </DialogDescription>
                                <hr />
                            </DialogHeader>
                            {/* Form fields */}
                            <div className='my-1'>
                                <EducationForm
                                    education={education}
                                    handleEducationChange={handleEducationChange}
                                    educationFormError={educationFormError}
                                />
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <div className='flex gap-4'>
                                        <Button
                                            variant="outline"
                                            onClick={clearFormData}
                                        >
                                            Cancel
                                        </Button>
                                        { !education?.educationId ?
                                            <Button
                                                onClick={() => {
                                                    handleSaveEducationChange(education)
                                                    clearFormData()
                                                }}
                                            >
                                                Create
                                            </Button>
                                            :
                                            <Button
                                                onClick={() => {
                                                    handleUpdateEducationChange(education)
                                                    clearFormData()
                                                }}
                                            >
                                                Update
                                            </Button>
                                        }
                                    </div>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <hr />
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-6 px-20'>
                    {
                        formData?.educations?.map((edu) => (
                            <div
                                key={edu?.educationId || ''}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold mb-2">{edu?.courseName || ''}</h2>
                                            <p className="text-blue-100 text-lg font-medium">{edu?.collegeName || ''}</p>
                                        </div>
                                        {/* Buttons */}
                                        <div className="flex gap-2">
                                            {/* Edit Education Button */}
                                            <button
                                                onClick={() => handleEdit(edu)}
                                                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            {/* Delete Education Button */}
                                            <button
                                                onClick={() => handleDelete(edu)}
                                                className="bg-white/20 hover:bg-red-500 p-2 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <Building className="text-blue-600" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">University</p>
                                                <p className="text-gray-800 font-semibold">{edu?.universityName || 'General'}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <GraduationCap className="text-blue-600" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Branch</p>
                                                <p className="text-gray-800 font-semibold">{edu?.branch || 'General'}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-100 p-2 rounded-lg">
                                                <Calendar className="text-green-600" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Duration</p>
                                                <p className="text-gray-800 font-semibold">
                                                    {edu?.startingYear || ''} - {edu?.passingYear || ''}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="bg-purple-100 p-2 rounded-lg">
                                                <Award className="text-purple-600" size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 font-medium">Result</p>
                                                <p className="text-gray-800 font-semibold">
                                                    {edu?.result || ''}{edu?.resultType === 'percentage' ? '%' : ' CGPA'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default EducationCard
