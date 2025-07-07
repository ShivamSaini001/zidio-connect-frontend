import { useState } from 'react';
import { ChevronRight, Briefcase, Code, BookOpen, Users } from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('student');

  const roleInfo = {
    student: {
      title: "Kickstart Your Career Journey",
      description: "Access top internships, participate in industry hackathons, and upskill with expert-led courses — all in one place.",
      cta: "Join as Student",
      features: ["Apply to verified opportunities", "Build your portfolio with hackathons", "Learn in-demand skills"],
      image: "/api/placeholder/600/400",
      color: "bg-blue-600"
    },
    recruiter: {
      title: "Find Top Talent Effortlessly",
      description: "Post jobs, review qualified candidates, and connect with skilled professionals ready to contribute to your team.",
      cta: "Recruit Top Talent",
      features: ["Post jobs and internships", "Conduct skill assessments", "Track applicant progress"],
      image: "/api/placeholder/600/400",
      color: "bg-green-600"
    },
    teacher: {
      title: "Share Your Knowledge, Expand Your Impact",
      description: "Create courses, mentor students, and help shape the next generation of industry professionals.",
      cta: "Become an Instructor",
      features: ["Create engaging courses", "Mentor students", "Earn from your expertise"],
      image: "/api/placeholder/600/400",
      color: "bg-purple-600"
    },
    admin: {
      title: "Powerful Platform Management",
      description: "Oversee all platform activities, ensure quality standards, and drive growth with comprehensive analytics.",
      cta: "Admin Dashboard",
      features: ["Monitor platform metrics", "Manage users and content", "Ensure platform integrity"],
      image: "/api/placeholder/600/400",
      color: "bg-red-600"
    }
  };

  return (
    <div className="">
      {/* Hero section with dynamic content based on selected role */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute"></div>
        
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span className="block">Your All-in-One Platform for</span>
              <span className="block min-h-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Growth, Learning & Opportunities
              </span> 
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Connecting talents with opportunities, knowledge with learners, and ideas with execution.
            </p>
          </div>
          
          {/* Role selector tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(roleInfo).map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`px-5 py-2 rounded-full capitalize font-medium text-sm transition-all duration-200 ${
                  activeTab === role
                    ? `${roleInfo[role].color} text-white`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          
          {/* Dynamic content based on selected role */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                {roleInfo[activeTab].title}
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                {roleInfo[activeTab].description}
              </p>
              
              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {roleInfo[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <ChevronRight className="h-5 w-5 mr-2 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button className={`${roleInfo[activeTab].color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg`}>
                  {roleInfo[activeTab].cta}
                </button>
                <button className="bg-transparent border border-gray-400 hover:border-white text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Visual content */}
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-5 shadow-2xl">
                {/* Platform features with icons */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-gray-700 rounded-xl p-4 flex items-center">
                    <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-3">
                      <Briefcase className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Jobs & Internships</h3>
                      <p className="text-gray-400 text-sm">Find opportunities</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 flex items-center">
                    <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-3">
                      <Code className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Hackathons</h3>
                      <p className="text-gray-400 text-sm">Compete & win</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 flex items-center">
                    <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-3">
                      <BookOpen className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Courses</h3>
                      <p className="text-gray-400 text-sm">Learn & grow</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-xl p-4 flex items-center">
                    <div className="bg-red-500 bg-opacity-20 p-3 rounded-lg mr-3">
                      <Users className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Community</h3>
                      <p className="text-gray-400 text-sm">Connect & network</p>
                    </div>
                  </div>
                </div>
                
                {/* Platform dashboard preview */}
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                  <img 
                    src={roleInfo[activeTab].image} 
                    alt={`${activeTab} interface`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">5000+</p>
              <p className="text-gray-400">Active Jobs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">2M+</p>
              <p className="text-gray-400">Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-gray-400">Courses</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">300+</p>
              <p className="text-gray-400">Hackathons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}