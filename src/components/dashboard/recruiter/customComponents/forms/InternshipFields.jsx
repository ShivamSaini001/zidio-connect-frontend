import InputField from '@/components/dashboard/common-components/input/InputField'
import SelectField from '@/components/dashboard/common-components/input/SelectField'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from 'lucide-react'
import React from 'react'

const InternshipFields = ({ formData, currencies, handleFormDataChange, getCurrentCurrency, formDataErrors, isEditing }) => {
    return (
        <div className='space-y-4'>
            {/* Internship Duration */}
            <InputField
                label={"Duration In Month"}
                name="duration"
                type='number'
                value={formData.duration}
                onChange={(e) => handleFormDataChange('duration', e.target.value)}
                placeholder="e.g. 6"
                isRequired={true}
                isEditing={isEditing}
                error={formDataErrors.duration}
            />

            <div className='flex gap-3 flex-wrap'>
                {/* Work Type */}
                <SelectField
                    label={"Work Type"}
                    value={formData.workType}
                    name="workType"
                    onValueChange={(value) => handleFormDataChange('workType', value)}
                    placeholder={"Select work type"}
                    options={[
                        {
                            label: 'Full Time',
                            value: 'full-time'
                        },
                        {
                            label: 'Part Time',
                            value: 'part-time'
                        },
                    ]}
                    isEditing={isEditing}
                    isRequired={true}
                    error={formDataErrors.workType}
                />

                {/* Internship Mode  */}
                <SelectField
                    label={"Work Mode"}
                    value={formData.workMode}
                    name="workMode"
                    onValueChange={(value) => handleFormDataChange('workMode', value)}
                    placeholder={"Select work mode"}
                    options={[
                        {
                            label: 'Online',
                            value: 'online'
                        },
                        {
                            label: 'Offline',
                            value: 'offline'
                        },
                    ]}
                    isEditing={isEditing}
                    isRequired={true}
                    error={formDataErrors.workMode}
                />

            </div>

            {/* Stipend */}
            <div>
                <Label htmlFor="salaryFrom" className="mb-2 text-gray-700 dark:text-gray-300">Stipend</Label>
                <div className='flex gap-3 mt-2'>
                    <Select
                        name="stipendCurrency"
                        value={formData.stipendCurrency}
                        onValueChange={(value) => handleFormDataChange("stipendCurrency", value)}
                    >
                        <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 w-56">
                            <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent>
                            {currencies.map((currency) => (
                                <SelectItem key={currency.code} value={currency.code}>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-medium">{currency.symbol}</span>
                                        <span>{currency.code}</span>
                                        <span className="text-gray-500 text-sm">- {currency.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                            {getCurrentCurrency().symbol}
                        </span>
                        <Input
                            id="stipend"
                            name="stipend"
                            type="number"
                            value={formData.stipend}
                            onChange={(e) => handleFormDataChange("stipend", e.target.value)}
                            placeholder="Stipend"
                            className="pl-8 dark:bg-gray-700 dark:border-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* internshipStartDate */}
            <InputField
                label={"Internship Start Date"}
                name="internshipStartDate"
                type='date'
                value={formData.internshipStartDate}
                onChange={(e) => handleFormDataChange('internshipStartDate', e.target.value)}
                isRequired={true}
                isEditing={isEditing}
                error={formDataErrors.internshipStartDate}
            />

        </div>
    )
}

export default InternshipFields
