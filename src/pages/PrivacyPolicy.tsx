import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  Database,
  List,
  ShieldCheck,
  UserCheck
} from "lucide-react"
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { Outlet } from "react-router-dom";

export default function PrivacyPolicy() {

  const sections = [
    { id: "how-it-works", label: "How MomCare+ Works" },
    { id: "data-collection", label: "What We Collect" },
    { id: "why-data", label: "Why We Collect Data" },
    { id: "protection", label: "How We Protect Data" },
    { id: "rights", label: "Your Privacy Rights" }
  ]

  const [active, setActive] = useState("how-it-works")

  useEffect(() => {
    const handleScroll = () => {
      let current = "how-it-works"

      sections.forEach(section => {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 140) {
            current = section.id
          }
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
      const yOffset = -120
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth"
      })
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className="bg-white min-h-screen">

      <Navbar />
      <main className="pt-0">
      <Outlet />
      </main>

      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImagePrivacyPolicy.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">

          <p className="text-sm mb-3 opacity-80">
            Home / Privacy Policy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Because Every Mom Deserves Care —
            <br /> Including <span className="text-[#f4a6b7]">Her Data</span>
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            Learn how MomCare+ protects your privacy.
          </p>


        </div>

      </section>



      {/* CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[260px_1fr] gap-16">


          {/* SIDEBAR */}
          <div className="hidden md:block">
            <div className="sticky top-32 space-y-4">

              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-left w-full text-sm transition-all duration-200
                    ${
                      active === item.id
                        ? "text-primary font-semibold border-l-2 border-primary pl-3"
                        : "text-gray-400 hover:text-gray-700"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}

            </div>
          </div>


          {/* MAIN CONTENT */}
          <div className="space-y-20 text-gray-700 text-lg leading-relaxed">


            {/* HOW IT WORKS */}
            <div id="how-it-works" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <FileText className="text-primary" size={22} />
                How MomCare+ Works
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Trimester-specific guidance delivered weekly</li>
                <li>Mood, diet, hydration, symptom & exercise tracking</li>
                <li>Reminders for scans, checkups, supplements</li>
                <li>Mental wellness tools like guided breathing</li>
                <li>Personalized insights via TrimesterFlow & ProgressHub</li>
              </ul>

              <p className="mt-4">
                To provide this experience, we collect certain information
                that you choose to share.
              </p>
            </div>


            {/* DATA COLLECTION */}
            <div id="data-collection" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Database className="text-primary" size={22} />
                What Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Profile & Pregnancy Info (age, due date, start date)</li>
                <li>Health Data (symptoms, allergies, conditions)</li>
                <li>Daily Logs (mood, hydration, food, exercise)</li>
                <li>Reminders & Notes (appointments, events)</li>
              </ul>

              <p className="mt-4 font-medium">Device & Diagnostic Data:</p>

              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Device type & OS version</li>
                <li>App usage analytics</li>
                <li>Crash logs (anonymous)</li>
              </ul>
            </div>


            {/* WHY DATA */}
            <div id="why-data" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <List className="text-primary" size={22} />
                Why We Collect Your Data
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Generate weekly pregnancy updates</li>
                <li>Track diet & exercise progress</li>
                <li>Send reminders for care routines</li>
                <li>Provide wellness tools</li>
                <li>Improve app performance</li>
              </ul>

              <p className="mt-4 font-semibold text-primary">
                We do not sell, rent, or monetize your data. Ever.
              </p>
            </div>


            {/* PROTECTION */}
            <div id="protection" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <ShieldCheck className="text-primary" size={22} />
                How We Protect Your Data
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>On-device encryption of sensitive data</li>
                <li>Encrypted cloud storage (AWS, Firebase, MongoDB)</li>
                <li>Secure authentication & APIs</li>
                <li>Strict access control policies</li>
              </ul>

              <p className="mt-4">
                You retain full ownership of your data at all times.
              </p>
            </div>


            {/* RIGHTS */}
            <div id="rights" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <UserCheck className="text-primary" size={22} />
                Your Privacy Rights
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Access your data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account & data</li>
                <li>Withdraw consent anytime</li>
                <li>Export your data (GDPR compliant)</li>
              </ul>
            </div>


          </div>

        </div>
      </section>
      
      {/* CTA */}
      <CTA />

    </div>
  )
}