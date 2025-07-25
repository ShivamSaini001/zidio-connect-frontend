import React, { useCallback, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, DollarSign, IndianRupee } from 'lucide-react';
import JobFields from './JobFields';
import InternshipFields from './InternshipFields';
import SkillsInput from '../../../common-components/input/SkillsInput';
import { capatalizeString } from '@/utils/Helper';
import CompanyInformation from '../profile/CompanyInformation';
import SelectField from '@/components/dashboard/common-components/input/SelectField';
import InputField from '@/components/dashboard/common-components/input/InputField';
import TextEditor from '@/components/dashboard/common-components/input/TextEditor';

// Material-UI Stepper (simplified implementation)
const Stepper = ({ activeStep, steps }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${index <= activeStep
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}>
            {index + 1}
          </div>
          <span className={`ml-2 text-sm ${index <= activeStep
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-500 dark:text-gray-400'
            }`}>
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${index < activeStep
              ? 'bg-blue-600'
              : 'bg-gray-200 dark:bg-gray-700'
              }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default function CreateNewJobForm() {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    // Basic info
    title: '',
    description: '',
    location: '',
    duration: '',
    workMode: '',
    jobType: '',
    workType: '',
    department: '',
    experienceLevel: '',
    numberOfOpenings: '',
    minQualification: '',

    // Job Salary
    salaryCurrency: 'USD',
    salaryFrom: '',
    salaryTo: '',
    salaryType: 'annual',

    // Stipend
    stipendCurrency: '',
    stipend: '',
    internshipStartDate: '',
    applicationDeadline: '',

    requiredSkills: [
      {
        id: 1,
        name: "Java"
      },
      {
        id: 2,
        name: "Java Script"
      },
      {
        id: 3,
        name: "React"
      },
    ],

    technologies: [
      {
        id: 1,
        name: "Java"
      },
      {
        id: 2,
        name: "Java Script"
      },
      {
        id: 3,
        name: "React"
      },
    ],
  });

  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    companyDescription: '',
    headquartersLocation: '',
    industry: '',
    companySize: '',
    companyType: '',
    yearFounded: '',
    companyWebsiteUrl: '',
    companyLinkedinUrl: '',
    mobile: '',
    companyEmail: '',
    companyLogo: '',
  })

  const [formDataErrors, setFormDataErrors] = useState({});
  const [companyDetailsErrors, setCompanyDetailsErrors] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  const clearFormData = () => {
    setFormData({
      // Basic info
      title: '',
      description: '',
      location: '',
      duration: '',
      workMode: '',
      jobType: '',
      workType: '',
      department: '',
      experienceLevel: '',
      numberOfOpenings: '',
      minQualification: '',

      // Job Salary
      salaryCurrency: '',
      salaryFrom: '',
      salaryTo: '',
      salaryType: '',

      // Stipend
      stipendCurrency: '',
      stipend: '',
      internshipStartDate: '',
      applicationDeadline: '',
      requiredSkills: [],
      technologies: [],
    });
  }

  const steps = ['Basic Info', 'Skills & Requirements', 'Company Info'];

  const currencies = [
    { code: 'USD', symbol: '$', icon: DollarSign, label: 'US Dollar' },
    { code: 'EUR', symbol: '€', icon: DollarSign, label: 'Euro' },
    { code: 'GBP', symbol: '£', icon: DollarSign, label: 'British Pound' },
    { code: 'INR', symbol: '₹', icon: IndianRupee, label: 'Indian Rupee' },
    { code: 'CAD', symbol: 'C$', icon: DollarSign, label: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', icon: DollarSign, label: 'Australian Dollar' },
    { code: 'JPY', symbol: '¥', icon: DollarSign, label: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', icon: DollarSign, label: 'Chinese Yuan' },
    { code: 'SGD', symbol: 'S$', icon: DollarSign, label: 'Singapore Dollar' },
    { code: 'CHF', symbol: 'CHF', icon: DollarSign, label: 'Swiss Franc' }
  ];

  const departments = [
    'Engineering', 'Marketing', 'Sales', 'Design', 'Product', 'Operations', 'Finance', 'HR', 'Customer Support', 'Legal', 'Other'
  ].map((dept) => ({ label: dept, value: dept.toLowerCase() }));

  const experienceLevels = [
    '0-2 Years', '2-4 Years', '4-6 Years', '6+ Years',
  ].map((dept) => ({ label: dept, value: dept.toLowerCase() }));

  const getCurrentCurrency = () => {
    return currencies.find(curr => curr.code === formData.salaryCurrency) || currencies[0];
  };

  const formatSalaryDisplay = () => {
    const currency = getCurrentCurrency();
    if (formData.salaryFrom && formData.salaryTo) {
      return `${currency.symbol}${formData.salaryFrom} - ${currency.symbol}${formData.salaryTo} ${formData.salaryType}`;
    }
    return '';
  };

  const handleCompanyDetailsChange = (name, value) => {
    setCompanyDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleFormDataChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = useCallback((newContent) => {
    setFormData(prev => ({
      ...prev,
      description: newContent,
    }));
  }, []);

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const addSkill = (name, skill) => {
    if (!skill) return;

    // Add new skill to the database.
    const capatalizeSkill = capatalizeString(skill.trim());
    const newSkill = {
      id: Math.random(),
      name: capatalizeSkill
    }

    // Add skill to the formData.
    setFormData(prev => ({
      ...prev,
      [name]: [...prev[name], newSkill],
    }))
  }

  const removeSkill = (name, skill) => {
    const updatedSkills = formData[name].filter(s => s.id !== skill.id);
    setFormData(prev => ({
      ...prev,
      [name]: updatedSkills
    }));
  }

  const handleSubmit = () => {
    console.log('Job Created:', { ...formData });
    alert('Job posted successfully!');
  };

  console.log(formData);

  return (
    <div className={'min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900'}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Job/Internship</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Post a new job/internship opportunity</p>
          </div>
        </div>

        {/* Stepper */}
        <Stepper activeStep={activeStep} steps={steps} />

        {/* Form Content */}
        <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6 w-full">
            {/* Step 0: Basic Info */}
            {activeStep === 0 && (
              <div className="flex w-full flex-col gap-4 -mt-6">
                {/* Job Type */}
                <SelectField
                  label={"Job type"}
                  name="jobType"
                  value={formData.jobType}
                  onValueChange={(value) => {
                    clearFormData();
                    handleFormDataChange('jobType', value)
                  }}
                  placeholder={"Select job type"}
                  options={[
                    {
                      value: "job",
                      label: "Job"
                    },
                    {
                      value: "internship",
                      label: "Internship"
                    }
                  ]}
                  isEditing={!formData.jobType}
                  isRequired={true}
                />

                <hr />

                {formData?.jobType && (
                  <div className='flex w-full flex-col gap-4'>
                    {/* Common Fields */}
                    {/* Job Title */}
                    <InputField
                      label={`${(formData?.jobType === "internship") ? "Internship" : "Job"} Title`}
                      value={formData.title}
                      type='text'
                      onChange={(e) => handleFormDataChange('title', e.target.value)}
                      placeholder={"e.g. Senior Frontend Developer"}
                      name="title"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.title}
                    />

                    {/* Job Description */}
                    <TextEditor
                      label={`${(formData?.jobType === "internship") ? "Internship" : "Job"} Description`}
                      handleEditorChange={(value) => handleEditorChange(value)}
                      value={formData.description}
                      name={"description"}
                      placeholder={"Write description"}
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.description}
                    />

                    {/* Specic fields for job and internship */}
                    {
                      (formData?.jobType === "internship") ?
                        // Internship Fields
                        <InternshipFields
                          formData={formData}
                          formDataErrors={formDataErrors}
                          isEditing={isEditing}
                          currencies={currencies}
                          handleFormDataChange={handleFormDataChange}
                          getCurrentCurrency={getCurrentCurrency}
                        />
                        :
                        //  Job Fields 
                        <JobFields
                          formData={formData}
                          formDataErrors={formDataErrors}
                          isEditing={isEditing}
                          currencies={currencies}
                          handleFormDataChange={handleFormDataChange}
                          getCurrentCurrency={getCurrentCurrency}
                          formatSalaryDisplay={formatSalaryDisplay}
                        />
                    }


                    {/* Common Fields */}

                    <div className='flex gap-3 flex-wrap'>
                      {/* Department */}
                      <SelectField
                        label={"Department"}
                        value={formData.department}
                        name="department"
                        onValueChange={(value) => handleFormDataChange('department', value)}
                        placeholder={"Select department"}
                        options={departments}
                        isEditing={isEditing}
                        isRequired={true}
                        error={formDataErrors.department}
                      />

                      {/* Application Deadline */}
                      <InputField
                        label={"Application Deadline"}
                        name="applicationDeadline"
                        type='date'
                        value={formData.applicationDeadline}
                        onChange={(e) => handleFormDataChange('applicationDeadline', e.target.value)}
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.applicationDeadline}
                      />

                      {/* Experience Level */}
                      <SelectField
                        label={"Experience Level"}
                        value={formData.experienceLevel}
                        name="experienceLevel"
                        onValueChange={(value) => handleFormDataChange('experienceLevel', value)}
                        placeholder={"Select experience level"}
                        options={experienceLevels}
                        isEditing={isEditing}
                        isRequired={true}
                        error={formDataErrors.experienceLevel}
                      />

                      {/* Number of openings */}
                      <InputField
                        label={"Number of Openings"}
                        name="numberOfOpenings"
                        type='number'
                        value={formData.numberOfOpenings}
                        onChange={(e) => handleFormDataChange('numberOfOpenings', e.target.value)}
                        placeholder="Enter here"
                        isRequired={true}
                        icon={<Users />}
                        isEditing={isEditing}
                        error={formDataErrors.numberOfOpenings}
                      />

                    </div>

                    {/* Job Location */}
                    <InputField
                      label={"Location"}
                      name="location"
                      value={formData.location}
                      onChange={(e) => handleFormDataChange('location', e.target.value)}
                      placeholder="e.g. San Francisco, CA"
                      isRequired={true}
                      icon={<MapPin />}
                      isEditing={isEditing}
                      error={formDataErrors.location}
                    />

                  </div>
                )}
              </div>
            )}

            {/* Step 1: Skills & Requirements */}
            {activeStep === 1 && (
              <div className="space-y-6">
                {/* Minimum qualification */}

                <SelectField
                  label={"Minimum Qualification"}
                  value={formData.minQualification}
                  name="minQualification"
                  onValueChange={(value) => handleFormDataChange('minQualification', value)}
                  placeholder={"Select minimum qualification"}
                  options={[
                    {
                      label: "Bachelor's Degree",
                      value: "Bachelor's Degree"
                    },
                    {
                      label: "Master's Degree",
                      value: "Master's Degree"
                    },
                    {
                      label: 'PHD',
                      value: 'PHD'
                    },
                  ]}
                  isEditing={isEditing}
                  isRequired={true}
                  error={formDataErrors.minQualification}
                />

                <div>
                  {/* Required Skills */}
                  <SkillsInput
                    label={"Required Skills"}
                    skills={formData.requiredSkills}
                    name={"requiredSkills"}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                  />

                  {/* Technologies Skills */}
                  <SkillsInput
                    label={"Technologies"}
                    skills={formData.technologies}
                    name={"technologies"}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Company Info */}
            {activeStep === 2 && (
              <CompanyInformation
                className="border-0 shadow-none -mt-8"
                handleCompanyDetailsChange={handleCompanyDetailsChange}
                companyDetails={companyDetails}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                onClick={prevStep}
                disabled={activeStep === 0}
                variant="outline"
                className="dark:border-gray-600"
              >
                Previous
              </Button>
              <div className="flex gap-2">
                {activeStep < steps.length - 1 ? (
                  <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                    Post Job
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  );
}