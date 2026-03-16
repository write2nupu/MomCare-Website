"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">

      {/* NAVBAR (YOUR ORIGINAL CODE UNCHANGED) */}
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


      {/* HERO */}
      <section className="relative pt-40 pb-28">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageAboutUs.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">

          <p className="text-sm mb-3 opacity-80">
            Home / About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            About MomCare+
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            A calm companion supporting mothers through every step of pregnancy.
          </p>

        </div>
      </section>


      {/* OUR STORY */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div className="relative">

            <img
              src="/AboutUs2.jpg"
              className="rounded-3xl shadow-xl"
            />

            <img
              src="/AboutUs1.jpg"
              className="absolute -bottom-10 -right-10 w-56 rounded-3xl border-8 border-white"
            />

          </div>

          <div>

            <p className="text-primary font-semibold mb-2">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building a calmer pregnancy journey
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The world of pregnancy apps can be a loud, cluttered, and overwhelming place.
              We know, because we've been there.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our journey began when we saw a loved one navigating her pregnancy from miles away,
              relying on daily phone calls home for the trusted support she couldn't find online.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This sparked a mission for us—Aryan, Khushi, Ritik, and Nupur—to ask a simple question:
            </p>

            <p className="text-xl font-semibold text-primary mb-6">
              What if an app could feel like a calm companion, not a marketplace?
            </p>

            <p className="text-gray-600 leading-relaxed">
              We dove into research and found that most apps were focused on selling products,
              while the actual person at the center of the journey—the mother—was often an afterthought.
              We knew we had to build a better alternative.
            </p>

          </div>
        </div>
      </motion.section>


      {/* PHILOSOPHY */}
      <motion.section
        className="bg-[#faf7f9] py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Designed with care
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            MomCare+ was designed from the ground up to provide calm, clarity, and genuine care.
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                Focus Over Clutter
              </h3>

              <p className="text-gray-600">
                Instead of clutter, we provide only what you truly need.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                Support Over Selling
              </h3>

              <p className="text-gray-600">
                Evidence-based tools focused on your wellbeing.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                Mother-Centered
              </h3>

              <p className="text-gray-600">
                A healthy supported mother is the foundation for everything.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </motion.section>


      {/* QUOTE */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="max-w-4xl mx-auto text-center bg-[#f7eef1] rounded-3xl px-14 py-16 relative shadow-md">

          <div className="absolute text-7xl text-primary/30 top-6 left-8">
            “
          </div>

          <p className="text-3xl font-semibold text-primary leading-relaxed px-10">
            Every pregnancy has its own story, its own rhythm, its own needs.
            Our mission is to provide the personal, unwavering support that
            honors yours.
          </p>

          <div className="absolute text-7xl text-primary/30 bottom-6 right-8 rotate-180">
            “
          </div>

        </div>

      </motion.section>


      {/* MISSION */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <div className="max-w-[1200px] mx-auto text-center">

          <p className="text-primary font-semibold mb-2">
            OUR MISSION
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Supporting mothers every step of the way
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            To empower expecting mothers with a single calm and comprehensive
            tool for their prenatal journey.
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div
              variants={fadeUp}
              className="bg-[#faf7f9] rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="font-semibold text-xl">
                Mother-First Focus
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#faf7f9] rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="font-semibold text-xl">
                All-in-One, Clutter-Free
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#faf7f9] rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="font-semibold text-xl">
                Born from Experience
              </h3>
            </motion.div>

          </motion.div>

          <p className="text-gray-500 mt-16 text-lg">
            Crafted with care. Informed by evidence. Focused on you.
          </p>

        </div>
      </motion.section>


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