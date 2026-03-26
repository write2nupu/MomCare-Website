import { Ban, Download, PauseCircle, Pencil, Trash2, User } from "lucide-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";

import HeroImageGDPR from "../assets/images/HeroImageGDPR.jpg";

export default function GDPRRights() {

    const rights = [
        {
            icon: User,
            title: "The Right to Access",
            text: "You have the right to request a copy of the personal data we hold about you.",
        },
        {
            icon: Pencil,
            title: "The Right to Rectification",
            text: "If you believe any of the data we hold about you is inaccurate or incomplete, you have the right to have it corrected.",
        },
        {
            icon: Trash2,
            title: "The Right to Erasure",
            text: "You can request that we delete your personal data from our systems. This is also known as the 'Right to be Forgotten'.",
        },
        {
            icon: PauseCircle,
            title: "The Right to Restrict Processing",
            text: "You have the right to request that we temporarily or permanently stop processing all or some of your personal data.",
        },
        {
            icon: Download,
            title: "The Right to Data Portability",
            text: "You can request a copy of your personal data in a common, machine-readable format to transfer to another service.",
        },
        {
            icon: Ban,
            title: "The Right to Object",
            text: "You have the right to object to us processing your personal data for specific purposes, such as direct marketing.",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            <Navbar />
            <main>
                <Outlet />
            </main>

            {/* HERO */}
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImageGDPR})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 text-white">

                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-80">
                        Home / GDPR Rights
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Your Data, Your Rights, <br />
                        Your <span className="text-[#f4a6b7]">Trust</span>
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
                        We are committed to safeguarding your privacy. You have the right to
                        control your personal information, and we make it easy for you to do
                        so.
                    </p>

                </div>

            </section>

            {/* CARDS */}
            <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {rights.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="bg-secondary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/10 hover:shadow-md transition-all duration-300"
                            >

                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4 sm:mb-6">
                                    <Icon className="text-primary" size={20} />
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </section>

            {/* HOW TO EXERCISE */}
            <section className="pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6">

                <div className="max-w-3xl mx-auto text-center">

                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                        How to Exercise Your Rights
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600">
                        To exercise any of these rights, please send a clear request to our
                        dedicated privacy team. We will respond to your request in a timely
                        manner, in accordance with applicable law.
                    </p>

                    <div className="mt-6 sm:mt-8 inline-block px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-primary/10 text-primary font-semibold text-sm sm:text-base break-all">
                        support@momcare.app
                    </div>

                </div>

            </section>

            <CTA />

        </div>
    );
}