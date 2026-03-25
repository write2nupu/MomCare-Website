"use client"

import { useState, useEffect } from "react"
import { faqs } from "../Data/faqs"
import { Outlet } from "react-router-dom"
import CTA from "../components/CTA"
import Navbar from "../components/Navbar"

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

      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageFAQ.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        {/* background blobs (scaled down for mobile) */}
        <div className="absolute -top-20 -left-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-pink-200 rounded-full blur-[100px] opacity-30"/>
        <div className="absolute -bottom-20 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-primary/20 rounded-full blur-[100px]"/>

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 text-white">

          <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-80">
            Home / FAQs
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
            Find trusted answers about pregnancy care, baby development,
            and maternal wellbeing with MomCare+.
          </p>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16 sm:py-20 md:py-32 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              • FAQs
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your pregnancy questions,
              <span className="text-primary"> answered here</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Pregnancy can bring many questions and uncertainties.
              MomCare+ provides clear, reliable answers so you can feel
              confident and supported throughout your journey.
            </p>

            {/* HELP CARD */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-sm max-w-md border border-primary/10">

              <div className="bg-primary text-white text-lg px-6 py-4 font-bold text-center">
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

          {/* RIGHT SIDE FAQ */}
          <div className="space-y-4 sm:space-y-5">

            {faqs.map((faq, i) => {

              const isOpen = openIndex === i

              return (
                <div
                  key={i}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden
                  ${
                    isOpen
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 bg-white"
                  }`}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left"
                  >

                    <span
                      className={`text-base sm:text-lg font-semibold ${
                        isOpen ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`text-xl sm:text-2xl transition-transform duration-300
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

                      <p className="px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base text-gray-600 leading-relaxed">
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

      <CTA />

    </div>
  )
}