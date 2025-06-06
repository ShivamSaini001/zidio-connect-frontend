import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobCard from '../../custom-components/cards/JobCard';

const JobsSection = () => {

    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechCorp",
            logo: "🚀",
            location: "India (Remote)",
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
        <section className="py-7 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-5">
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

                <div className="flex mb-10 justify-center w-full px-10">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-11/12"
                    >
                        <CarouselContent>
                            {jobs.map((job, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <JobCard job={job} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
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