// Source file reference
// :contentReference[oaicite:0]{index=0}

import {
    AlertTriangle,
    CheckCircle,
    CreditCard,
    Hand,
    Landmark,
    Puzzle,
    Shield,
    Sparkles,
    UserCheck
} from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";

import HeroImageService from "../assets/images/HeroImageService.jpg";

export default function TermsOfService() {
    const sections = [
        { id: "acceptance", label: "Acceptance of Terms" },
        { id: "eligibility", label: "Eligibility" },
        { id: "services", label: "Overview of Services" },
        { id: "disclaimers", label: "Disclaimers" },
        { id: "responsibilities", label: "User Responsibilities" },
        { id: "license", label: "License" },
        { id: "thirdparty", label: "Third-Party Services" },
        { id: "subscriptions", label: "Subscriptions" },
        { id: "liability", label: "Liability" },
        { id: "law", label: "Governing Law" },
    ];

    const [active, setActive] = useState("acceptance");

    useEffect(() => {
        const handleScroll = () => {
            let current = "acceptance";

            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= 160) current = section.id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -120;
            const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>

            {/* HERO */}
            <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImageService})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-6 text-white">
                    <p className="text-xs md:text-sm mb-3 opacity-80">
                        Home / Terms of Service
                    </p>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                        Terms of Service
                    </h1>

                    <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl text-white/90">
                        Good rules create a space where everyone can feel safe and
                        respected. These terms define how MomCare+ works and how we work
                        together.
                    </p>
                </div>
            </section>

            {/* MOBILE NAV */}
            <div className="md:hidden sticky top-[64px] z-30 bg-white border-b overflow-x-auto no-scrollbar">
                <div className="flex gap-4 px-4 py-3 min-w-max">
                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`whitespace-nowrap text-sm pb-1 ${active === item.id
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-500"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* CONTENT */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-[260px_1fr] gap-10 md:gap-16">

                    {/* SIDEBAR */}
                    <div className="hidden md:block">
                        <div className="sticky top-32 space-y-4">
                            {sections.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block text-left w-full text-sm transition-all duration-200 ${active === item.id
                                            ? "text-primary font-semibold border-l-2 border-primary pl-3"
                                            : "text-gray-400 hover:text-gray-700"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="max-w-[680px] md:max-w-none space-y-12 md:space-y-20 text-gray-700 text-[15px] md:text-lg leading-7 md:leading-relaxed">
                        <div id="acceptance">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <CheckCircle className="text-primary" size={22} />
                                Acceptance of Terms
                            </h2>
                            <p>
                                By downloading, installing, accessing, or using the MomCare
                                mobile application, you agree to be bound by these Terms of
                                Service and our Privacy Policy.
                            </p>
                            <p className="mt-4">
                                If you do not agree with these Terms, you must not use the
                                application. Continued use after updates constitutes acceptance
                                of those changes.
                            </p>
                        </div>

                        <div id="eligibility">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <UserCheck className="text-primary" size={22} />
                                Eligibility
                            </h2>
                            <p>
                                You must be at least 18 years old or the legal age of majority.
                                The app is intended for pregnant individuals, those planning
                                pregnancy, or caregivers.
                            </p>
                            <p className="mt-4">
                                MomCare is not intended for children or clinical use by
                                professionals.
                            </p>
                        </div>

                        <div id="services">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <Sparkles className="text-primary" size={22} />
                                Overview of Services
                            </h2>
                            <p>
                                MomCare offers tools to support your pregnancy journey
                                including:
                            </p>

                            <p className="mt-4">
                                <strong>Progress</strong> — Track health, diet, and exercise.
                            </p>
                            <p>
                                <strong>MyPlan</strong> — Personalized daily recommendations.
                            </p>
                            <p>
                                <strong>TriTrack</strong> — Weekly pregnancy insights.
                            </p>
                            <p>
                                <strong>Mood</strong> — Emotional wellness audio support.
                            </p>
                        </div>

                        <div id="disclaimers">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <AlertTriangle className="text-primary" size={22} />
                                Disclaimers
                            </h2>
                            <p>
                                All content is for informational purposes only and does not
                                replace professional medical advice.
                            </p>
                            <p className="mt-4">
                                In case of emergencies, consult a doctor immediately.
                            </p>
                        </div>

                        <div id="responsibilities">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <Hand className="text-primary" size={22} />
                                User Responsibilities
                            </h2>
                            <p>
                                You agree not to misuse the application, tamper with its
                                functionality, or provide misleading data.
                            </p>
                        </div>

                        <div id="license">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <Shield className="text-primary" size={22} />
                                License & Intellectual Property
                            </h2>
                            <p>
                                All content and features are owned by MomCare and protected by
                                law.
                            </p>
                            <p className="mt-4">
                                You are granted a limited license for personal, non-commercial
                                use.
                            </p>
                        </div>

                        <div id="thirdparty">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <Puzzle className="text-primary" size={22} />
                                Third-Party Services
                            </h2>
                            <p>
                                MomCare integrates with services such as HealthKit, EventKit,
                                notifications, and AI systems.
                            </p>
                            <p className="mt-4">
                                These services may process data under their own policies.
                            </p>
                        </div>

                        <div id="subscriptions">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <CreditCard className="text-primary" size={22} />
                                Subscriptions
                            </h2>
                            <p>
                                Some features may require subscription. Payments are handled via
                                the App Store and can be managed in your account settings.
                            </p>
                        </div>

                        <div id="liability">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <AlertTriangle className="text-primary" size={22} />
                                Limitation of Liability
                            </h2>
                            <p>
                                The app is provided “as-is” without warranties. We are not
                                liable for indirect damages or interruptions.
                            </p>
                        </div>

                        <div id="law">
                            <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                <Landmark className="text-primary" size={22} />
                                Governing Law
                            </h2>
                            <p>
                                These terms are governed by the laws of India. Disputes will be
                                resolved in Gautam Buddh Nagar courts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}