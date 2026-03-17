"use client"

import { useState } from "react"
import {Phone, MapPin } from "lucide-react"
import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

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

      {/* NAVBAR */}
            <Navbar />
            <main>
            <Outlet />
            </main>


      {/* HERO */}
      <div className="bg-white min-h-screen">

      {/* HERO (same style as other pages) */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageContactUs.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">

          <p className="text-sm mb-3 opacity-80">
            Home / Contact Us
          </p>

          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            We're here to support you throughout your pregnancy journey.
            Reach out anytime.
          </p>

        </div>

      </section>


      {/* CONTACT CARDS */}
      <section className="py-24 px-6 bg-[#faf7f9]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CONTACT CARD */}
          <div className="bg-primary text-white rounded-[30px] p-12 relative overflow-hidden">

            <Phone size={34} className="absolute right-10 top-10 opacity-80"/>

            <h3 className="text-3xl font-bold mb-6">
              Contact us
            </h3>

            <div className="h-[1px] bg-white/40 mb-8"/>

            <p className="text-white/90 text-lg mb-6">
              Reach out for help, support, or questions regarding MomCare+.
            </p>

            <p className="text-xl font-semibold">
              support@momcare.app
            </p>

            <p className="text-lg mt-2 opacity-90">
              +91 98765 43210
            </p>

          </div>


          {/* HELP CENTER CARD */}
          <div className="bg-secondary text-primary rounded-[30px] p-12 relative overflow-hidden">

            <MapPin size={34} className="absolute right-10 top-10 opacity-80"/>

            <h3 className="text-3xl font-bold mb-6">
              Help Center
            </h3>

            <div className="h-[1px] bg-primary/20 mb-8"/>

            <p className="text-lg mb-6">
              Explore our resources, FAQs, and guides for pregnancy support.
            </p>

            <p className="text-xl font-semibold">
              help.momcare.app
            </p>

          </div>

        </div>

      </section>


      {/* MESSAGE FORM */}
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto bg-[#eef0f7] rounded-[40px] p-16">

          <h2 className="text-5xl font-bold mb-5 text-center">
            Send us a <span className="text-primary">message</span>
          </h2>
          <h2 className="text-m text-gray mb-10 text-center">
            We would like to have your feedback and suggestions to improve our app and serve you better.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:outline-primary"
              />

              <input
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:outline-primary"
              />

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:outline-primary"
              />

              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:outline-primary"
              />

            </div>


            <textarea
              name="message"
              placeholder="Write Message..."
              rows={5}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:outline-primary"
            />


            <button
              type="submit"
              className="bg-primary text-white px-10 py-4 rounded-xl font-semibold
              hover:opacity-90 transition"
            >
              Submit Message
            </button>

          </form>

        </div>

      </section>

    </div>


      {/* FINAL CTA */}
      <CTA />

    </div>
  )
}