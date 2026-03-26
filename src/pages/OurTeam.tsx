"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import CTA from "../components/CTA"
import Navbar from "../components/Navbar"

import HeroImageOurTeam from "../assets/images/HeroImageOurTeam.jpg"
import DefaultAvatar from "../assets/images/default-avatar.png"

export default function OurTeam() {

    const team = [
        {
            name: "Aryan Singh",
            role: "Team Lead, UI/UX & Ideation",
            image: DefaultAvatar
        },
        {
            name: "Khushi Rana",
            role: "Frontend & Research",
            image: DefaultAvatar
        },
        {
            name: "Nupur Sharma",
            role: "Frontend & Research",
            image: DefaultAvatar
        },
        {
            name: "Ritik Ranjan",
            role: "Frontend / Backend Developer",
            image: DefaultAvatar
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Navbar />

            <main>
                <Outlet />
            </main>

            {/* HERO */}
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImageOurTeam})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 text-white">

                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-80">
                        Home / Our Team
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Meet Our Team
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
                        The people behind MomCare+ who are dedicated to building
                        a calm and supportive pregnancy companion.
                    </p>

                </div>

            </section>

            {/* TEAM CARDS */}
            <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#faf7f9]">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-10 sm:mb-12 md:mb-16 text-center">
                        Our Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

                        {team.map((member, i) => (

                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition text-center"
                            >

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full object-cover border-4 border-primary/10"
                                />

                                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {member.role}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* GUIDANCE */}
            <section className="py-16 sm:py-20 px-4 sm:px-6">

                <div className="max-w-4xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10">
                        Guidance & Mentorship
                    </h2>

                    <div className="bg-[#faf7f9] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10">

                        <h3 className="text-lg sm:text-xl font-semibold">
                            Vinod Kumar
                        </h3>

                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            For his dedicated guidance.
                        </p>

                    </div>

                    <div className="bg-[#faf7f9] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 mt-4 sm:mt-6">

                        <h3 className="text-lg sm:text-xl font-semibold">
                            Valuable Feedback From
                        </h3>

                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            Kiran Singh, Probeeer Shaw, Runumi Devi and Shruti Sachdeva.
                        </p>

                    </div>

                </div>

            </section>

            {/* SPECIAL THANKS */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#faf7f9]">

                <div className="max-w-4xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10">
                        Special Thanks
                    </h2>

                    <div className="space-y-4 sm:space-y-6">

                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-sm">

                            <h3 className="text-lg sm:text-xl font-semibold">
                                Amit Gulati · Apple
                            </h3>

                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                For expert insights.
                            </p>

                        </div>

                        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-sm">

                            <h3 className="text-lg sm:text-xl font-semibold">
                                Prasad BS · Infosys
                            </h3>

                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                For feedback on UI and business aspects.
                            </p>

                        </div>

                    </div>

                    <p className="text-gray-500 mt-8 sm:mt-12 text-center text-sm sm:text-base">
                        We're grateful to everyone who helped make MomCare+ possible.
                    </p>

                </div>

            </section>

            {/* CTA */}
            <CTA />

        </div>
    )
}