import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    MapPin,
    Clock,
    Calendar,
    Building2,
    Bookmark,
    BookmarkCheck,
    Share2,
    Users,
    Star,
    DollarSign,
    Timer,
    ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const InternshipCard = ({ internship }) => {

    const [bookmarkedInternships, setBookmarkedInternships] = useState(new Set());

    const toggleBookmark = (internshipId) => {
        setBookmarkedInternships(prev => {
            const newSet = new Set(prev);
            if (newSet.has(internshipId)) {
                newSet.delete(internshipId);
            } else {
                newSet.add(internshipId);
            }
            return newSet;
        });
    };

    const getDeadlineUrgency = (deadline) => {
        const today = new Date();
        const deadlineDate = new Date(deadline);
        const diffTime = deadlineDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 2) return 'urgent';
        if (diffDays <= 7) return 'soon';
        return 'normal';
    };

    const urgency = getDeadlineUrgency(internship.deadline);

    return (
        <Card key={internship.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 relative overflow-hidden">
            {internship.isRemote && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br-lg font-medium">
                    Remote
                </div>
            )}

            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                            {internship.logo}
                        </div>
                        <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                {internship.title}
                            </CardTitle>
                            <div className="flex items-center mt-1 space-x-2">
                                <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                    <Building2 className="w-3 h-3 mr-1" />
                                    {internship.company}
                                </p>
                                <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs text-gray-500">{internship.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {internship.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        {internship.duration}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <Badge variant={internship.stipend === "Unpaid" ? "secondary" : "default"}
                        className={internship.stipend === "Unpaid" ?
                            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300" :
                            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}>
                        <DollarSign className="w-3 h-3 mr-1" />
                        {internship.stipend}
                    </Badge>
                    <div className="text-xs text-gray-500 flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {internship.applicants} applied
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        Starts: {internship.startDate}
                    </div>
                    <div className={`flex items-center font-medium ${urgency === 'urgent' ? 'text-red-600 dark:text-red-400' :
                        urgency === 'soon' ? 'text-orange-600 dark:text-orange-400' :
                            'text-gray-600 dark:text-gray-300'
                        }`}>
                        <Timer className="w-4 h-4 mr-2" />
                        Deadline: {internship.deadline}
                        {urgency === 'urgent' && (
                            <Badge variant="destructive" className="ml-2 text-xs">
                                Urgent
                            </Badge>
                        )}
                    </div>
                </div>
                <div className='flex items-center justify-end gap-3'>
                    {/* Apply Button */}
                    <Link to={'/student/internship-details'} className='w-full'>
                        <Button className="flex-1 w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-md transition-shadow">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                        </Button>
                    </Link>
                    {/* Bookmark section */}
                    <button
                        onClick={() => toggleBookmark(internship.id)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                        {bookmarkedInternships.has(internship.id) ? (
                            <BookmarkCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                            <Bookmark className="w-6 h-6 text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
                        )}
                    </button>
                    {/* Share button */}
                    <Button variant="outline" size="sm" className="p-2">
                        <Share2 className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default InternshipCard
