import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    MapPin,
    Clock,
    Calendar,
    Trophy,
    Building2,
    Bookmark,
    BookmarkCheck,
    Share2,
    Eye,
    Users,
    TrendingUp,
    Star,
    DollarSign,
    Timer,
    Award,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

const JobsSection = () => {
    const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());

    const toggleBookmark = (jobId) => {
        setBookmarkedJobs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(jobId)) {
                newSet.delete(jobId);
            } else {
                newSet.add(jobId);
            }
            return newSet;
        });
    };

    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechCorp",
            logo: "🚀",
            location: "Remote",
            type: "Full-Time",
            experience: "2-4 years",
            salary: "₹8-15 LPA",
            tags: ["React", "TypeScript", "CSS"],
            postedDays: "2 days ago",
            applicants: 45,
            isUrgent: false,
            rating: 4.5
        },
        {
            id: 2,
            title: "Python Developer",
            company: "DataFlow",
            logo: "📊",
            location: "Bangalore",
            type: "Full-Time",
            experience: "0-2 years",
            salary: "₹4-8 LPA",
            tags: ["Python", "Django", "PostgreSQL"],
            postedDays: "1 day ago",
            applicants: 78,
            isUrgent: true,
            rating: 4.2
        },
        {
            id: 3,
            title: "DevOps Engineer",
            company: "CloudTech",
            logo: "☁️",
            location: "Mumbai",
            type: "Full-Time",
            experience: "3-5 years",
            salary: "₹12-20 LPA",
            tags: ["AWS", "Docker", "Kubernetes"],
            postedDays: "3 days ago",
            applicants: 32,
            isUrgent: false,
            rating: 4.7
        },
        {
            id: 4,
            title: "UI/UX Designer",
            company: "DesignLab",
            logo: "🎨",
            location: "Remote",
            type: "Part-Time",
            experience: "1-3 years",
            salary: "₹3-6 LPA",
            tags: ["Figma", "Sketch", "Prototyping"],
            postedDays: "5 days ago",
            applicants: 67,
            isUrgent: false,
            rating: 4.3
        },
        {
            id: 5,
            title: "Data Scientist",
            company: "AI Innovations",
            logo: "🤖",
            location: "Hyderabad",
            type: "Full-Time",
            experience: "2-4 years",
            salary: "₹10-18 LPA",
            tags: ["Python", "ML", "TensorFlow"],
            postedDays: "1 day ago",
            applicants: 89,
            isUrgent: true,
            rating: 4.6
        },
        {
            id: 6,
            title: "Mobile Developer",
            company: "AppWorks",
            logo: "📱",
            location: "Delhi",
            type: "Full-Time",
            experience: "0-2 years",
            salary: "₹5-10 LPA",
            tags: ["React Native", "Flutter", "iOS"],
            postedDays: "4 days ago",
            applicants: 54,
            isUrgent: false,
            rating: 4.1
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Find Full-Time Job Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Explore roles from top companies • {jobs.length} jobs available
                        </p>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Updated 2 hours ago</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {jobs.map((job) => (
                        <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden">
                            {job.isUrgent && (
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium">
                                    Urgent Hiring
                                </div>
                            )}

                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                                            {job.logo}
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {job.title}
                                            </CardTitle>
                                            <div className="flex items-center mt-1 space-x-2">
                                                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                                    <Building2 className="w-3 h-3 mr-1" />
                                                    {job.company}
                                                </p>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-xs text-gray-500">{job.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleBookmark(job.id)}
                                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                    >
                                        {bookmarkedJobs.has(job.id) ? (
                                            <BookmarkCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        ) : (
                                            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                                        )}
                                    </button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                                        <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                                        {job.salary}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        {job.type}
                                    </Badge>
                                    <Badge variant="outline" className="border-gray-300 dark:border-gray-600 text-xs">
                                        {job.experience}
                                    </Badge>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                    {job.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center">
                                            <Users className="w-3 h-3 mr-1" />
                                            {job.applicants} applied
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {job.postedDays}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="flex space-x-2 pt-4">
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-md transition-shadow">
                                    Apply Now
                                </Button>
                                <Button variant="outline" size="sm" className="p-2">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="p-2">
                                    <Eye className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                        Browse All Jobs
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};


export default JobsSection;