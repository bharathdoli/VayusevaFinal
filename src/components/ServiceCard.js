import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-4xl">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
            </p>
            <Link
                to={link}
                className="text-secondary font-semibold hover:text-blue-700 flex items-center transition-colors"
            >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
    );
};

export default ServiceCard;
