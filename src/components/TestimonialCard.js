import React from 'react';

const TestimonialCard = ({ name, role, quote, image }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
            <div className="flex-grow">
                <div className="text-secondary text-4xl font-serif mb-4">"</div>
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                    {quote}
                </p>
            </div>
            <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold text-xl">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-primary">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
