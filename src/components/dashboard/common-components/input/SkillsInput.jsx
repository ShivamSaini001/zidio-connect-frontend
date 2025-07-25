import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import React, { useState } from 'react'

const SkillsInput = ({ label, skills, name, addSkill, removeSkill }) => {

    const [newSkill, setNewSkill] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleOnKeyPress = () => {
        if (!newSkill) return;
        let exists = false;
        skills.forEach((skill) => {
            if (skill.name.toLowerCase() === newSkill.toLowerCase().trim()) {
                setErrorMessage("Skill already exists");
                exists = true;
            }
        })
        if (exists) return;
        addSkill(name, newSkill);
        setNewSkill("");
    }

    return (
        <div>
            <Label className="text-gray-700 dark:text-gray-300">{label}</Label>
            <div className="flex gap-2 mt-2">
                <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value) || setErrorMessage("")}
                    placeholder="Add a skill (e.g. React, JavaScript)"
                    className="flex-1 dark:bg-gray-700 dark:border-gray-600"
                    onKeyPress={(e) => e.key === 'Enter' ? handleOnKeyPress() : null}
                />
                <Button onClick={handleOnKeyPress} variant="outline" className="dark:border-gray-600">
                    Add
                </Button>
            </div>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {skills?.map((skill) => (
                    <Badge
                        key={skill.id}
                        variant="secondary"
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 flex items-center"
                    >
                        {skill.name}
                        <button
                            type="button"
                            onClick={() => removeSkill(name, skill)}
                            className="ml-1 hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </Badge>
                ))}
            </div>
        </div>
    )
}

export default SkillsInput
