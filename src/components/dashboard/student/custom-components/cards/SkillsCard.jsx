import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { capatalizeString } from '@/utils/Helper';
import { Box, Chip } from '@mui/material';
import { XIcon } from 'lucide-react';
import React, { useState } from 'react'

const SkillsCard = (
    {
        formData,
        addNewSkill,
        removeSkill,
        formDataErrors,
        setformDataErrors,
    }
) => {

    // Skills for suggestion
    const predefinedSkills = ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "Spring Boot", "HTML", "CSS", "Tailwind CSS", "SQL", "MongoDB", "Git", "REST APIs", "Docker", "Kubernetes", "AWS", "Firebase", "TypeScript", "GraphQL", "PostgreSQL", "Express.js", "Redux", "Next.js", "Data Structures & Algorithms"];
    // User Skills.
    const [skill, setSkill] = useState({
        id: "",
        name: "",
    });
    const maxSkills = 20;


    function handleAddSkill(event) {
        event.preventDefault();
        if (formData?.skills?.length >= maxSkills) {
            setformDataErrors(prev => ({
                ...prev,
                ["skills"]: "You can add a maximum of 20 skills",
            }));
            return;
        }

        let isExist = false;
        formData.skills.forEach(element => {
            if (element.name.trim().toLowerCase() === skill.name.toLowerCase()) {
                setformDataErrors(prev => ({
                    ...prev,
                    ["skills"]: "Skill already exists",
                }));
                setSkill(prev => ({ ...prev, name: '' }));
                isExist = true;
                return;
            }
        });
        if (!isExist) {
            if (skill.name.trim() === '') {
                setformDataErrors(prev => ({
                    ...prev,
                    ["skills"]: "Skill cannot be empty",
                }));
                return;
            }
            // Capitalize skill
            let newSkill = capatalizeString(skill.name);
            // add skill
            addNewSkill({
                id: '',
                name: newSkill,
            })
            setSkill(prev => ({
                ...prev,
                name: '',
            }));
        }
    }

    function handleRemoveSkill(skill) {
        removeSkill(skill);
    }

    return (
        <Card className={'bg-white/80'}>
            <CardHeader>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    My Skills
                </h2>
            </CardHeader>
            <CardContent>
                <div className=''>
                    {/* Add Skills */}
                    <div className='flex flex-col gap-3'>
                        <Label htmlFor="skill" className={'scroll-m-20 text-md font-semibold tracking-tight'}>
                            Skill
                            <span className='font-semibold text-orange-500'>
                                ({maxSkills - formData?.skills?.length})
                            </span>
                        </Label>
                        <form action="" onSubmit={handleAddSkill}>
                            <div className='flex gap-3'>
                                <Input
                                    type='text'
                                    id='skill'
                                    name='skill'
                                    placeholder='Enter skill'
                                    className='w-full'
                                    value={skill.name}
                                    onChange={(e) => {
                                        setSkill(prev => ({ ...prev, name: e.target.value }));
                                        setformDataErrors(prev => ({
                                            ...prev,
                                            ["skills"]: "",
                                        }));
                                    }}

                                    list="skills"
                                />
                                <Button>
                                    Add
                                </Button>

                                {/* Datalist */}
                                <datalist id="skills">
                                    {predefinedSkills.map((skill, index) => (
                                        <option key={index} value={skill} />
                                    ))}
                                </datalist>
                            </div>
                            {/* Show error Message. */}
                            {formDataErrors.skills && (
                                <p className="text-sm text-red-500">{formDataErrors.skills}</p>
                            )}
                        </form>
                    </div>

                    {/* Show skills */}
                    <div>
                        <div className='flex flex-wrap gap-3'>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                {formData.skills.map((skill) => (
                                    <Chip
                                        key={skill.id + skill.name}
                                        label={skill.name}
                                        onDelete={() => handleRemoveSkill(skill)}
                                        deleteIcon={<XIcon className='size-5' />}
                                        className='bg-purple-500 text-white'
                                    />
                                ))}
                            </Box>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SkillsCard;
