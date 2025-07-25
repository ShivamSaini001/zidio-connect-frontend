import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Calendar, Users, Trophy, Settings, DeleteIcon } from 'lucide-react';
import InputField from '@/components/dashboard/common-components/input/InputField';
import TextEditor from '@/components/dashboard/common-components/input/TextEditor';
import SelectField from '@/components/dashboard/common-components/input/SelectField';
import { Button } from '@/components/ui/button';
import { List, ListItem } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CreateHackathoneForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    // Step 0: Hackathon Details
    title: '',
    tagline: '',
    description: '',
    category: '',
    hackathoneMode: '',
    location: '',
    organizerName: '',
    organizerEmail: '',
    registrationStartDate: '',
    registrationEndDate: '',
    hackathoneStartDate: '',
    hackathoneEndDate: '',

    // Step 1: Rules & Eligibility
    eligibility: [],
    teamSize: '',
    teamFormationRequired: '',

    // Step 2: Rewards & Mentorship
    // Prize Pool (in USD or INR)
    // 1st / 2nd / 3rd Place Prizes

    // Step 3: Links & Contact
    projectSubmissionLink: '',
    officialHackathonWebsite: '',
    guidelinesPDF: '',
  });

  const [formDataErrors, setFormDataErrors] = useState({});

  const steps = [
    { label: 'Hackathon Details', icon: Trophy },
    { label: 'Rules & Eligibility', icon: Calendar },
    { label: 'Rewards & Mentorship', icon: Users },
    { label: 'Submission Links', icon: Settings }
  ];

  const categories = [
    'Technology',
    'AI/ML',
    'Web3/Blockchain',
    'Sustainability',
    'Healthcare',
    'Education',
    'Gaming',
    'Mobile Apps',
    'IoT',
    'Other'
  ].map((dept) => ({ label: dept, value: dept.toLowerCase() }));

  const hackathonTypes = [
    'Online',
    'Offline',
    'Hybrid'
  ].map((dept) => ({ label: dept, value: dept.toLowerCase() }));

  const handleFormDataChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (formDataErrors[field]) {
      setFormDataErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleEditorChange = useCallback((newContent) => {
    setFormData(prev => ({
      ...prev,
      description: newContent,
    }));
  }, []);

  const validateStep0 = () => {
    return true;
  };
  const validateStep1 = () => {
    return true;
  };
  const validateStep2 = () => {
    return true;
  };
  const validateStep3 = () => {
    return true;
  };

  const handleNext = () => {
    if (activeStep === 0 && !validateStep0()) {
      return;
    }
    if (activeStep === 1 && !validateStep1()) {
      return;
    }
    if (activeStep === 2 && !validateStep2()) {
      return;
    }
    if (activeStep === 3 && !validateStep3()) {
      return;
    }

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  console.log(formData.eligibility)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Post a New Hackathon
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Create an exciting opportunity for developers and innovators
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            {/* Stepper */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <div key={step.label} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                            ? 'bg-blue-600 text-white shadow-lg'
                            : isCompleted
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-400'
                            }`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <span
                          className={`mt-2 text-sm font-medium transition-colors ${isActive
                            ? 'text-blue-600'
                            : isCompleted
                              ? 'text-green-500'
                              : 'text-gray-400'
                            }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-4 transition-colors ${isCompleted ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] mb-8">
              <AnimatePresence mode="wait" custom={activeStep}>
                {/* Step 0 */}
                {activeStep === 0 &&
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-3"
                  >

                    {/* Hackathone Title */}
                    <InputField
                      label={"Hackathone Title"}
                      value={formData.title}
                      type='text'
                      onChange={(e) => handleFormDataChange('title', e.target.value)}
                      placeholder={"Enter here"}
                      name="title"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.title}
                    />

                    {/* Hackathone Tagline */}
                    <InputField
                      label={"Hackathone Tagline"}
                      value={formData.tagline}
                      type='text'
                      onChange={(e) => handleFormDataChange('tagline', e.target.value)}
                      placeholder={"Enter here"}
                      name="tagline"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.tagline}
                    />

                    {/* Hackathone Description */}
                    <TextEditor
                      label={"Hackathone Description"}
                      handleEditorChange={(value) => handleEditorChange(value)}
                      value={formData.description}
                      name={"description"}
                      placeholder={"Write description"}
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.description}
                    />

                    <div className='flex gap-4'>
                      {/* Hackathone Category */}
                      <SelectField
                        label={"Hackathone Category"}
                        value={formData.category}
                        name="category"
                        onValueChange={(value) => handleFormDataChange('category', value)}
                        placeholder={"Select Category"}
                        options={categories}
                        isEditing={isEditing}
                        isRequired={true}
                        error={formDataErrors.category}
                      />

                      {/* Hackathone Mode */}
                      <SelectField
                        label={"Hackathone Mode"}
                        value={formData.hackathoneMode}
                        name="hackathoneMode"
                        onValueChange={(value) => handleFormDataChange('hackathoneMode', value)}
                        placeholder={"Select Hackathone Mode"}
                        options={hackathonTypes}
                        isEditing={isEditing}
                        isRequired={true}
                        error={formDataErrors.hackathoneMode}
                      />
                    </div>

                    {/* Location */}
                    <InputField
                      label={"Hackathone Location"}
                      value={formData.location}
                      onChange={(e) => handleFormDataChange('location', e.target.value)}
                      placeholder={"Enter here"}
                      name="location"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.location}
                    />

                    {/* Organizer Name */}
                    <InputField
                      label={"Organizer Name"}
                      value={formData.organizerName}
                      onChange={(e) => handleFormDataChange('organizerName', e.target.value)}
                      placeholder={"Enter here"}
                      name="organizerName"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.organizerName}
                    />

                    {/* Organizer Email */}
                    <InputField
                      label={"Organizer Email"}
                      value={formData.organizerEmail}
                      type={"email"}
                      onChange={(e) => handleFormDataChange('organizerEmail', e.target.value)}
                      placeholder={"Enter here"}
                      name="organizerEmail"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.organizerEmail}
                    />

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                      {/* Registration Start Date */}
                      <InputField
                        label={"Registration Start Date"}
                        value={formData.registrationStartDate}
                        type={"date"}
                        onChange={(e) => handleFormDataChange('registrationStartDate', e.target.value)}
                        name="registrationStartDate"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.registrationStartDate}
                        className={"w-auto"}
                      />

                      {/* Registration End Date */}
                      <InputField
                        label={"Registration End Date"}
                        value={formData.registrationEndDate}
                        type={"date"}
                        onChange={(e) => handleFormDataChange('registrationEndDate', e.target.value)}
                        name="registrationEndDate"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.registrationEndDate}
                        className={"w-auto"}
                      />

                      {/* Hackathone Start Date */}
                      <InputField
                        label={"Hackathone Start Date"}
                        value={formData.hackathoneStartDate}
                        type={"date"}
                        onChange={(e) => handleFormDataChange('hackathoneStartDate', e.target.value)}
                        name="hackathoneStartDate"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.hackathoneStartDate}
                        className={"w-auto"}
                      />

                      {/* Hackathone End Date */}
                      <InputField
                        label={"Hackathone End Date"}
                        value={formData.hackathoneEndDate}
                        type={"date"}
                        onChange={(e) => handleFormDataChange('hackathoneEndDate', e.target.value)}
                        name="hackathoneEndDate"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.hackathoneEndDate}
                        className={"w-auto"}
                      />
                    </div>




                  </motion.div>
                }

                {/* Step 1 */}
                {activeStep === 1 &&
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-4"
                  >

                    {/* Eligibility */}
                    <div className=''>
                      <InputField
                        label={"Eligibility"}
                        placeholder={"Enter eligibility"}
                        onChange={(e) => {
                          setFormDataErrors(prev => ({
                            ...prev,
                            [e.target.name]: ''
                          }))
                        }}
                        name="eligibility"
                        id="eligibility"
                        isRequired={true}
                        isEditing={isEditing}
                        error={formDataErrors.eligibility}
                        button={
                          <Button
                            onClick={(e) => {
                              const input = document.getElementById("eligibility");
                              if (input.value.trim().length === 0) {
                                input.value = '';
                                setFormDataErrors(prev => ({
                                  ...prev,
                                  [input.name]: 'Please enter eligibility!!'
                                }))
                                return;
                              }

                              // If eligibility alredy exists.
                              formData.eligibility.forEach((el) => {
                                if (input.value && el.toLowerCase() === input.value.toLowerCase().trim()) {
                                  setFormDataErrors(prev => ({
                                    ...prev,
                                    [input.name]: 'Eligibility already exists!!'
                                  }))
                                  return;
                                }
                              })

                              // Update form data.
                              setFormData(prev => ({
                                ...prev,
                                [input.name]: [input.value, ...prev[input.name.trim()]],
                              }))
                              input.value = ''
                            }}
                          >ADD</Button>
                        }
                      />

                      {/* Show all Eligibility */}
                      {(formData.eligibility.length > 0) &&
                        (<ul className='p-3 mt-2 shadow-sm rounded-2xl space-y-1' >
                          {formData.eligibility.map((el) => (
                            <li className='hover:bg-black/5 cursor-pointer py-1 px-2 rounded-sm flex justify-between'>
                              ✔ &nbsp; {el}
                              <Delete
                                onClick={(e) => {
                                  setFormData(prev => ({
                                    ...prev,
                                    eligibility: prev.eligibility.filter((item) => item !== el),
                                  }))
                                }}
                                className={"text-red-400"}
                              />
                            </li>
                          ))}
                        </ul>)
                      }
                    </div>

                    {/* Team Size */}
                    <InputField
                      label={"Team Size"}
                      value={formData.teamSize}
                      type='number'
                      onChange={(e) => handleFormDataChange('teamSize', e.target.value)}
                      placeholder={"Enter here"}
                      name="teamSize"
                      isRequired={true}
                      isEditing={isEditing}
                      error={formDataErrors.teamSize}
                    />

                    {/* Team Formation Required */}
                    <SelectField
                      label={"Team Formation Required"}
                      value={formData.teamFormationRequired}
                      name="teamFormationRequired"
                      onValueChange={(value) => handleFormDataChange('teamFormationRequired', value)}
                      placeholder={"Please Select..."}
                      options={[
                        {
                          label: 'Yes',
                          value: 'yes',
                        },
                        {
                          label: 'No',
                          value: 'no',
                        },
                      ]}
                      isEditing={isEditing}
                      isRequired={true}
                      error={formDataErrors.teamFormationRequired}
                    />







                  </motion.div>
                }

                {/* Step 2 */}
                {activeStep === 2 &&
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    Step 2 Content
                  </motion.div>
                }

                {/* Step 3 */}
                {activeStep === 3 &&
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    Step 3 Content
                  </motion.div>
                }

              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={activeStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${activeStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <ChevronLeft size={20} />
                <span>Back</span>
              </button>

              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${index === activeStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              {activeStep === steps.length - 1 ? (
                <button className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  <span>Publish Hackathon</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  <span>Next Step</span>
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateHackathoneForm;
