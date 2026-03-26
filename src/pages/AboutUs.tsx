"use client"

import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import CTA from "../components/CTA"
import Navbar from "../components/Navbar"

import AboutUs1 from "../assets/images/AboutUs1.jpg"
import AboutUs2 from "../assets/images/AboutUs2.jpg"
import HeroImageAboutUs from "../assets/images/HeroImageAboutUs.jpg"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
}

export default function About() {

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
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImageAboutUs})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 text-white">

                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-80">
                        Home / About Us
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        About MomCare+
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
                        A calm companion supporting mothers through every step of pregnancy.
                    </p>

                </div>
            </section>

            {/* OUR STORY */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

                    {/* IMAGE STACK */}
                    <div className="relative flex justify-center md:block">

                        <img
                            src={AboutUs2}
                            className="rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-md"
                        />

                        <img
                            src={AboutUs1}
                            className="hidden sm:block absolute -bottom-8 -right-8 w-40 sm:w-52 md:w-56 rounded-2xl sm:rounded-3xl border-4 sm:border-8 border-white"
                        />

                    </div>

                    {/* TEXT */}
                    <div>

                        <p className="text-primary font-semibold mb-2 text-sm sm:text-base">
                            OUR STORY
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Building a calmer pregnancy journey
                        </h2>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                            The world of pregnancy apps can be a loud, cluttered, and overwhelming place.
                            We know, because we've been there.
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                            Our journey began when we saw a loved one navigating her pregnancy from miles away,
                            relying on daily phone calls home for the trusted support she couldn't find online.
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                            This sparked a mission for us—Aryan, Khushi, Ritik, and Nupur—to ask a simple question:
                        </p>

                        <p className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-4 sm:mb-6">
                            What if an app could feel like a calm companion, not a marketplace?
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            We dove into research and found that most apps were focused on selling products,
                            while the actual person at the center of the journey—the mother—was often an afterthought.
                        </p>

                    </div>

                </div>

            </motion.section>

            {/* PHILOSOPHY */}
            <motion.section
                className="bg-[#faf7f9] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <div className="max-w-[1200px] mx-auto text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Designed with care
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-14">
                        MomCare+ was designed from the ground up to provide calm, clarity, and genuine care.
                    </p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {["Focus Over Clutter", "Support Over Selling", "Mother-Centered"].map((title, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                                    {title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {i === 0 && "Instead of clutter, we provide only what you truly need."}
                                    {i === 1 && "Evidence-based tools focused on your wellbeing."}
                                    {i === 2 && "A healthy supported mother is the foundation for everything."}
                                </p>
                            </motion.div>
                        ))}

                    </motion.div>

                </div>

            </motion.section>

            {/* QUOTE */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <div className="max-w-3xl mx-auto text-center bg-[#f7eef1] rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-14 py-10 sm:py-14 relative shadow-md">

                    {/* Opening quote */}
                    <div className="absolute text-4xl sm:text-6xl text-primary/30 top-4 left-4 sm:top-6 sm:left-8">
                        “
                    </div>

                    <p className="text-lg sm:text-xl md:text-3xl font-semibold text-primary leading-relaxed">
                        Every pregnancy has its own story, its own rhythm, its own needs.
                        Our mission is to provide the personal, unwavering support that honors yours.
                    </p>

                    {/* Closing quote */}
                    <div className="absolute text-4xl sm:text-6xl text-primary/30 bottom-4 right-4 sm:bottom-6 sm:right-8 rotate-180">
                        “
                    </div>

                </div>

            </motion.section>

            {/* MISSION */}
            <motion.section
                className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <div className="max-w-[1200px] mx-auto text-center">

                    <p className="text-primary font-semibold mb-2 text-sm sm:text-base">
                        OUR MISSION
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        Supporting mothers every step of the way
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16">
                        To empower expecting mothers with a single calm and comprehensive tool.
                    </p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10"
                        variants={staggerContainer}
                    >
                        {["Mother-First Focus", "All-in-One, Clutter-Free", "Born from Experience"].map((item, i) => (
                            <motion.div key={i} variants={fadeUp}
                                className="bg-[#faf7f9] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-md">
                                <h3 className="font-semibold text-lg sm:text-xl">{item}</h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    <p className="text-gray-500 mt-10 sm:mt-16 text-sm sm:text-lg">
                        Crafted with care. Informed by evidence. Focused on you.
                    </p>

                </div>

            </motion.section>

            <CTA />

        </div>
    )
}