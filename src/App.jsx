// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css'; // Import custom styles

// --- SVG Icons for better visuals without external dependencies ---
const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);


function App() {
    // --- State Management for Dynamic Elements ---
    const [raisedAmount, setRaisedAmount] = useState(68540);
    const goalAmount = 100000;
    const donors = 832;

    const progressPercentage = Math.min((raisedAmount / goalAmount) * 100, 100);

    // --- Countdown Timer Logic ---
    const calculateTimeLeft = () => {
        const eventDate = new Date('2025-12-01T09:00:00');
        const difference = +eventDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Cleanup interval on component unmount
        return () => clearTimeout(timer);
    });

    return (
        <div className="bg-gray-50 font-sans">
            {/* --- Header --- */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <HeartIcon />
                        <h1 className="text-xl font-bold text-gray-800">Hope Foundation</h1>
                    </div>
                    <a href="#donate" className="hidden md:block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                        Donate Now
                    </a>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8">

                {/* --- 4.1 & 4.6: Event Information & Media --- */}
                <section className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Clean Water for Villages Initiative</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                        Join us in our mission to bring clean, safe drinking water to over 50 remote villages. Your contribution can prevent water-borne diseases and transform lives.
                    </p>
                    <div className="flex justify-center items-center space-x-4 text-gray-700 font-medium mb-8">
                        <span>🗓️ Date: December 01, 2025</span>
                        <span>📍 Location: Community Hall, Bharthia</span>
                    </div>
                    {/* Countdown Timer */}
                    <div className="flex justify-center space-x-2 md:space-x-4">
                        {Object.entries(timeLeft).map(([interval, value]) => (
                            <div key={interval} className="bg-white p-4 rounded-lg shadow-md text-center w-20 md:w-24">
                                <div className="text-3xl font-bold text-green-600">{value}</div>
                                <div className="text-xs uppercase text-gray-500">{interval}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Main Grid Layout --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* --- Left Column: Storytelling & Impact --- */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* 4.6 Media Gallery */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1593113646773-ae62114de9a3?q=80&w=2070" alt="Child drinking clean water" className="w-full h-auto object-cover"/>
                        </div>

                        {/* 4.4 Storytelling & Impact */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">How Your Donation Makes an Impact</h3>
                            <p className="text-gray-600 mb-6">
                                Every penny you donate goes directly towards building sustainable water solutions. Here's a glimpse of what your generosity can achieve:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 font-bold rounded-full h-8 w-8 text-center leading-8 mr-4">$25</span>
                                    <span className="text-gray-700">Provides a family with a high-capacity water filter.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 font-bold rounded-full h-8 w-8 text-center leading-8 mr-4">$150</span>
                                    <span className="text-gray-700">Contributes to the repair and maintenance of a community well.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-800 font-bold rounded-full h-8 w-8 text-center leading-8 mr-4">$500</span>
                                    <span className="text-gray-700">Funds the installation of a new hand pump, serving up to 200 people.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* --- Right Column: Fundraising & Donation --- */}
                    <div id="donate" className="lg:col-span-1 space-y-8">
                        {/* 4.2 Fundraising Goal Tracker */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Fundraising Progress</h3>
                            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                                <div className="progress-bar-inner bg-green-500 h-4 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <p><span className="font-bold text-green-600">${raisedAmount.toLocaleString()}</span> raised</p>
                                <p className="font-bold">${goalAmount.toLocaleString()} Goal</p>
                            </div>
                            <p className="text-center text-gray-600 mt-2 font-semibold">{donors} Donors</p>
                        </div>

                        {/* 4.3 Donation Functionality */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Make a Difference Today</h3>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-100">$25</button>
                                <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-100">$50</button>
                                <button className="border border-green-500 bg-green-100 text-green-700 font-bold py-2 rounded-lg">$100</button>
                            </div>
                            <input type="number" placeholder="Or enter a custom amount" className="w-full border-gray-300 rounded-lg p-3 mb-4 focus:ring-green-500 focus:border-green-500"/>

                            {/* 4.5 Primary CTA */}
                            <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 text-lg">
                                Donate Now
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-2">Secure payment via UPI, Cards, Wallets.</p>
                        </div>

                        {/* 4.5 Secondary CTA */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Spread the Word!</h3>
                            <button className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                <ShareIcon />
                                Share on Social Media
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- Footer --- */}
            <footer className="bg-gray-800 text-white mt-12">
                <div className="container mx-auto px-6 py-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6">Join our newsletter to get updates on our future causes and impact stories.</p>
                    <form className="max-w-md mx-auto flex">
                        <input type="email" placeholder="Enter your email" className="w-full text-gray-800 rounded-l-lg p-3 focus:outline-none"/>
                        <button type="submit" className="bg-green-500 text-white font-bold py-3 px-6 rounded-r-lg hover:bg-green-600 transition">Sign Up</button>
                    </form>
                    <p className="text-sm text-gray-400 mt-8">&copy; 2025 Hope Foundation. All Rights Reserved.</p>
                </div>
            </footer>

            {/* --- Sticky Donate Button for Mobile (Requirement 4.3) --- */}
            <div className="sticky-donate-button md:hidden">
                <a href="#donate" className="w-full block bg-green-500 text-white text-center font-bold py-4 px-4 text-lg">
                    Donate Now
                </a>
            </div>
        </div>
    );
}

export default App;