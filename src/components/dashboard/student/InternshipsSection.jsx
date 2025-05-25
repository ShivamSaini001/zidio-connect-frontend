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



const InternshipsSection = () => {
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

  const getDeadlineUrgency = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 2) return 'urgent';
    if (diffDays <= 7) return 'soon';
    return 'normal';
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {internships.map((internship) => {
            const urgency = getDeadlineUrgency(internship.deadline);
            
            return (
              <Card key={internship.id} className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 relative overflow-hidden">
                {internship.isRemote && (
                  <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br-lg font-medium">
                    Remote
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
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
                    <button
                      onClick={() => toggleBookmark(internship.id)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                      {bookmarkedInternships.has(internship.id) ? (
                        <BookmarkCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Bookmark className="w-5 h-5 text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
                      )}
                    </button>
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
                    <div className={`flex items-center font-medium ${
                      urgency === 'urgent' ? 'text-red-600 dark:text-red-400' :
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
                </CardContent>
                
                <CardFooter className="flex space-x-2 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white group-hover:shadow-md transition-shadow">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950">
            View All Internships
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;