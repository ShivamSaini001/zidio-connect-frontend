import { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ChevronUp,
    AlertCircle
} from 'lucide-react';
import {
    Alert,
    AlertDescription
} from '@/components/ui/alert';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            setError('Please enter your email');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email');
            return;
        }
        setSubscribed(true);
        setError('');
        setEmail('');
        // In a real application, you would send this to your backend
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Top Section with Logo and Newsletter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mr-2">
                                <span className="text-white font-bold text-lg">A1</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">All-in-One Platform</h3>
                        </div>
                        <p className="text-sm">
                            Your comprehensive solution for all business needs. Streamline operations,
                            boost productivity, and drive growth with our innovative platform.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Testimonials</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                                <span>123 Business Avenue, Tech City, TC 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 flex-shrink-0" />
                                <span>support@allinoneplatform.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Newsletter</h4>
                        <p className="text-sm">Subscribe to receive updates and exclusive offers.</p>

                        {subscribed ? (
                            <Alert className="bg-green-800 border-green-700 text-white">
                                <AlertDescription>
                                    Thank you for subscribing!
                                </AlertDescription>
                            </Alert>
                        ) : (
                            <div className="space-y-2">
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    />
                                </div>
                                {error && (
                                    <div className="text-red-400 text-xs flex items-center">
                                        <AlertCircle size={14} className="mr-1" />
                                        {error}
                                    </div>
                                )}
                                <button
                                    onClick={handleSubscribe}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Middle section with additional links */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h5 className="text-white font-medium mb-4">Products</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">CRM</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-4">Resources</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-4">Support</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-medium mb-4">Company</h5>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom copyright section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
                            © {new Date().getFullYear()} All-in-One Platform. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center space-x-6 text-sm">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-8 right-8">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={20} />
                </button>
            </div>
        </footer>
    );
}
