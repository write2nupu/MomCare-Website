"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

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

      <Navbar />
        <main>
        <Outlet />
        </main>

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

      {/* CTA */}
      <CTA />

    </div>
  )
}