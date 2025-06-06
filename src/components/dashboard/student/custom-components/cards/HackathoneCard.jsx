import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    Trophy,
    Bookmark,
    BookmarkCheck,
    Share2,
    Users,
    Timer,
    Award,
} from 'lucide-react';
import { Link } from 'react-router';

const HackathoneCard = ({ hackathon }) => {

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

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    return (
        <Card key={hackathon.id} className="flex-shrink-0 w-80 lg:w-auto group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 relative overflow-hidden">
            {hackathon.status === "Ongoing" && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium animate-pulse">
                    Live Now
                </div>
            )}

            <CardHeader className="">
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
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
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

                <div className="space-y-2">
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
                        <div className="flex gap-5 text-xs text-gray-500 text-right">
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

            <CardFooter className="flex space-x-2 mt-auto">
                {/* Apply bytton */}
                <Link to={"/student/hackathon-details"}>
                    <Button
                        className="flex-1 group-hover:shadow-md transition-shadow"
                        variant={hackathon.status === "Ongoing" ? "secondary" : "default"}
                        disabled={hackathon.deadline === "Closed"}
                    >
                        {hackathon.deadline === "Closed" ? "Registration Closed" : "Register Now"}
                    </Button>
                </Link>
                {/* Bookmark button */}
                <button
                    onClick={() => toggleBookmark(hackathon.id)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                    {bookmarkedHackathons.has(hackathon.id) ? (
                        <BookmarkCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    ) : (
                        <Bookmark className="w-6 h-6 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" />
                    )}
                </button>
                {/* Share button */}
                <Button variant="outline" size="sm" className="p-2">
                    <Share2 className="w-4 h-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}

export default HackathoneCard
