import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'

const SelectField = (
    {
        label,
        selectLabel,
        value,
        onValueChange,
        options = [],
        error,
        placeholder,
        isRequired = false,
        name,
        isEditing = true,
        className,
    }
) => {

    // crypto.randomUUID() generates a unique identifier like: '123e4567-e89b-12d3-a456-426614174000'
    const id = String(crypto.randomUUID()); // Returns a UUID v4 string

    return (
        <div>
            {
                label &&
                (<Label htmlFor={id} className=" text-gray-700 dark:text-gray-300">
                    {label.trim()} {isRequired && <span className="text-red-500"> *</span>}
                </Label>)
            }
            <Select
                id={id}
                name={name}
                value={value}
                onValueChange={onValueChange}
                required={isRequired}
                disabled={!isEditing}
                aria-invalid={error ? true : false}
            >
                <SelectTrigger className={`w-48 dark:bg-gray-700 dark:border-gray-600 ${label && "mt-2"} ${className}`}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{selectLabel}</SelectLabel>
                        {
                            options.map((option, index) => (
                                <SelectItem key={option.value + index} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}

export default SelectField
