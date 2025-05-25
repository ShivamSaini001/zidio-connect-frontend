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

const HackathonsSection = () => {
    const [bookmarkedHackathons, setBookmarkedHackathons] = useState(new Set());

    const toggleBookmark = (hackathonId) => {
        setBookmarkedHackathons(prev => {
            const newSet = new Set(prev);
            if (newSet.has(hackathonId)) {
                newSet.delete(hackathonId);
            } else {
                newSet.add(hackathonId);
            }
            return newSet;
        });
    };

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

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
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

            <div className="overflow-x-auto pb-4">
                <div className="flex space-x-6 min-w-max lg:grid lg:grid-cols-3 lg:gap-6 lg:space-x-0">
                    {hackathons.map((hackathon) => (
                        <Card key={hackathon.id} className="flex-shrink-0 w-80 lg:w-auto group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 relative overflow-hidden">
                            {hackathon.status === "Ongoing" && (
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium animate-pulse">
                                    Live Now
                                </div>
                            )}

                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 p-3 rounded-xl">
                                            {hackathon.logo}
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {hackathon.name}
                                            </CardTitle>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                by {hackathon.organizer}
                                            </p>
                                            <Badge variant="secondary" className="mt-1 text-xs">
                                                {hackathon.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleBookmark(hackathon.id)}
                                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                    >
                                        {bookmarkedHackathons.has(hackathon.id) ? (
                                            <BookmarkCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        ) : (
                                            <Bookmark className="w-5 h-5 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" />
                                        )}
                                    </button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Badge variant={hackathon.status === "Ongoing" ? "default" : "secondary"}
                                        className={hackathon.status === "Ongoing" ?
                                            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                                            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"}>
                                        {hackathon.status}
                                    </Badge>
                                    <Badge className={getDifficultyColor(hackathon.difficulty)}>
                                        {hackathon.difficulty}
                                    </Badge>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                                            <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                                            {hackathon.startDate} - {hackathon.endDate}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-lg font-semibold text-green-600 dark:text-green-400">
                                            <Trophy className="w-5 h-5 mr-2" />
                                            {hackathon.prizePool}
                                        </div>
                                        <div className="text-xs text-gray-500 text-right">
                                            <div className="flex items-center">
                                                <Users className="w-3 h-3 mr-1" />
                                                {hackathon.participants} participants
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <Award className="w-3 h-3 mr-1" />
                                                {hackathon.teams} teams
                                            </div>
                                        </div>
                                    </div>

                                    {hackathon.deadline !== "Closed" && (
                                        <div className="text-orange-600 dark:text-orange-400 font-medium text-sm flex items-center">
                                            <Timer className="w-4 h-4 mr-2" />
                                            Registration ends: {hackathon.deadline}
                                        </div>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="flex space-x-2 pt-4">
                                <Button
                                    className="flex-1 group-hover:shadow-md transition-shadow"
                                    variant={hackathon.status === "Ongoing" ? "secondary" : "default"}
                                    disabled={hackathon.deadline === "Closed"}
                                >
                                    {hackathon.deadline === "Closed" ? "Registration Closed" : "Register Now"}
                                </Button>
                                <Button variant="outline" size="sm" className="p-2">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="p-2">
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
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