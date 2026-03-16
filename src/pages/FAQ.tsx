"use client"

import React, { useState } from "react"
import { faqs } from "../Data/faqs"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50
                      bg-white shadow-sm border-b border-gray-200
                      px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/home" className="flex items-center gap-2">
          <img src="/MomCare.svg" className="w-10 h-10" alt="logo" />
          <span className="text-2xl font-semibold text-primary">
            MomCare+
          </span>
        </Link>


        {/* NAV LINKS */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 text-base font-medium text-gray-700">

          {/* HOME */}
          <Link
            to="/home"
            className="relative cursor-pointer transition hover:text-primary
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-primary after:transition-all after:duration-300
            hover:after:w-full"
          >
            Home
          </Link>


          {/* ABOUT DROPDOWN */}
          <div className="relative group">

            <span className="flex items-center gap-1 cursor-pointer transition hover:text-primary
                            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                            after:w-0 after:bg-primary after:transition-all after:duration-300
                            group-hover:after:w-full">

              About

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>

            </span>


            {/* DROPDOWN */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4
                            w-56 bg-white rounded-xl shadow-lg border border-gray-200
                            opacity-0 invisible translate-y-2
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            transition-all duration-200">

              <ul className="py-2 text-sm text-gray-700">

                <Link to="/about">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    About Us
                  </li>
                </Link>

                <Link to="/privacy-policy">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    Privacy Policy
                  </li>
                </Link>

                <Link to="/terms-of-service">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    Terms of Service
                  </li>
                </Link>

                <Link to="/disclaimers">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    Disclaimers & Citations
                  </li>
                </Link>

                <Link to="/gdpr-rights">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    GDPR Rights
                  </li>
                </Link>

                <Link to="/team">
                  <li className="px-4 py-2 cursor-pointer transition-all duration-200
                                hover:bg-primary/10 hover:text-primary hover:pl-5">
                    Our Team
                  </li>
                </Link>

              </ul>

            </div>

          </div>


          {/* FAQ */}
          <Link
            to="/faq"
            className="relative cursor-pointer transition hover:text-primary
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-primary after:transition-all after:duration-300
            hover:after:w-full"
          >
            FAQs
          </Link>


          {/* CONTACT */}
          <Link
            to="/contact"
            className="relative cursor-pointer transition hover:text-primary
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-primary after:transition-all after:duration-300
            hover:after:w-full"
          >
            Contact Us
          </Link>

        </div>


        {/* BUTTON */}
        <div>
          <Link to="/login">
            <button className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
              Get Started
            </button>
          </Link>
        </div>

      </div>


      {/* HERO (same style as About / Privacy) */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageFAQ.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-200 rounded-full blur-[140px] opacity-30"/>
        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"/>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">

          <p className="text-sm mb-3 opacity-80">
            Home / FAQs
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            Find trusted answers about pregnancy care, baby development,
            and maternal wellbeing with MomCare+.
          </p>

        </div>

      </section>



      {/* FAQ SECTION */}
      <section className="bg-white py-32 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-primary font-semibold mb-4">
              • FAQs
            </p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Your pregnancy questions,
              <span className="text-primary"> answered here</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Pregnancy can bring many questions and uncertainties.
              MomCare+ provides clear, reliable answers so you can feel
              confident and supported throughout your journey.
            </p>


            {/* HELP CARD */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-sm max-w-md border border-primary/10">

              <div className="bg-primary text-white text-xl px-6 py-4 font-bold text-center">
                Need Help? Let’s Talk.
              </div>

              <div className="grid grid-cols-2 text-center py-6 bg-secondary/20">

                <div className="border-r border-primary/10">
                  <p className="font-semibold text-gray-900">
                    Email Us
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    support@momcare.app
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Help Center
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Visit Support
                  </p>
                </div>

              </div>

            </div>

          </div>



          {/* RIGHT SIDE FAQ ACCORDION */}
          <div className="space-y-5">

            {faqs.map((faq, i) => {

              const isOpen = openIndex === i

              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden
                  ${
                    isOpen
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 bg-white"
                  }`}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >

                    <span
                      className={`text-lg font-semibold ${
                        isOpen ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`text-2xl transition-transform duration-300
                      ${isOpen ? "rotate-45 text-primary" : "text-gray-400"}
                      `}
                    >
                      +
                    </span>

                  </button>


                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                  >

                    <div className="overflow-hidden border-t border-primary/20">

                      <p className="px-6 py-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#f7f8fb] pt-20 pb-8 px-6">
        <div className="max-w-[1550px] mx-auto">
          <div
            className="bg-gradient-to-r from-primary via-[#a84c64] to-primary
            rounded-[36px] px-20 py-24 text-white"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* TEXT */}
              <div>
                <h2 className="text-5xl font-bold leading-tight">
                  Start your pregnancy journey today
                </h2>

                <p className="mt-6 text-white/80 text-lg max-w-xl">
                  Track baby development, manage personalized plans, and support your
                  emotional wellbeing with MomCare+.
                </p>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="mt-20 pt-10 border-t border-white/30 grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12">

              {/* LOGO */}
              <div>
                <div className="flex items-center gap-3">
                  <img src="/MomCare.svg" className="w-10" />
                  <span className="text-2xl font-semibold">MomCare+</span>
                </div>

                <p className="mt-4 text-white/80 text-m max-w-xs">
                  Supporting mothers through every step of their pregnancy.
                </p>
              </div>

              {/* LINKS */}
              {/* QUICK LINKS */}
              <div>
                <p className="text-xl font-semibold mb-4">Quick Links</p>

                <ul className="space-y-2 text-white/80 text-m">

                  <Link to="/home">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      Home
                    </li>
                  </Link>

                  <Link to="/faq">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      FAQs
                    </li>
                  </Link>

                  <Link to="/contact">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      Contact Us
                    </li>
                  </Link>

                </ul>
              </div>

              <div>
                <p className="text-xl font-semibold mb-4">Learn More</p>

                <ul className="space-y-2 text-white/80 text-m">

                  <Link to="/about">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      About Us
                    </li>
                  </Link>

                  <Link to="/privacy-policy">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      Privacy Policy
                    </li>
                  </Link>

                  <Link to="/terms-of-service">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      Terms of Service
                    </li>
                  </Link>

                  <Link to="/gdpr-rights">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      GDPR Rights
                    </li>
                  </Link>

                  <Link to="/disclaimers">
                    <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                  after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                  after:transition-all after:duration-300 hover:after:w-full">
                      Disclaimers & Citations
                    </li>
                  </Link>

                </ul>
              </div>

              {/* DOWNLOAD APP */}
              <div className="flex justify-start md:justify-end md:mr-20">
                <div className="flex flex-col items-center">
                <p className="text-xl mb-4">Download our App</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-4 bg-black text-white
                  px-7 py-4 rounded-2xl shadow-xl
                  hover:scale-105 hover:bg-gray-900
                  transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                  </svg>

                  <div className="leading-tight">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>

                <p className="text-white/70 text-sm mt-3">
                  Available for iPhone
                </p>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center text-gray-500 mt-8 text-lg">
            © {new Date().getFullYear()} MomCare+ All rights reserved.
          </p>
        </div>
      </section>

    </div>
  )
}