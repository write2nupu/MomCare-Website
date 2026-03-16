"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, Database, Lock, HeartPulse } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Privacy() {
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

      {/* HERO (same style as About page) */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImagePrivacyPolicy.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70"/>

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-200 rounded-full blur-[140px] opacity-30"/>
        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"/>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">

          <p className="text-sm mb-3 opacity-80">
            Home / Privacy Policy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Because Every Mom Deserves Care —
            <br/> Including <span className="text-[#f4a6b7]">Her Data</span>
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            Learn how MomCare+ protects your privacy while supporting your pregnancy journey.
          </p>

        </div>

      </section>



      {/* HOW MOMCARE WORKS */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >

        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            How MomCare+ Works
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-gray-600 leading-relaxed mb-6">
                MomCare+ helps you navigate pregnancy with peace of mind. Our
                features are designed to support your physical and emotional
                wellbeing throughout the journey.
              </p>

              <ul className="space-y-4 text-gray-600">

                <li>• Trimester-specific guidance delivered weekly</li>
                <li>• Mood, diet, hydration, symptom and exercise tracking</li>
                <li>• Reminders for scans, supplements and self-care</li>
                <li>• Mental wellness tools like guided breathing and MoodNest</li>
                <li>• TrimesterFlow™ and ProgressHub™ insights</li>

              </ul>

              <p className="mt-6 text-gray-600">
                To provide this experience, we collect certain information that
                you choose to share.
              </p>

            </div>

            <img
              src="/PrivacyPolicy1.jpg"
              className="rounded-3xl shadow-lg"
            />

          </div>

        </div>

      </motion.section>



      {/* DATA COLLECTION GRID */}
      <motion.section
        className="py-24 px-6 bg-[#faf7f9]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What Information We Collect
          </h2>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
          >
            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              className="group bg-white p-12 rounded-3xl shadow-md
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl bg-[#f7eef1]
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-primary
                  group-hover:scale-110"
                >
                  <Database
                    size={24}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="font-semibold text-xl center">Profile & Pregnancy Info</h3>
              </div>

              <ul className="text-gray-600 space-y-2 text-lg leading-relaxed">
                <li>Age</li>
                <li>Due date</li>
                <li>Pregnancy start date</li>
                <li>Name (optional)</li>
              </ul>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              className="group bg-white p-12 rounded-3xl shadow-md
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl bg-[#f7eef1]
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-primary
                  group-hover:scale-110"
                >
                  <HeartPulse
                    size={24}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="font-semibold text-xl">Health Data</h3>
              </div>

              <ul className="text-gray-600 space-y-2 text-lg leading-relaxed">
                <li>Symptoms</li>
                <li>Allergies</li>
                <li>Pre-existing conditions</li>
                <li>Medical notes</li>
              </ul>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              className="group bg-white p-12 rounded-3xl shadow-md
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl bg-[#f7eef1]
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-primary
                  group-hover:scale-110"
                >
                  <Lock
                    size={24}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="font-semibold text-xl">Daily Logs</h3>
              </div>

              <ul className="text-gray-600 space-y-2 text-lg leading-relaxed">
                <li>Mood</li>
                <li>Hydration</li>
                <li>Food intake</li>
                <li>Exercise tracking</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHY WE COLLECT DATA */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <img
              src="/PrivacyPolicy2.jpg"
              alt="Data protection"
              className="rounded-3xl shadow-lg"
            />

            {/* decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

          </div>


          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Why We Collect Your Data
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              MomCare+ collects certain information to create a more supportive,
              personalized pregnancy experience. The information you choose to share
              allows us to deliver insights, reminders, and wellness guidance tailored
              specifically to your journey.
            </p>

            <ul className="space-y-4 text-gray-600 text-lg leading-relaxed">

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Generate weekly updates based on your pregnancy stage
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Track diet and exercise progress and show health trends in ProgressHub
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Send custom reminders for hydration, supplements, and medical checkups
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Suggest calming music, exercises, and mindfulness tools
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Enhance motivation through streaks and rewards
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Improve app performance and reduce bugs
              </li>

            </ul>

            <p className="mt-10 text-primary font-semibold text-xl">
              We never sell, rent, or monetize your data — ever.
            </p>

          </div>

        </div>
      </motion.section>



      {/* SECURITY SECTION */}
      <motion.section
        className="py-28 px-6 bg-[#faf7f9] relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >

        {/* soft glow backgrounds */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-[140px]" />

        <div className="max-w-[1100px] mx-auto">

          {/* security card */}
          <div className="bg-gradient-to-r from-secondary via-secondary to-secondary
          text-white rounded-[36px] p-14 shadow-xl">

            <div className="text-center mb-12">

              <div className="w-16 h-16 mx-auto mb-6
              bg-white/20 rounded-xl
              flex items-center justify-center">

                <ShieldCheck size={34} />

              </div>

              <h2 className="text-4xl font-bold text-primary">
                How We Protect Your Data
              </h2>

            </div>


            <div className="grid md:grid-cols-2 gap-10 text-black/90 text-lg">

              <div className="flex gap-4">
                <span className="text-black font-bold">•</span>
                On-device encryption of sensitive health and mood data
              </div>

              <div className="flex gap-4">
                <span className="text-black font-bold">•</span>
                Encrypted cloud storage using GDPR-compliant platforms
              </div>

              <div className="flex gap-4">
                <span className="text-black font-bold">•</span>
                Token-based authentication and secure APIs
              </div>

              <div className="flex gap-4">
                <span className="text-black font-bold">•</span>
                Access controls limiting who can view your data
              </div>

            </div>


            <p className="text-center mt-12 text-black/80 text-lg">
              You retain full ownership of your data at all times.
            </p>

          </div>

        </div>

      </motion.section>



      {/* PRIVACY RIGHTS */}
      <motion.section
        className="py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >

        <div className="max-w-[1100px] mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">
            Your Privacy Rights
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Right to Access",
              "Right to Correct",
              "Right to Delete",
              "Withdraw Consent",
              "Export Your Data"
            ].map((item) => (

              <div
                key={item}
                className="bg-[#faf7f9] p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </motion.section>

      {/* CTA */}
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
                  Track baby development, manage personalized plans, and support
                  your emotional wellbeing with MomCare+.
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
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
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
  );
}
