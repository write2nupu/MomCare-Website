import { User, Pencil, Trash2, PauseCircle, Download, Ban } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import CTA from "../components/CTA";
export default function GDPRRights() {
  const rights = [
    {
      icon: User,
      title: "The Right to Access",
      text: "You have the right to request a copy of the personal data we hold about you.",
    },
    {
      icon: Pencil,
      title: "The Right to Rectification",
      text: "If you believe any of the data we hold about you is inaccurate or incomplete, you have the right to have it corrected.",
    },
    {
      icon: Trash2,
      title: "The Right to Erasure",
      text: "You can request that we delete your personal data from our systems. This is also known as the 'Right to be Forgotten'.",
    },
    {
      icon: PauseCircle,
      title: "The Right to Restrict Processing",
      text: "You have the right to request that we temporarily or permanently stop processing all or some of your personal data.",
    },
    {
      icon: Download,
      title: "The Right to Data Portability",
      text: "You can request a copy of your personal data in a common, machine-readable format to transfer to another service.",
    },
    {
      icon: Ban,
      title: "The Right to Object",
      text: "You have the right to object to us processing your personal data for specific purposes, such as direct marketing.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white min-h-screen">
      {/* NAVBAR */}
      <Navbar />
        <main>
        <Outlet />
        </main>

      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageGDPR.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 text-white">
          <p className="text-sm mb-3 opacity-80">Home / GDPR Rights</p>

          <h1 className="text-6xl font-bold">
            Your Data, Your Rights, <br />
            Your <span className="text-[#f4a6b7]">Trust</span>
          </h1>

          <p className="mt-6 text-xl max-w-2xl text-white/90">
            We are committed to safeguarding your privacy. You have the right to
            control your personal information, and we make it easy for you to do
            so.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="pb-28 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {rights.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-secondary/30 rounded-3xl p-8 border border-primary/10 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-6">
                  <Icon className="text-primary" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW TO EXERCISE */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Exercise Your Rights
          </h2>

          <p className="text-gray-600">
            To exercise any of these rights, please send a clear request to our
            dedicated privacy team. We will respond to your request in a timely
            manner, in accordance with applicable law.
          </p>

          <div className="mt-8 inline-block px-8 py-4 rounded-full bg-primary/10 text-primary font-semibold">
            support@momcare.app
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

    </div>
  );
}
