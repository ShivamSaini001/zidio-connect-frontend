import SelectField from '@/components/dashboard/common-components/input/SelectField'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const JobFields = ({ formData, currencies, handleFormDataChange, formatSalaryDisplay, getCurrentCurrency, formDataErrors, isEditing }) => {
    return (
        <div className="space-y-4">

            <div className='flex gap-3 flex-wrap'>
                {/* Working Mode */}
                <SelectField
                    label={"Work Mode"}
                    value={formData.workMode}
                    name="workMode"
                    onValueChange={(value) => handleFormDataChange('workMode', value)}
                    placeholder={"Select work mode"}
                    options={[
                        {
                            label: 'Remote',
                            value: 'remote'
                        },
                        {
                            label: 'On-site',
                            value: 'onsite'
                        },
                        {
                            label: 'Hybrid',
                            value: 'hybrid'
                        },
                    ]}
                    isEditing={isEditing}
                    isRequired={true}
                    error={formDataErrors.workMode}
                />
            </div>

            {/* Salary Range */}
            <div>
                <Label htmlFor="salaryFrom" className="mb-2 text-gray-700 dark:text-gray-300">Salary Range</Label>
                <div className="space-y-2 mt-1 grid grid-cols-2 lg:grid-cols-12 gap-3">
                    {/* Currency and Salary Type Selection */}
                    <div className="flex flex-col gap-2 lg:col-span-3">
                        {/* Currency Type */}
                        <Select
                            value={formData.salaryCurrency}
                            onValueChange={(value) => handleFormDataChange('salaryCurrency', value)}
                        >
                            <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 w-full">
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

                        {/* Salary Type */}
                        <Select
                            value={formData.salaryType}
                            onValueChange={(value) => handleFormDataChange('salaryType', value)}
                        >
                            <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 w-full">
                                <SelectValue placeholder="Period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="annual">Annual</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="hourly">Hourly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Salary Range Inputs */}
                    <div className="flex flex-col gap-2 lg:col-span-9">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                                {getCurrentCurrency().symbol}
                            </span>
                            <Input
                                id="salaryFrom"
                                name="salaryFrom"
                                type="number"
                                value={formData.salaryFrom}
                                onChange={(e) => handleFormDataChange("salaryFrom", e.target.value)}
                                placeholder="From"
                                className="pl-8 dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                                {getCurrentCurrency().symbol}
                            </span>
                            <Input
                                id="salaryTo"
                                name="salaryTo"
                                type="number"
                                value={formData.salaryTo}
                                onChange={(e) => handleFormDataChange("salaryTo", e.target.value)}
                                placeholder="To"
                                className="pl-8 dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                    </div>
                </div>
                {/* Salary Preview */}
                {formatSalaryDisplay() && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-md">
                        Preview: <span className="font-medium">{formatSalaryDisplay()}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default JobFields
