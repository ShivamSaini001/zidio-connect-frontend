import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import { XIcon } from 'lucide-react';
import React, { useState } from 'react'

const SkillsCard = () => {

    const predefinedSkills = ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "Spring Boot", "HTML", "CSS", "Tailwind CSS", "SQL", "MongoDB", "Git", "REST APIs", "Docker", "Kubernetes", "AWS", "Firebase", "TypeScript", "GraphQL", "PostgreSQL", "Express.js", "Redux", "Next.js", "Data Structures & Algorithms"];
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [skill, setSkill] = useState('');
    const maxSkills = 20;


    function handleAddSkill(event) {
        event.preventDefault();
        if (selectedSkills.length >= maxSkills) {
            alert('You can add a maximum of 20 skills');
            return;
        }

        let isExist = false;
        selectedSkills.forEach(element => {
            if (element.trim().toLowerCase() === skill.toLowerCase()) {
                alert('Skill already exists');
                setSkill('');
                isExist = true;
                return;
            }
        });
        if (!isExist) {
            if (skill.trim() === '') {
                alert('Skill cannot be empty');
                return;
            }
            let newSkill = skill.trim();
            // Capitalize first letter
            newSkill = newSkill.charAt(0).toUpperCase() + newSkill.slice(1).toLowerCase();
            setSelectedSkills([...selectedSkills, newSkill]);
            setSkill('');
        }
    }

    function handleRemoveSkill(index) {
        const updatedSkills = [...selectedSkills];
        updatedSkills.splice(index, 1);
        setSelectedSkills(updatedSkills);
    }

    return (
        <Card>
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
                                ({maxSkills - selectedSkills.length})
                            </span>
                        </Label>
                        <form action="" onSubmit={handleAddSkill}>
                            <div className='flex gap-3'>
                                <Input type='text'
                                    id='skill'
                                    list="skills"
                                    name='skill'
                                    placeholder='Enter skill'
                                    className='w-full'
                                    value={skill}
                                    onChange={(e) => setSkill(e.target.value)}
                                />
                                <Button>Add</Button>

                                {/* Datalist */}
                                <datalist id="skills">
                                    {predefinedSkills.map((skill, index) => (
                                        <option key={index} value={skill} />
                                    ))}
                                </datalist>
                            </div>
                        </form>
                    </div>

                    {/* Show skills */}
                    <div>
                        <div className='flex flex-wrap gap-3'>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                {selectedSkills.map((skill, index) => (
                                    <Chip
                                        key={index}
                                        label={skill}
                                        onDelete={() => handleRemoveSkill(index)}
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
