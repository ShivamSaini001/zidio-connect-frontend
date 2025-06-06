import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import HackathoneCard from '../../custom-components/cards/HackathoneCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const HackathonsSection = () => {
    
    const hackathons = [
        {
            id: 1,
            name: "AI Innovation Challenge",
            organizer: "TechGiants",
            logo: "🤖",
            startDate: "June 1, 2025",
            endDate: "June 3, 2025",
            prizePool: "₹1,00,000",
            status: "Upcoming",
            deadline: "May 28, 2025",
            participants: 450,
            teams: 125,
            difficulty: "Advanced",
            category: "AI/ML"
        },
        {
            id: 2,
            name: "Web3 Hackathon",
            organizer: "BlockchainHub",
            logo: "⛓️",
            startDate: "May 25, 2025",
            endDate: "May 27, 2025",
            prizePool: "₹75,000",
            status: "Ongoing",
            deadline: "Closed",
            participants: 320,
            teams: 89,
            difficulty: "Intermediate",
            category: "Blockchain"
        },
        {
            id: 3,
            name: "Green Tech Challenge",
            organizer: "EcoInnovators",
            logo: "🌱",
            startDate: "June 15, 2025",
            endDate: "June 17, 2025",
            prizePool: "₹50,000",
            status: "Upcoming",
            deadline: "June 10, 2025",
            participants: 280,
            teams: 78,
            difficulty: "Beginner",
            category: "Sustainability"
        },
        {
            id: 4,
            name: "Mobile App Marathon",
            organizer: "AppDevs",
            logo: "📱",
            startDate: "July 1, 2025",
            endDate: "July 3, 2025",
            prizePool: "₹80,000",
            status: "Upcoming",
            deadline: "June 25, 2025",
            participants: 180,
            teams: 52,
            difficulty: "Intermediate",
            category: "Mobile Dev"
        },
        {
            id: 5,
            name: "FinTech Innovation",
            organizer: "FinanceForward",
            logo: "💳",
            startDate: "June 20, 2025",
            endDate: "June 22, 2025",
            prizePool: "₹1,20,000",
            status: "Upcoming",
            deadline: "June 15, 2025",
            participants: 380,
            teams: 95,
            difficulty: "Advanced",
            category: "FinTech"
        }
    ];

    return (
        <section className="py-7 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Join Live Hackathons
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Compete, collaborate, and win prizes • {hackathons.length} events available
                        </p>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                            {hackathons.filter(h => h.status === "Ongoing").length} Live
                        </Badge>
                        <Badge variant="outline">
                            Total Prize: ₹{hackathons.reduce((sum, h) => sum + parseInt(h.prizePool.replace(/[₹,]/g, '')), 0).toLocaleString()}
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex mb-10 justify-center w-full px-10">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-11/12"
                    >
                        <CarouselContent>
                            {hackathons.map((hackathon, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <HackathoneCard hackathon={hackathon} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="text-center mt-8">
                    <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950">
                        Browse All Hackathons
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HackathonsSection;