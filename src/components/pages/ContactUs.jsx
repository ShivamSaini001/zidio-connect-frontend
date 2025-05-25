import React, { useState } from 'react'
import { Alert, AlertDescription } from '../ui/alert'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'

const ContactUs = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // Simple validation
        if (!formState.name || !formState.email || !formState.message) {
            setFormStatus({
                submitted: false,
                error: true,
                message: 'Please fill out all required fields'
            });
            return;
        }
    }

    return (
        <section>
            {/* Contact Form and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h3>

                    {formStatus.submitted ? (
                        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800 mb-4">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <AlertDescription className="text-green-800 dark:text-green-200 ml-2">
                                {formStatus.message}
                            </AlertDescription>
                        </Alert>
                    ) : formStatus.error ? (
                        <Alert className="bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-800 mb-4">
                            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                            <AlertDescription className="text-red-800 dark:text-red-200 ml-2">
                                {formStatus.message}
                            </AlertDescription>
                        </Alert>
                    ) : null}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formState.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Please describe your question or concern in detail..."
                            ></textarea>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors w-full flex items-center justify-center"
                        >
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                        </button>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            * Required fields. We'll never share your information with anyone else.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
