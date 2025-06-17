import React, { useState } from 'react';
import ResumeGenerateCard from '../resume/ResumeGenerateCard';
import ResumeUploadCard from '../resume/ResumeUploadCard';

const ResumeSection = () => {
    const [resumeFile, setResumeFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState('');

    // Handle resume upload
    const handleResumeUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type === 'application/pdf') {
            setError('');
            setIsUploading(true);

            // Simulate upload progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setUploadProgress(progress);

                if (progress >= 100) {
                    clearInterval(interval);
                    setResumeFile(file);
                    setIsUploading(false);
                }
            }, 200);
        } else {
            setError('Please upload a PDF file');
        }
    };

    // Handle resume removal
    const handleRemoveResume = () => {
        setResumeFile(null);
        setUploadProgress(0);
    };

    // Handle resume download
    const handleDownloadResume = () => {
        if (!resumeFile) return;

        const link = document.createElement('a');
        link.href = URL.createObjectURL(resumeFile);
        link.download = resumeFile.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResumeUploadCard
                    resumeFile={resumeFile}
                    isUploading={isUploading}
                    uploadProgress={uploadProgress}
                    onUpload={handleResumeUpload}
                    onRemove={handleRemoveResume}
                    onDownload={handleDownloadResume}
                />

                <ResumeGenerateCard
                    onResumeGenerated={setResumeFile}
                    setError={setError}
                />
            </div>
        </div>
    );
};

export default ResumeSection;
