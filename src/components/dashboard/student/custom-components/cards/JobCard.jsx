import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    MapPin,
    Clock,
    Building2,
    Bookmark,
    BookmarkCheck,
    Share2,
    Users,
    Star,
    DollarSign,
    ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

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

    return (
        <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden">
            {job.isUrgent && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg font-medium">
                    Urgent Hiring
                </div>
            )}

            <CardHeader className="">
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
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
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

                <div className='flex'>
                    {/* Show details */}
                    <Link to={"/student/job-details"} className='w-full'>
                        <Button className="flex-1 w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-md transition-shadow">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                        </Button>
                    </Link>
                    {/* Bookmark and share */}
                    <div className='flex items-center justify-center gap-3'>
                        <button
                            onClick={() => toggleBookmark(job.id)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        >
                            {bookmarkedJobs.has(job.id) ? (
                                <BookmarkCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            ) : (
                                <Bookmark className="w-6 h-6 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                            )}
                        </button>
                        <Button variant="outline" size="sm" className="p-2">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default JobCard
