import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react'

const InputField = (
    {
        label,
        value,
        onChange,
        error,
        type = "text",
        placeholder,
        icon,
        name,
        className,
        isRequired = false,
        isEditing = true,
        showCharCount = false,
        showWordCount = false,
        hideShowPassword = false,
        button,
        // crypto.randomUUID() generates a unique identifier like: '123e4567-e89b-12d3-a456-426614174000'
        // Returns a UUID v4 string
        id = String(crypto.randomUUID()),
    }
) => {
    const [inputType, setInputType] = useState(type);

    return (
        <div className='space-y-2'>
            {
                label &&
                (<Label htmlFor={id} className="text-gray-700 dark:text-gray-300">
                    {label.trim()} {isRequired && <span className="text-red-500"> *</span>}
                </Label>)
            }
            <div className='flex items-center gap-2 relative'>
                {icon &&
                    (<p
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </p>)
                }
                <Input
                    id={id}
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`dark:bg-gray-700 dark:border-gray-600 w-full ${className} ${icon ? " pl-10" : ""}`}
                    required={isRequired}
                    disabled={!isEditing}
                    aria-invalid={error ? true : false}
                />
                {/* show button */}
                {
                    button &&
                    (
                        <span>
                            {button}
                        </span>
                    )
                }
                {
                    hideShowPassword &&
                    (<span
                        onClick={() => {
                            setInputType(inputType === 'password' ? 'text' : 'password');
                        }}
                        className="absolute inset-y-0 right-0 pr-3 w-auto h-auto flex items-center text-gray-600 cursor-pointer"
                    >
                        {
                            inputType === 'password' ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />
                        }
                    </span>)
                }
            </div>

            {/* Show Word and character count */}
            {(showCharCount || showWordCount) &&
                (<p className='text-right capitalize text-sm text-black/60'>
                    {(showCharCount ? `characters: ${value.length},` : "") + (showWordCount ? ` words: ${value.split(' ').length - 1}` : '')}
                </p>)
            }

            {/* Show Errors */}
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

export default InputField
