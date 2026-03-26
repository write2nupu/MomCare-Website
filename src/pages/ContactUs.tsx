"use client"

import { Briefcase, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import CTA from "../components/CTA"
import Navbar from "../components/Navbar"

import HeroImageContactUs from "../assets/images/HeroImageContactUs.jpg"

export default function ContactUs() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(form)
    }

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
                    style={{ backgroundImage: `url(${HeroImageContactUs})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 text-white">

                    <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-80">
                        Home / Contact Us
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Contact Us
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
                        We're here to support you throughout your pregnancy journey.
                        Reach out anytime.
                    </p>

                </div>

            </section>

            {/* CONTACT CARDS */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#faf7f9]">

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

                    {/* CONTACT CARD */}
                    <div className="bg-primary text-white rounded-2xl sm:rounded-[30px] p-6 sm:p-8 md:p-12 relative overflow-hidden">

                        <Phone size={28} className="absolute right-6 top-6 sm:right-10 sm:top-10 opacity-80" />

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                            Support & Assistance
                        </h3>

                        <div className="h-[1px] bg-white/40 mb-6 sm:mb-8" />

                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                            Get help with MomCare+, report issues, or reach out if something isn't working as expected.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl font-semibold break-all">
                          support.momcare@vision-labs.site
                        </p>

                    </div>

                    {/* HELP CENTER CARD */}
                    <div className="bg-secondary text-primary rounded-2xl sm:rounded-[30px] p-6 sm:p-8 md:p-12 relative overflow-hidden">

                        <Briefcase size={28} className="absolute right-6 top-6 sm:right-10 sm:top-10 opacity-80" />

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                            Partnerships & Inquiries
                        </h3>

                        <div className="h-[1px] bg-primary/20 mb-6 sm:mb-8" />

                        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                            For business inquiries, collaborations, or general questions, feel free to reach out to out team.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl font-semibold break-all">
                          hello.momcare@vision-labs.site
                        </p>

                    </div>

                </div>

            </section>

            {/* MESSAGE FORM */}
            <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">

                <div className="max-w-5xl mx-auto bg-[#eef0f7] rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-10 md:p-16">

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center">
                        Send us a <span className="text-primary">message</span>
                    </h2>

                    <p className="text-gray-600 mb-8 sm:mb-10 text-center text-sm sm:text-base">
                        We would like to have your feedback and suggestions to improve our app and serve you better.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            <input
                                name="firstName"
                                placeholder="First name"
                                onChange={handleChange}
                                className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 focus:outline-primary"
                            />

                            <input
                                name="lastName"
                                placeholder="Last name"
                                onChange={handleChange}
                                className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 focus:outline-primary"
                            />

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                            <input
                                name="email"
                                placeholder="E-mail"
                                onChange={handleChange}
                                className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 focus:outline-primary"
                            />

                            <input
                                name="phone"
                                placeholder="Phone"
                                onChange={handleChange}
                                className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 focus:outline-primary"
                            />

                        </div>

                        <textarea
                            name="message"
                            placeholder="Write Message..."
                            rows={5}
                            onChange={handleChange}
                            className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 focus:outline-primary"
                        />

                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-primary text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                            Submit Message
                        </button>

                    </form>

                </div>

            </section>

            <CTA />

        </div>
    )
}