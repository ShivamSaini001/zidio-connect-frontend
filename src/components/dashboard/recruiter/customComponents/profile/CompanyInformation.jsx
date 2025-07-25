import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Foundation, Mail, Phone } from '@mui/icons-material'
import { IconBuilding } from '@tabler/icons-react'
import { Building, Building2, Edit, ImageIcon, Link, Linkedin, MailIcon, MapPin, Upload, User, X } from 'lucide-react'
import React, { useState } from 'react'

const CompanyInformation = ({ className, handleCompanyDetailsChange, companyDetails }) => {
    
    // let values = Object.values(companyDetails);
    // Object.keys(companyDetails).forEach((key, index) => {
    //     console.log(key, " : ", values[index]);
    // })
    const [logoPreview, setLogoPreview] = useState(null);

    const industries = [
        { "label": "Information Technology", "value": "information_technology" },
        { "label": "Software Development", "value": "software_development" },
        { "label": "Finance & Banking", "value": "finance_banking" },
        { "label": "Healthcare & Pharmaceuticals", "value": "healthcare_pharmaceuticals" },
        { "label": "Education & E-learning", "value": "education_elearning" },
        { "label": "Manufacturing", "value": "manufacturing" },
        { "label": "Retail & E-commerce", "value": "retail_ecommerce" },
        { "label": "Consulting", "value": "consulting" },
        { "label": "Telecommunications", "value": "telecommunications" },
        { "label": "Construction & Real Estate", "value": "construction_real_estate" },
        { "label": "Marketing & Advertising", "value": "marketing_advertising" },
        { "label": "Transportation & Logistics", "value": "transportation_logistics" },
        { "label": "Legal Services", "value": "legal_services" },
        { "label": "Non-Profit / NGO", "value": "non_profit" },
        { "label": "Government & Public Sector", "value": "government_public" },
        { "label": "Media & Entertainment", "value": "media_entertainment" },
        { "label": "Energy & Utilities", "value": "energy_utilities" },
        { "label": "Aerospace & Defense", "value": "aerospace_defense" },
        { "label": "Hospitality & Tourism", "value": "hospitality_tourism" },
        { "label": "Agriculture", "value": "agriculture" }
    ]

    const companySize = [
        { "label": "1-10", "value": "1-10" },
        { "label": "11-50", "value": "11-50" },
        { "label": "51-200", "value": "51-200" },
        { "label": "201-500", "value": "201-500" },
        { "label": "501-1000", "value": "501-1000" },
        { "label": "1001-5000", "value": "1001-5000" },
        { "label": "5001-10000", "value": "5001-10000" },
        { "label": "10000+", "value": "10000+" }
    ]

    return (
        <Card className={"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden" + "  " + className}>
            <CardHeader>
                <div className='flex justify-between'>
                    <p className='scroll-m-20 text-3xl font-semibold tracking-tight'>Company Information</p>
                    <Button variant="outline">
                        <Edit />
                        edit
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    {/* Company Name */}
                    <div className='space-y-2'>
                        <Label htmlFor='companyName'>Company name <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='text'
                                id="companyName"
                                name="companyName"
                                value={companyDetails.companyName}
                                onChange={(e) => handleCompanyDetailsChange("companyName", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Company name'
                            />
                            <IconBuilding className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    {/* Company Description / About Us */}
                    <div className='space-y-2'>
                        <Label htmlFor='companyDescription'>Company Description/About Us <span className='text-red-500'>*</span> </Label>
                        <Textarea
                            type='text'
                            id="companyDescription"
                            name="companyDescription"
                            value={companyDetails.companyDescription}
                            onChange={(e) => handleCompanyDetailsChange("companyDescription", e.target.value)}
                            placeholder='Enter Company Description'
                        />
                        <p className='text-sm text-gray-500'>
                            <span>{companyDetails.companyDescription.length}</span>/
                            500 Characters
                        </p>
                    </div>

                    {/* Headquarters Location */}
                    <div className='space-y-2'>
                        <Label htmlFor='headquartersLocation'>Headquarters Location <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='text'
                                id="headquartersLocation"
                                name="headquartersLocation"
                                value={companyDetails.headquartersLocation}
                                onChange={(e) => handleCompanyDetailsChange("headquartersLocation", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Headquarters Location'
                            />
                            <MapPin className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    <div className='flex justify-between w-full flex-wrap gap-4'>
                        {/* Industry */}
                        <div className='space-y-2'>
                            <Label htmlFor='industry'>Industry <span className='text-red-500'>*</span> </Label>
                            <Select
                                id='industry'
                                name='industry'
                                value={companyDetails.industry}
                                onValueChange={(value) => handleCompanyDetailsChange("industry", value)}
                            >
                                <SelectTrigger className="w-[163px]">
                                    <SelectValue placeholder="Select Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Industry</SelectLabel>
                                        {
                                            industries.map((industry) => (
                                                <SelectItem key={industry.value} value={industry.value}>{industry.label}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Company Size */}
                        <div className='space-y-2'>
                            <Label htmlFor='companySize'>Company Size <span className='text-red-500'>*</span> </Label>
                            <Select
                                id='companySize'
                                name='companySize'
                                value={companyDetails.companySize}
                                onValueChange={(value) => handleCompanyDetailsChange("companySize", value)}
                            >
                                <SelectTrigger className="w-[163px]">
                                    <SelectValue placeholder="Select Company Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Total Employees</SelectLabel>
                                        {
                                            companySize.map((size) => (
                                                <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Company Type */}
                        <div className='space-y-2'>
                            <Label htmlFor='companyType'>Company Type <span className='text-red-500'>*</span> </Label>
                            <Select
                                id='companyType'
                                name='companyType'
                                value={companyDetails.companyType}
                                onValueChange={(value) => handleCompanyDetailsChange("companyType", value)}
                            >
                                <SelectTrigger className="w-[163px]">
                                    <SelectValue placeholder="Select Company Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Company Type</SelectLabel>
                                        <SelectItem value="private">Private</SelectItem>
                                        <SelectItem value="public">Public</SelectItem>
                                        <SelectItem value="government">Government</SelectItem>
                                        <SelectItem value="startup">Startup</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Year Founded */}
                        <div className='space-y-2'>
                            <Label htmlFor='yearFounded'>Year Founded <span className='text-red-500'>*</span> </Label>
                            <div className='relative'>
                                <Select
                                    id='yearFounded'
                                    name='yearFounded'
                                    value={companyDetails.yearFounded}
                                    onValueChange={(value) => handleCompanyDetailsChange("yearFounded", value)}
                                >
                                    <SelectTrigger className="w-[163px]">
                                        <SelectValue placeholder="Select Year Founded" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Founded Year</SelectLabel>
                                            {
                                                Array.from({ length: 2025 - 1900 + 1 }, (_, i) => {
                                                    const year = 2025 - i;
                                                    return (
                                                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                                    );
                                                })
                                            }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Company Website Url */}
                    <div className='space-y-2'>
                        <Label htmlFor='companyWebsiteUrl'>Company Website Url <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='url'
                                id="companyWebsiteUrl"
                                name="companyWebsiteUrl"
                                value={companyDetails.companyWebsiteUrl}
                                onChange={(e) => handleCompanyDetailsChange("companyWebsiteUrl", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Company Website Url'
                            />
                            <Link className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    {/* Company Linkedin Url */}
                    <div className='space-y-2'>
                        <Label htmlFor='companyLinkedinUrl'>Company Linkedin Url <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='Url'
                                id="companyLinkedinUrl"
                                name="companyLinkedinUrl"
                                value={companyDetails.companyLinkedinUrl}
                                onChange={(e) => handleCompanyDetailsChange("companyLinkedinUrl", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Company Linkedin Url'
                            />
                            <Linkedin className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    {/* Company Phone Number */}
                    <div className='space-y-2'>
                        <Label htmlFor='mobileNumber'>Company Phone <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='number'
                                id="mobileNumber"
                                name="mobile"
                                value={companyDetails.mobile}
                                onChange={(e) => handleCompanyDetailsChange("mobile", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Company mobile'
                            />
                            <Phone className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    {/* Company Email */}
                    <div className='space-y-2'>
                        <Label htmlFor='companyEmail'>Company Email <span className='text-red-500'>*</span> </Label>
                        <div className='relative'>
                            <Input
                                type='email'
                                id="companyEmail"
                                name="companyEmail"
                                value={companyDetails.companyEmail}
                                onChange={(e) => handleCompanyDetailsChange("companyEmail", e.target.value)}
                                className='pl-9'
                                placeholder='Enter Company Email'
                            />
                            <MailIcon className='size-5 absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                        </div>
                    </div>

                    {/* Company Logo */}
                    <div className='space-y-2'>
                        <Label className='scroll-m-20 font-semibold tracking-tight w-auto'>Company Logo <span className='text-red-500'>*</span></Label>
                        <div className='flex items-center gap-4'>
                            {/* Logo Preview */}
                            {logoPreview ? (
                                <Card className='w-32 min-h-32 rounded-lg overflow-hidden border border-gray-200'>
                                    <img
                                        src={logoPreview}
                                        alt="Company Logo Preview"
                                        className='w-full object-cover'
                                    />
                                </Card>
                            ) : (
                                <div className='w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50'>
                                    <ImageIcon className='size-8 text-gray-400' />
                                </div>
                            )}

                            {/* Upload Button */}
                            <div className='flex-1'>
                                <Input
                                    type='file'
                                    id="companyLogo"
                                    name="companyLogo"
                                    accept="image/*"
                                    className='hidden'
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setLogoPreview(reader.result);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <Label
                                    htmlFor='companyLogo'
                                    className='inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 cursor-pointer'
                                >
                                    <Upload className='size-4 mr-2' />
                                    {logoPreview ? 'Change Logo' : 'Upload Logo'}
                                </Label>
                            </div>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}

export default CompanyInformation
