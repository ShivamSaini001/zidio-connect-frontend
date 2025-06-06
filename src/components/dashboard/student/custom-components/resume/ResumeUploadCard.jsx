import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Upload,
    Download,
    Trash2,
    FileText,
    CheckCircle,
} from 'lucide-react';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ResumeUploadCard = ({ 
    resumeFile, 
    isUploading, 
    uploadProgress, 
    onUpload, 
    onRemove, 
    onDownload 
}) => {
    // Create a reference to the file input
    const fileInputRef = useRef(null);

    // Function to trigger file input click
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Card className="border-2 dark:bg-gray-800/30 dark:border-gray-700">
            <CardHeader>
                <CardTitle className="text-xl font-semibold dark:text-white text-gray-900">
                    Resume Upload
                </CardTitle>
                <CardDescription className="dark:text-gray-400 text-gray-600">
                    Upload your resume to share with potential employers
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {isUploading && (
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium dark:text-gray-300">Uploading...</span>
                            <span className="text-sm font-medium dark:text-gray-300">{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2" />
                    </div>
                )}

                {resumeFile ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2 dark:text-white text-gray-900">
                            {resumeFile.name || 'Resume Uploaded'}
                        </h4>
                        <p className="mb-6 dark:text-gray-400 text-gray-600">
                            Resume uploaded successfully
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Button
                                onClick={onDownload}
                                className="flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </Button>
                            <Button
                                variant="outline"
                                onClick={onRemove}
                                className="flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                Remove
                            </Button>
                            <Button 
                                variant="secondary" 
                                className="flex items-center gap-2"
                                onClick={handleButtonClick}
                            >
                                <Upload className="w-4 h-4" />
                                Replace
                            </Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={onUpload}
                                className="hidden"
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                            <FileText className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2 dark:text-white text-gray-900">
                            Upload Your Resume
                        </h4>
                        <p className="mb-6 dark:text-gray-400 text-gray-600">
                            Share your experience with potential employers
                        </p>
                        <div className="flex justify-center">
                            <Button 
                                className="flex items-center gap-2 w-full sm:w-auto"
                                onClick={handleButtonClick}
                            >
                                <Upload className="w-4 h-4" />
                                Choose PDF File
                            </Button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={onUpload}
                                className="hidden"
                            />
                        </div>
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
};

export default ResumeUploadCard;