import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Upload, Verified, Award, Users, BookOpen, MapPin, FileText, X, Download, XIcon, SaveIcon, EditIcon } from 'lucide-react';
import PersonalInformationCard from '../custom-components/profile/PersonalInformationCard';
import AddressCard from '../../common-components/AddressCard';
import ProfessionalDetailsCard from '../custom-components/profile/ProfessionalDetailsCard';
import { getCurrentUserEmail, getTeacherProfileByEmail, updateTeacherProfile } from '@/services/UserProfileService';

const TeacherProfilePage = () => {

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    mobile: '',
    gender: '',
    dateOfBirth: '',
    bio: '',
    profileImageUrl: '',
    linkedinProfileUrl: '',

    // Professional Details
    designation: '',
    yearOfExperience: '',
    highestQualification: '',
    specializations: [],
    languagesKnown: [],

    // Teaching Preferences
    modeOfTeaching: [],
    preferredStudentLevel: [],

    // Portfolio
    resumeUpload: null,
    certifications: [],
    portfolioWebsiteUrl: '',

    // System fields
    isVerified: true,
    isFeatured: true,
    teacherRating: 0.0,
    totalEnrollments: 0
  });

  console.log(formData)

  useEffect(() => {
    const teacherProfile = getTeacherProfileByEmail(getCurrentUserEmail());
    teacherProfile.then((data) => {
      console.log(data);
      setFormData(data);;
    })
  }, []);

  const [formDataBackup, setFormDataBackup] = useState(null);

  const [address, setAddress] = useState({
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'United State'
  });

  const [profileImage, setProfileImage] = useState(null);
  const [resumeUpload, setResumeUpload] = useState(null);
  const [certifications, setCertifications] = useState([]);

  const [activeTab, setActiveTab] = useState('personal');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [isUploadingCerts, setIsUploadingCerts] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploadingImage(true);

      // Create a file reader to convert image to base64 for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          handleInputChange('profileImageUrl', e.target.result);
          setIsUploadingImage(false);
        }, 1000); // Simulate upload delay
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setIsUploadingResume(true);

      setTimeout(() => {
        const resumeData = {
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          uploadDate: new Date().toLocaleDateString(),
          file: file
        };
        handleInputChange('resumeUpload', resumeData);
        setIsUploadingResume(false);
      }, 1500);
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const handleCertificationUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setIsUploadingCerts(true);

      setTimeout(() => {
        const newCertifications = files.map((file, index) => ({
          id: Date.now() + index,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          uploadDate: new Date().toLocaleDateString(),
          type: file.type.includes('pdf') ? 'PDF' : 'Image',
          file: file
        }));

        handleInputChange('certifications', [...formData.certifications, ...newCertifications]);
        setIsUploadingCerts(false);
      }, 2000);
    }
  };

  const removeCertification = (id) => {
    const updatedCerts = formData.certifications.filter(cert => cert.id !== id);
    handleInputChange('certifications', updatedCerts);
  };

  const removeResume = () => {
    handleInputChange('resumeUpload', null);
  };

  const triggerImageUpload = () => {
    document.getElementById('imageUpload').click();
  };

  const triggerResumeUpload = () => {
    document.getElementById('resumeUpload').click();
  };

  const triggerCertificationUpload = () => {
    document.getElementById('certificationUpload').click();
  };

  // Handle Save, Edit and Delete.
  const handleCancel = () => {
    setIsEditing(false);
    // You can add logic here to revert changes if needed
    setFormData(formDataBackup);
  };

  const handleEdit = (e) => {
    setIsEditing(true);
    setFormDataBackup({ ...formData });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here (API call, etc.)
    console.log(getCurrentUserEmail())
    const updatedProfileData = updateTeacherProfile(getCurrentUserEmail(), formData);
    updatedProfileData.then((data) => {
      console.log(data);
      setFormData(data);
      setFormDataBackup(null);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  const handleMultiSelectChange = (name, value, isChecked) => {
    if (isChecked) {
      setFormData(prev => ({ ...prev, [name]: [...prev[name], value] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: prev[name].filter(item => item !== value) }))
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Top Header with Edit/Save Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Teacher Profile</h1>
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <XIcon className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <SaveIcon className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </>
          ) : (
            <Button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-700">
              <EditIcon className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Hidden file inputs */}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      <input
        id="resumeUpload"
        type="file"
        accept=".pdf"
        onChange={handleResumeUpload}
        className="hidden"
      />
      <input
        id="certificationUpload"
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        multiple
        onChange={handleCertificationUpload}
        className="hidden"
      />

      {/* Show Profile Details Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          {formData?.isVerified && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Verified className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
          {formData?.isFeatured && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 ml-2">
              <Award className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        <CardContent className="pt-6">
          <div className="flex items-start space-x-6">
            {/* Upload profile picture */}
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src={formData?.profileImageUrl} alt={formData.firstName + formData.lastName} />
                <AvatarFallback>{formData?.firstName?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              {isUploadingImage && (
                <div className="w-24 h-24 absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                </div>
              )}

              {/* Update button below profile picture - only show in edit mode */}
              <div className="flex flex-col space-y-2">
                <Button
                  onClick={triggerImageUpload}
                  disabled={isUploadingImage}
                  size="sm"
                  variant="outline"
                  className="mt-2 w-full text-xs"
                >
                  <Upload className="w-3 h-3 mr-1" />
                  {isUploadingImage ? 'Uploading...' : 'Update'}
                </Button>
                <p className="text-xs text-gray-500">JPG, PNG, max 5MB</p>
              </div>
            </div>

            <div className="flex-1">
              {/* Full Name */}
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold">{formData.firstName + ' ' + formData.lastName}</h1>
              </div>

              {/* Designation */}
              <p className="text-lg text-muted-foreground mb-2">{formData.designation}</p>

              {/* Teaching Experience, Total Enrollments, Country */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {formData.yearOfExperience} years experience
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {formData?.totalEnrollments} students
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {address.country}
                </div>
              </div>

              {/* Teacher Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {renderStars(formData?.teacherRating ?? 0)}
                  <span className="ml-2 text-sm font-medium">{formData?.teacherRating ?? 0}</span>
                </div>
              </div>

              {/* Subjects of Expertise */}
              <div className="flex flex-wrap gap-2">
                {formData?.specializations?.slice(0, 5).map((subject, index) => (
                  <Badge key={index} variant="outline">{subject}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="space-y-6">
          <PersonalInformationCard
            formData={formData}
            handleInputChange={handleInputChange}
            isEditing={isEditing}
            handleSelectChange={handleSelectChange}
          />
          <AddressCard />
        </TabsContent>

        {/* Professional Details Tab */}
        <TabsContent value="professional" className="space-y-6">
          <ProfessionalDetailsCard
            formData={formData}
            handleInputChange={handleInputChange}
            isEditing={isEditing}
            handleMultiSelectChange={handleMultiSelectChange}
            handleSelectChange={handleSelectChange}
          />
        </TabsContent>

        {/* Portfolio Tab */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio & Credentials</CardTitle>
              <CardDescription>Upload documents and links to build trust and showcase expertise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Resume / CV Upload</Label>
                {formData.resumeUpload ? (
                  <div className="mt-2 border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-red-600" />
                        <div>
                          <p className="font-medium">{formData.resumeUpload.name}</p>
                          <p className="text-sm text-gray-500">
                            {formData.resumeUpload.size} • Uploaded on {formData.resumeUpload.uploadDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" onClick={removeResume}>
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2">
                      <Button
                        variant="outline"
                        onClick={triggerResumeUpload}
                        disabled={isUploadingResume}
                      >
                        {isUploadingResume ? 'Uploading...' : 'Choose File'}
                      </Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">PDF format preferred, max 10MB</p>
                  </div>
                )}
              </div>

              <div>
                <Label>Certification Uploads</Label>

                {/* Upload Area */}
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      onClick={triggerCertificationUpload}
                      disabled={isUploadingCerts}
                    >
                      {isUploadingCerts ? 'Uploading...' : 'Upload Certifications'}
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    PDF, JPG, PNG • Multiple files allowed • Max 5MB each
                  </p>
                </div>

                {/* Display Uploaded Certificates */}
                {formData?.certifications?.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <Label className="text-sm font-medium">Uploaded Certifications ({formData?.certifications?.length})</Label>
                    {formData.certifications.map((cert) => (
                      <div key={cert.id} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              {cert.type === 'PDF' ? (
                                <FileText className="h-6 w-6 text-red-600" />
                              ) : (
                                <div className="h-6 w-6 bg-blue-100 rounded flex items-center justify-center">
                                  <span className="text-xs text-blue-600 font-medium">IMG</span>
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{cert.name}</p>
                              <p className="text-xs text-gray-500">
                                {cert.size} • {cert.type} • {cert.uploadDate}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                              onClick={() => removeCertification(cert.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>


    </div >
  );
};

export default TeacherProfilePage
