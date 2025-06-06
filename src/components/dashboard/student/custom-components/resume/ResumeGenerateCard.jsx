import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileType } from 'lucide-react';
import { useForm } from 'react-hook-form';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

const ResumeGenerateCard = ({ onResumeGenerated, setError }) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    // Initialize form with react-hook-form
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            education: '',
            experience: '',
            skills: '',
            jobTitle: '',
            experienceLevel: 'entry',
            additionalInfo: ''
        }
    });

    // Handle AI resume generation
    const handleGenerateResume = (data) => {
        // Check if required fields are filled
        if (!data.fullName || !data.email || !data.skills) {
            setError('Please fill in all required fields');
            return;
        }

        setError('');
        setIsGenerating(true);

        // Simulate AI generation
        setTimeout(() => {
            // Create a simple PDF blob for demo purposes
            const pdfBlob = new Blob(['Generated Resume Content'], { type: 'application/pdf' });
            const file = new File([pdfBlob], `${data.fullName.replace(/\s+/g, '-').toLowerCase()}-resume.pdf`, { type: 'application/pdf' });
            onResumeGenerated(file);
            setIsGenerating(false);
            setIsDialogOpen(false);
            form.reset();
        }, 3000);
    };

    return (
        <Card className="border-2 dark:bg-gray-800/30 dark:border-gray-700">
            <CardHeader>
                <CardTitle className="text-xl font-semibold dark:text-white text-gray-900">
                    AI Resume Generator
                </CardTitle>
                <CardDescription className="dark:text-gray-400 text-gray-600">
                    Create a professional resume with AI assistance
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white text-gray-900">
                        Generate Resume with AI
                    </h4>
                    <p className="mb-4 sm:mb-6 dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                        Let AI create a professional resume based on your experience and skills
                    </p>
                    
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2 w-full max-w-xs mx-auto sm:w-auto">
                                <Sparkles className="w-4 h-4" />
                                Generate with AI
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[90vw] md:max-w-[600px] p-4 sm:p-6 dark:bg-gray-800 dark:text-white overflow-y-auto max-h-[90vh]">
                            <DialogHeader className="mb-2 sm:mb-4">
                                <DialogTitle className="text-lg sm:text-xl">Generate Resume with AI</DialogTitle>
                                <DialogDescription className="dark:text-gray-400 text-sm">
                                    Fill in your details to generate a professional resume
                                </DialogDescription>
                            </DialogHeader>
                            
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleGenerateResume)} className="space-y-3 sm:space-y-4 py-2 sm:py-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {/* Personal Information */}
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-sm sm:text-base">Full Name*</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} className="text-sm sm:text-base" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-sm sm:text-base">Email*</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john@example.com" {...field} className="text-sm sm:text-base" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+1 (555) 123-4567" {...field} className="text-sm sm:text-base" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="jobTitle"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-sm sm:text-base">Desired Job Title</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Software Engineer" {...field} className="text-sm sm:text-base" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        
                                        <FormField
                                            control={form.control}
                                            name="experienceLevel"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col sm:col-span-2 md:col-span-1">
                                                    <FormLabel className="text-sm sm:text-base">Experience Level</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="text-sm sm:text-base">
                                                                <SelectValue placeholder="Select experience level" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="entry">Entry Level</SelectItem>
                                                            <SelectItem value="mid">Mid Level</SelectItem>
                                                            <SelectItem value="senior">Senior Level</SelectItem>
                                                            <SelectItem value="executive">Executive Level</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    
                                    {/* Education */}
                                    <FormField
                                        control={form.control}
                                        name="education"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-sm sm:text-base">Education</FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="University of Example, Bachelor of Science in Computer Science, 2018-2022" 
                                                        className="min-h-[60px] sm:min-h-[80px] text-sm sm:text-base dark:bg-gray-700 dark:border-gray-600 resize-y"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormDescription className="text-xs">
                                                    List your degrees, institutions, and graduation years
                                                </FormDescription>
                                                <FormMessage className="text-xs" />
                                            </FormItem>
                                        )}
                                    />
                                    
                                    {/* Experience */}
                                    <FormField
                                        control={form.control}
                                        name="experience"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-sm sm:text-base">Work Experience</FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="Software Engineer at Example Inc., 2022-Present. Developed and maintained web applications..." 
                                                        className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base dark:bg-gray-700 dark:border-gray-600 resize-y"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormDescription className="text-xs">
                                                    List your job titles, companies, dates, and key responsibilities
                                                </FormDescription>
                                                <FormMessage className="text-xs" />
                                            </FormItem>
                                        )}
                                    />
                                    
                                    {/* Skills */}
                                    <FormField
                                        control={form.control}
                                        name="skills"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-sm sm:text-base">Skills*</FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="JavaScript, React, Node.js, SQL, Git, Agile Development" 
                                                        className="min-h-[60px] sm:min-h-[80px] text-sm sm:text-base dark:bg-gray-700 dark:border-gray-600 resize-y"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormDescription className="text-xs">
                                                    List your technical and soft skills, separated by commas
                                                </FormDescription>
                                                <FormMessage className="text-xs" />
                                            </FormItem>
                                        )}
                                    />
                                    
                                    {/* Additional Information */}
                                    <FormField
                                        control={form.control}
                                        name="additionalInfo"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-sm sm:text-base">Additional Information</FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="Certifications, awards, languages, or other relevant information" 
                                                        className="min-h-[60px] sm:min-h-[80px] text-sm sm:text-base dark:bg-gray-700 dark:border-gray-600 resize-y"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs" />
                                            </FormItem>
                                        )}
                                    />
                                    
                                    <DialogFooter className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-0">
                                        <DialogClose asChild>
                                            <Button type="button" variant="outline" className="w-full sm:w-auto dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            type="submit"
                                            disabled={isGenerating}
                                            className="flex items-center justify-center gap-2 w-full sm:w-auto"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                                    Generating...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="w-4 h-4" />
                                                    Generate
                                                </>
                                            )}
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </CardContent>
        </Card>
    );
};

export default ResumeGenerateCard;