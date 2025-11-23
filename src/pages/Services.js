import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        {
            title: "Food Donation",
            description: "We organize regular food drives to provide nutritious meals to homeless shelters, orphanages, and low-income communities. No one should go to bed hungry.",
            icon: "🍲",
            link: "/donate"
        },
        {
            title: "Clothing Distribution",
            description: "We collect and distribute gently used and new clothing to those in need, ensuring dignity and protection from the elements.",
            icon: "👕",
            link: "/donate"
        },
        {
            title: "Essential Items",
            description: "Providing daily essentials like hygiene kits, blankets, and school supplies to support basic living standards.",
            icon: "📦",
            link: "/donate"
        },
        {
            title: "Emergency Relief",
            description: "Rapid response team dedicated to providing immediate aid during natural disasters and community emergencies.",
            icon: "🚑",
            link: "/volunteer"
        },
        {
            title: "Community Support",
            description: "Building stronger communities through educational workshops, health camps, and support groups.",
            icon: "🤝",
            link: "/volunteer"
        },
        {
            title: "Medical Aid",
            description: "Facilitating access to basic healthcare and medicines for those who cannot afford it.",
            icon: "💊",
            link: "/donate"
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <div className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are committed to serving humanity through various initiatives designed to uplift and support those in need.
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Need Assistance?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        If you or someone you know is in need of our services, please don't hesitate to reach out. We are here to help.
                    </p>
                    <a
                        href="/request"
                        className="inline-block bg-secondary hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
                    >
                        Request Help
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
