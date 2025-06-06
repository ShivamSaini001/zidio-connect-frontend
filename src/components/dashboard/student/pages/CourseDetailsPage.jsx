import React, { useState, useEffect } from 'react';
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Lock,
  Heart,
  Share2,
  Award,
  Globe,
  Download,
  Smartphone,
  Infinity,
  Search,
  Filter,
  BarChart3,
  FileText,
  Video,
  Code,
  Lightbulb,
} from 'lucide-react';

const CourseDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreRequirements, setShowMoreRequirements] = useState(false);
  const [showMoreWhatYoullLearn, setShowMoreWhatYoullLearn] = useState(false);
  const [showMoreInstructorBio, setShowMoreInstructorBio] = useState(false);
  const [curriculumSearch, setCurriculumSearch] = useState('');
  const [curriculumFilter, setCurriculumFilter] = useState('all'); // all, free, locked
  const [showCurriculumStats, setShowCurriculumStats] = useState(true);

  const courseData = {
    title: "Complete React Developer Course 2024",
    subtitle: "Master React, Redux, Hooks, Context API, and build real-world projects",
    category: "Web Development",
    subcategory: "React",
    rating: 4.7,
    reviewCount: 12847,
    studentCount: 45231,
    lastUpdated: "November 2024",
    language: "English",
    price: 89.99,
    originalPrice: 199.99,
    discount: 55,
    duration: "42 hours",
    lectures: 156,
    level: "All Levels",
    certificate: true,
    instructor: {
      name: "Sarah Johnson",
      title: "Senior React Developer & Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b194?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      students: 85000,
      courses: 12,
      bio: "Sarah is a senior software engineer with over 8 years of experience in web development. She has worked at top tech companies including Google and Microsoft, and has been teaching programming for the past 5 years. Her courses have helped thousands of students land their dream jobs in tech. She specializes in React, Node.js, and full-stack JavaScript development. Sarah holds a Computer Science degree from Stanford University and is passionate about making complex programming concepts accessible to everyone. In her free time, she contributes to open-source projects and mentors aspiring developers through various coding bootcamps and online communities."
    },
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=225&fit=crop",
    whatYoullLearn: [
      "Build real-world React applications from scratch",
      "Master React Hooks and functional components",
      "Learn Redux for state management",
      "Understand React Router for navigation",
      "Work with APIs and async operations",
      "Implement authentication and authorization",
      "Deploy applications to production",
      "Write clean, maintainable code",
      "Test React applications with Jest and React Testing Library",
      "Optimize React performance with useMemo and useCallback",
      "Create responsive designs with CSS-in-JS libraries",
      "Implement server-side rendering with Next.js"
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "A computer with internet connection",
      "Code editor (VS Code recommended)",
      "Understanding of basic programming concepts",
      "Git and GitHub account for version control",
      "Node.js installed on your machine",
      "Willingness to practice and build projects"
    ],
    curriculum: [
      {
        id: 1,
        title: "Getting Started with React",
        lectures: 12,
        duration: "2h 30m",
        difficulty: "Beginner",
        lessons: [
          { id: 1, title: "Course Introduction", duration: "5m", preview: true, type: "video" },
          { id: 2, title: "What is React?", duration: "15m", preview: false, type: "video" },
          { id: 3, title: "Setting up Development Environment", duration: "20m", preview: true, type: "video" },
          { id: 4, title: "Creating Your First React App", duration: "25m", preview: false, type: "video" },
          { id: 5, title: "Project Structure Overview", duration: "12m", preview: false, type: "video" },
          { id: 6, title: "React Developer Tools", duration: "18m", preview: false, type: "video" }
        ]
      },
      {
        id: 2,
        title: "React Components and JSX",
        lectures: 18,
        duration: "4h 15m",
        difficulty: "Beginner",
        lessons: [
          { id: 7, title: "Understanding JSX", duration: "18m", preview: false, type: "video" },
          { id: 8, title: "Creating Functional Components", duration: "22m", preview: false, type: "video" },
          { id: 9, title: "Props and Component Communication", duration: "28m", preview: false, type: "video" },
          { id: 10, title: "Component Composition", duration: "25m", preview: false, type: "video" },
          { id: 11, title: "Conditional Rendering", duration: "20m", preview: false, type: "video" },
          { id: 12, title: "Lists and Keys", duration: "24m", preview: false, type: "video" },
          { id: 13, title: "Exercise: Building a Product Card", duration: "30m", preview: false, type: "exercise" },
          { id: 14, title: "Quiz: JSX and Components", duration: "10m", preview: false, type: "quiz" }
        ]
      },
      {
        id: 3,
        title: "State Management with Hooks",
        lectures: 24,
        duration: "6h 45m",
        difficulty: "Intermediate",
        lessons: [
          { id: 15, title: "Introduction to React Hooks", duration: "15m", preview: false, type: "video" },
          { id: 16, title: "useState Hook Deep Dive", duration: "25m", preview: false, type: "video" },
          { id: 17, title: "useEffect Hook", duration: "35m", preview: false, type: "video" },
          { id: 18, title: "useContext Hook", duration: "28m", preview: false, type: "video" },
          { id: 19, title: "useReducer Hook", duration: "32m", preview: false, type: "video" },
          { id: 20, title: "Custom Hooks", duration: "30m", preview: false, type: "video" },
          { id: 21, title: "Hook Rules and Best Practices", duration: "20m", preview: false, type: "video" },
          { id: 22, title: "Project: Todo App with Hooks", duration: "45m", preview: false, type: "project" },
          { id: 23, title: "Code Review: Todo App", duration: "25m", preview: false, type: "video" }
        ]
      },
      {
        id: 4,
        title: "Advanced React Patterns",
        lectures: 20,
        duration: "5h 30m",
        difficulty: "Advanced",
        lessons: [
          { id: 24, title: "Higher-Order Components", duration: "30m", preview: false, type: "video" },
          { id: 25, title: "Render Props Pattern", duration: "28m", preview: false, type: "video" },
          { id: 26, title: "Compound Components", duration: "35m", preview: false, type: "video" },
          { id: 27, title: "React.memo and Performance", duration: "25m", preview: false, type: "video" },
          { id: 28, title: "useMemo and useCallback", duration: "30m", preview: false, type: "video" },
          { id: 29, title: "Error Boundaries", duration: "22m", preview: false, type: "video" },
          { id: 30, title: "Portals and Refs", duration: "20m", preview: false, type: "video" }
        ]
      },
      {
        id: 5,
        title: "Redux State Management",
        lectures: 16,
        duration: "4h 20m",
        difficulty: "Intermediate",
        lessons: [
          { id: 31, title: "Why Redux?", duration: "15m", preview: false, type: "video" },
          { id: 32, title: "Redux Core Concepts", duration: "25m", preview: false, type: "video" },
          { id: 33, title: "Setting up Redux", duration: "20m", preview: false, type: "video" },
          { id: 34, title: "Actions and Action Creators", duration: "22m", preview: false, type: "video" },
          { id: 35, title: "Reducers", duration: "28m", preview: false, type: "video" },
          { id: 36, title: "Redux Toolkit", duration: "35m", preview: false, type: "video" },
          { id: 37, title: "Async Actions with Thunks", duration: "30m", preview: false, type: "video" }
        ]
      },
      {
        id: 6,
        title: "React Router and Navigation",
        lectures: 14,
        duration: "3h 45m",
        difficulty: "Intermediate",
        lessons: [
          { id: 38, title: "Introduction to React Router", duration: "18m", preview: false, type: "video" },
          { id: 39, title: "Setting up Routes", duration: "25m", preview: false, type: "video" },
          { id: 40, title: "Dynamic Routes and Parameters", duration: "28m", preview: false, type: "video" },
          { id: 41, title: "Nested Routes", duration: "22m", preview: false, type: "video" },
          { id: 42, title: "Navigation Guards", duration: "20m", preview: false, type: "video" }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent course! Sarah explains everything clearly and the projects are really helpful for building a portfolio."
      },
      {
        id: 2,
        user: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        rating: 5,
        date: "1 month ago",
        comment: "Best React course I've taken. The curriculum is well-structured and up-to-date with the latest React features."
      },
      {
        id: 3,
        user: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        rating: 4,
        date: "1 month ago",
        comment: "Great content and examples. Would love to see more advanced topics covered in detail."
      }
    ]
  };

  // Helper functions for curriculum
  const getTotalStats = () => {
    const totalLectures = courseData.curriculum.reduce((sum, section) => sum + section.lectures, 0);
    const totalMinutes = courseData.curriculum.reduce((sum, section) => {
      const duration = section.duration;
      const hours = parseInt(duration.match(/(\d+)h/)?.[1] || 0);
      const minutes = parseInt(duration.match(/(\d+)m/)?.[1] || 0);
      return sum + (hours * 60) + minutes;
    }, 0);
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return {
      lectures: totalLectures,
      duration: `${totalHours}h ${remainingMinutes}m`,
      sections: courseData.curriculum.length
    };
  };

  const getFilteredCurriculum = () => {
    let filtered = courseData.curriculum;

    if (curriculumFilter === 'free') {
      filtered = filtered.map(section => ({
        ...section,
        lessons: section.lessons.filter(lesson => lesson.preview)
      })).filter(section => section.lessons.length > 0);
    } else if (curriculumFilter === 'locked') {
      filtered = filtered.map(section => ({
        ...section,
        lessons: section.lessons.filter(lesson => !lesson.preview)
      })).filter(section => section.lessons.length > 0);
    }

    if (curriculumSearch) {
      filtered = filtered.map(section => ({
        ...section,
        lessons: section.lessons.filter(lesson =>
          lesson.title.toLowerCase().includes(curriculumSearch.toLowerCase()) ||
          section.title.toLowerCase().includes(curriculumSearch.toLowerCase())
        )
      })).filter(section =>
        section.title.toLowerCase().includes(curriculumSearch.toLowerCase()) ||
        section.lessons.length > 0
      );
    }

    return filtered;
  };

  const stats = getTotalStats();
  const filteredCurriculum = getFilteredCurriculum();

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video':
        return <Play size={14} className="text-blue-500" />;
      case 'quiz':
        return <Lightbulb size={14} className="text-purple-500" />;
      case 'exercise':
        return <Code size={14} className="text-green-500" />;
      case 'project':
        return <FileText size={14} className="text-orange-500" />;
      default:
        return <Play size={14} className="text-blue-500" />;
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };


  const StarRating = ({ rating, size = 16 }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${star <= rating
              ? 'text-yellow-400 fill-current'
              : darkMode ? 'text-gray-600' : 'text-gray-300'
              }`}
          />
        ))}
      </div>
    );
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  // Function to get appropriate colors for difficulty levels
  const getDifficultyColor = (difficulty) => {
    const difficultyLower = difficulty.toLowerCase();

    switch (difficultyLower) {
      case 'beginner':
      case 'easy':
        return 'bg-green-100 text-green-800';

      case 'intermediate':
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';

      case 'advanced':
      case 'hard':
      case 'expert':
        return 'bg-red-100 text-red-800';

      case 'all levels':
      case 'mixed':
        return 'bg-blue-100 text-blue-800';

      default:
        // Default fallback for unknown difficulty levels
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {courseData.category}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {courseData.subcategory}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {courseData.level}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-3">{courseData.title}</h1>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {courseData.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <StarRating rating={courseData.rating} />
                  <span className="font-semibold">{courseData.rating}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    ({courseData.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <Users size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {courseData.studentCount.toLocaleString()} students
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {courseData.duration} total
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {courseData.lectures} lectures
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {courseData.language}
                  </span>
                </div>
              </div>
            </div>

            {/* Preview Video */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
              <h2 className="text-xl font-bold mb-4">Course Preview</h2>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={courseData.thumbnail}
                  alt="Course preview"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200">
                    <Play size={32} className="text-gray-800 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
              <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseData.whatYoullLearn.slice(0, showMoreWhatYoullLearn ? courseData.whatYoullLearn.length : 6).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {courseData.whatYoullLearn.length > 6 && (
                <button
                  onClick={() => setShowMoreWhatYoullLearn(!showMoreWhatYoullLearn)}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-200"
                >
                  {showMoreWhatYoullLearn ? (
                    <>
                      <ChevronUp size={16} />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show more ({courseData.whatYoullLearn.length - 6} more items)
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Tabs */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : `border-transparent ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Course Description</h3>
                      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                        <p className={showMoreDescription ? '' : 'line-clamp-3'}>
                          This comprehensive React course will take you from beginner to advanced level.
                          You'll learn modern React development practices, including hooks, context API,
                          and state management with Redux. We'll build real-world projects that you can
                          add to your portfolio and use to land your dream job. {showMoreDescription &&
                            'The course covers everything from basic React concepts to advanced patterns like render props, higher-order components, and custom hooks. You\'ll also learn about performance optimization, testing strategies, and deployment best practices. By the end of this course, you\'ll have the confidence and skills to build production-ready React applications.'}
                        </p>
                        <button
                          onClick={() => setShowMoreDescription(!showMoreDescription)}
                          className="mt-2 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-200"
                        >
                          {showMoreDescription ? (
                            <>
                              <ChevronUp size={16} />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              Show more
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                      <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {courseData.requirements.slice(0, showMoreRequirements ? courseData.requirements.length : 4).map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      {courseData.requirements.length > 4 && (
                        <button
                          onClick={() => setShowMoreRequirements(!showMoreRequirements)}
                          className="mt-3 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-200"
                        >
                          {showMoreRequirements ? (
                            <>
                              <ChevronUp size={16} />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              Show more ({courseData.requirements.length - 4} more requirements)
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    {/* Curriculum Header with Stats */}
                    {showCurriculumStats && (
                      <div className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-blue-50 border-blue-200'}`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold flex items-center gap-2">
                            <BarChart3 size={18} />
                            Course Content Overview
                          </h3>
                          <button
                            onClick={() => setShowCurriculumStats(false)}
                            className={`text-sm ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                          >
                            Hide
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{stats.sections}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sections</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">{stats.lectures}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Lectures</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600">{stats.duration}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Time</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Search and Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <Search size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <input
                          type="text"
                          placeholder="Search curriculum..."
                          value={curriculumSearch}
                          onChange={(e) => setCurriculumSearch(e.target.value)}
                          className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-200 ${darkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <Filter size={18} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <select
                          value={curriculumFilter}
                          onChange={(e) => setCurriculumFilter(e.target.value)}
                          className={`px-3 py-2 rounded-lg border transition-colors duration-200 ${darkMode
                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        >
                          <option value="all">All Lessons</option>
                          <option value="free">Free Preview</option>
                          <option value="locked">Premium Only</option>
                        </select>
                      </div>
                    </div>

                    {/* Curriculum Sections */}
                    <div className="space-y-4">
                      {filteredCurriculum.length === 0 ? (
                        <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <Search size={48} className="mx-auto mb-4 opacity-50" />
                          <p>No curriculum content matches your search.</p>
                          <button
                            onClick={() => {
                              setCurriculumSearch('');
                              setCurriculumFilter('all');
                            }}
                            className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Clear filters
                          </button>
                        </div>
                      ) : (
                        filteredCurriculum.map((section) => (
                          <div key={section.id} className={`border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <button
                              onClick={() => toggleSection(section.id)}
                              className={`w-full p-4 text-left flex items-center justify-between hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-200`}
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-medium">{section.title}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(section.difficulty)}`}>
                                    {section.difficulty}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <BookOpen size={14} />
                                    {section.lectures} lectures
                                  </span>
                                  <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <Clock size={14} />
                                    {section.duration}
                                  </span>
                                </div>
                              </div>
                              {expandedSections[section.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            {expandedSections[section.id] && (
                              <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                {section.lessons.map((lesson, index) => (
                                  <div key={lesson.id} className={`p-4 flex items-center justify-between border-b last:border-b-0 ${darkMode ? 'border-gray-700' : 'border-gray-100'} hover:${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors duration-200`}>
                                    <div className="flex items-center gap-3 flex-1">
                                      <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                                        {index + 1}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        {lesson.preview ? (
                                          getLessonIcon(lesson.type)
                                        ) : (
                                          <Lock size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                                        )}
                                        <span className="text-sm font-medium">{lesson.title}</span>
                                      </div>
                                      {lesson.preview && (
                                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs rounded-full">
                                          Preview
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {lesson.duration}
                                      </span>
                                      {lesson.preview && (
                                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                          Watch
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium mb-1">Ready to start learning?</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {filteredCurriculum.reduce((sum, section) => sum + section.lessons.filter(l => l.preview).length, 0)} free preview lessons available
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setCurriculumFilter('free');
                              // Expand all sections with free content
                              const freeSections = {};
                              courseData.curriculum.forEach(section => {
                                if (section.lessons.some(lesson => lesson.preview)) {
                                  freeSections[section.id] = true;
                                }
                              });
                              setExpandedSections(freeSections);
                            }}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                          >
                            View Free Content
                          </button>
                          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={courseData.instructor.image}
                        alt={courseData.instructor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{courseData.instructor.name}</h3>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                          {courseData.instructor.title}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400 fill-current" />
                            <span>{courseData.instructor.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{courseData.instructor.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen size={14} />
                            <span>{courseData.instructor.courses} courses</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">About the Instructor</h4>
                      <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                        <p className={showMoreInstructorBio ? '' : 'line-clamp-4'}>
                          {courseData.instructor.bio}
                        </p>
                        <button
                          onClick={() => setShowMoreInstructorBio(!showMoreInstructorBio)}
                          className="mt-2 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-200"
                        >
                          {showMoreInstructorBio ? (
                            <>
                              <ChevronUp size={16} />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown size={16} />
                              Show more
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-yellow-500">{courseData.rating}</div>
                        <StarRating rating={courseData.rating} size={20} />
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                          Course Rating
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {courseData.reviews.map((review) => (
                        <div key={review.id} className={`border-b pb-6 last:border-b-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                          <div className="flex items-start gap-3">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-medium">{review.user}</h4>
                                <div className="flex items-center gap-2">
                                  <StarRating rating={review.rating} size={14} />
                                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {review.date}
                                  </span>
                                </div>
                              </div>
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Enrollment Card */}
          <div className="lg:col-span-1">
            <div className={`sticky top-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={courseData.thumbnail}
                  alt="Course thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200">
                    <Play size={24} className="text-gray-800 ml-1" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">${courseData.price}</span>
                  <span className={`text-lg line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    ${courseData.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    {courseData.discount}% off
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  30-Day Money-Back Guarantee
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Enroll Now
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`flex-1 border-2 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${isWishlisted
                      ? 'border-red-500 text-red-500 bg-red-50 dark:bg-red-900/20'
                      : `${darkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`
                      }`}
                  >
                    <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
                    Wishlist
                  </button>

                  <button className={`border-2 font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${darkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}>
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">This course includes:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span>{courseData.duration} on-demand video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Infinity size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span>Full lifetime access</span>
                  </div>
                  {courseData.certificate && (
                    <div className="flex items-center gap-2">
                      <Award size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span>Certificate of completion</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;