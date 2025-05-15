import React from 'react'
import { motion } from 'framer-motion';
import {
    BookOpen,
    Briefcase,
    FileText,
    GraduationCap,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";



const Services = () => {

    const colors = {
        darkBg: "#282f3e",
        darkAccent: "#303848",
        purple: "#8d7cff",
        blue: "#155dfc",
        white: "#ffffff",
        violet: "#a15eff"
    };

    const services = [
        {
            title: "Job Board",
            description: "Comprehensive job listing platform for employers and job seekers. Post vacancies, apply for positions, and track applications.",
            icon: <Briefcase className="h-10 w-10" style={{ color: colors.blue }} />,
            color: colors.blue
        },
        {
            title: "Internship Portal",
            description: "Connect students with valuable internship opportunities. Companies can post openings, and students can apply with their profiles.",
            icon: <BookOpen className="h-10 w-10" style={{ color: colors.purple }} />,
            color: colors.purple
        },
        {
            title: "Hackathons Management",
            description: "Create, edit, and share content across multiple platforms with ease. Schedule posts, track engagement, and analyze performance.",
            icon: <FileText className="h-10 w-10" style={{ color: colors.violet }} />,
            color: colors.violet
        },
        {
            title: "Course Management",
            description: "Organize, deliver, and track educational courses. Teachers can create content, while students can enroll and track progress.",
            icon: <GraduationCap className="h-10 w-10" style={{ color: colors.purple }} />,
            color: colors.purple
        },
    ];


    return (
        <div
            className="mb-24"
            
        >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => {
                    console.dir(service);
                    return <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <Card className="w-full h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border-none overflow-hidden" style={{ backgroundColor: colors.darkAccent }}>
                            <CardHeader className="flex flex-col items-center pb-2 relative">
                                <div className="absolute h-28" style={{
                                    background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`
                                }} ></div>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="relative z-10"
                                >
                                    {service.icon}
                                </motion.div>
                                <CardTitle className="mt-4 text-center text-white">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className={"text-white"}>
                                <CardDescription className="text-center text-opacity-80">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                }
                )}
            </div >
        </div >
    )
}

export default Services
