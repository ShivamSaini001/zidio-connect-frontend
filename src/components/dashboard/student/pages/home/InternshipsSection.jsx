import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import InternshipCard from '../../custom-components/cards/InternshipCard';


const InternshipsSection = () => {


  const internships = [
    {
      id: 1,
      title: "Marketing Intern",
      company: "GrowthTech",
      logo: "📈",
      location: "Mumbai",
      duration: "3 Months",
      stipend: "₹8000/month",
      startDate: "June 1, 2025",
      deadline: "May 30, 2025",
      applicants: 34,
      isRemote: false,
      type: "Paid",
      rating: 4.3
    },
    {
      id: 2,
      title: "Software Development Intern",
      company: "CodeBase",
      logo: "💻",
      location: "Remote",
      duration: "6 Months",
      stipend: "₹12000/month",
      startDate: "June 15, 2025",
      deadline: "June 5, 2025",
      applicants: 128,
      isRemote: true,
      type: "Paid",
      rating: 4.6
    },
    {
      id: 3,
      title: "Design Intern",
      company: "CreativeStudio",
      logo: "🎯",
      location: "Bangalore",
      duration: "4 Months",
      stipend: "₹6000/month",
      startDate: "July 1, 2025",
      deadline: "June 20, 2025",
      applicants: 67,
      isRemote: false,
      type: "Paid",
      rating: 4.2
    },
    {
      id: 4,
      title: "Data Analytics Intern",
      company: "DataInsights",
      logo: "📊",
      location: "Delhi",
      duration: "3 Months",
      stipend: "₹10000/month",
      startDate: "June 10, 2025",
      deadline: "May 28, 2025",
      applicants: 45,
      isRemote: false,
      type: "Paid",
      rating: 4.4
    },
    {
      id: 5,
      title: "Content Writing Intern",
      company: "MediaHouse",
      logo: "✍️",
      location: "Remote",
      duration: "2 Months",
      stipend: "Unpaid",
      startDate: "June 5, 2025",
      deadline: "May 25, 2025",
      applicants: 89,
      isRemote: true,
      type: "Unpaid",
      rating: 3.9
    },
    {
      id: 6,
      title: "Business Development Intern",
      company: "StartupHub",
      logo: "🚀",
      location: "Pune",
      duration: "4 Months",
      stipend: "₹7000/month",
      startDate: "July 15, 2025",
      deadline: "June 30, 2025",
      applicants: 23,
      isRemote: false,
      type: "Paid",
      rating: 4.1
    }
  ];

  return (
    <section className="py-7 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Internships for Students & Freshers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Gain hands-on experience with real-world projects • {internships.length} opportunities
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {internships.filter(i => i.type === "Paid").length} Paid
            </Badge>
            <Badge variant="outline">
              {internships.filter(i => i.isRemote).length} Remote
            </Badge>
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
              {internships.map((internship, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <InternshipCard internship={internship} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950">
            View All Internships
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section >
  );
};

export default InternshipsSection;