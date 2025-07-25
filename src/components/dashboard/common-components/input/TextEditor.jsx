import React from 'react'
import { Label } from '@/components/ui/label'
import JoditEditor from 'jodit-react'

const TextEditor = (
    {
        label,
        handleEditorChange,
        value,
        name,
        error,
        placeholder,
        isRequired = false,
        isEditing = true,
        config = {
            readonly: false,
            height: 300,
            placeholder: 'Start typings...',
            image: {
                insertImageAsBase64URI: true,
            },
            uploader: {
                insertImageAsBase64URI: true,
            },
        },
    }
) => {

    // crypto.randomUUID() generates a unique identifier like: '123e4567-e89b-12d3-a456-426614174000'
    const id = String(crypto.randomUUID()); // Returns a UUID v4 string
    config.placeholder = placeholder;
    const editor = React.useRef(null)

    return (
        <div>
            <Label htmlFor={id} className="mb-2 text-gray-700 dark:text-gray-300">
                {label.trim()} {isRequired && <span className="text-red-500"> *</span>}
            </Label>
            <JoditEditor
                ref={editor}
                config={config}
                value={value}
                id={id}
                name={name}
                onBlur={handleEditorChange}
                required={isRequired}
                disabled={!isEditing}
                className="dark:bg-gray-700 dark:border-gray-600"
            />
            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    )
}

export default TextEditor
