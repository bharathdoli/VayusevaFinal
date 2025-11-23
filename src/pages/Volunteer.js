import React from 'react';

const Volunteer = () => {
    return (
        <div className="bg-background min-h-screen">
            <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Become a part of the change you wish to see. Volunteer your time and skills to make a real difference.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Volunteer Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-6">Volunteer Signup</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-secondary rounded" />
                                        <span className="ml-2 text-gray-700">Food Distribution</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-secondary rounded" />
                                        <span className="ml-2 text-gray-700">Teaching / Education</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-secondary rounded" />
                                        <span className="ml-2 text-gray-700">Event Management</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="form-checkbox text-secondary rounded" />
                                        <span className="ml-2 text-gray-700">Social Media / Tech Support</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Availability (Hours/Week)</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary">
                                    <option>1-3 hours</option>
                                    <option>3-5 hours</option>
                                    <option>5-10 hours</option>
                                    <option>10+ hours</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg transition-colors shadow-md"
                            >
                                Sign Up to Volunteer
                            </button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">Why Volunteer?</h2>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-secondary font-bold">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Make an Impact</h3>
                                        <p className="mt-1 text-gray-500">Directly contribute to improving lives in your community.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-accent font-bold">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Learn New Skills</h3>
                                        <p className="mt-1 text-gray-500">Gain valuable experience in leadership, teamwork, and management.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Connect with People</h3>
                                        <p className="mt-1 text-gray-500">Meet like-minded individuals who share your passion for service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-primary mb-4">Volunteer Testimonial</h3>
                            <p className="text-gray-600 italic mb-4">
                                "Volunteering with Vayuseva has given me a sense of purpose I never found in my corporate job. The smiles on the kids' faces when we distribute books are priceless."
                            </p>
                            <p className="font-bold text-gray-900">- Sarah J., Volunteer since 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
