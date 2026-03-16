import { useState } from "react";
import { faqs } from "../Data/faqs";

const Home = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">

      {/* NAVBAR (same logic as login) */}
      <div className="fixed top-0 left-0 w-full z-50
                bg-white shadow-sm border-b border-gray-200
                px-12 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src="/MomCare.svg" className="w-10 h-10" alt="logo" />
          <span className="text-2xl font-semibold text-primary">
            MomCare+
          </span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-12 text-base font-medium text-gray-700">
          <span className="hover:text-primary cursor-pointer transition">Home</span>
          <span className="hover:text-primary cursor-pointer transition">Features</span>
          <span className="hover:text-primary cursor-pointer transition">Resources</span>
          <span className="hover:text-primary cursor-pointer transition">Support</span>
        </div>

        <div>
          <button className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>


      {/* HERO SECTION */}
      <div className="min-h-screen bg-white flex items-stretch">

        <div className="w-full mt-[72px] flex items-stretch">

          <div className="w-full bg-gradient-to-br from-white via-secondary to-primary
                          flex items-center justify-between
                          px-20 relative overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Your Pregnancy Journey,
                <span className="text-primary"> Simplified.</span>
              </h1>

              <p className="mt-8 text-lg text-gray-600 max-w-xl">
                Track baby development, monitor your health,
                and receive personalized insights —
                all in one beautifully designed app.
              </p>

              <div className="mt-10 flex gap-6">
                <button className="bg-primary text-white px-8 py-4 rounded-2xl shadow-md hover:opacity-90 transition">
                  Download App
                </button>

                <button className="border border-primary text-primary px-8 py-4 rounded-2xl hover:bg-white/30 transition">
                  Explore Features
                </button>
              </div>
            </div>


            {/* RIGHT SIDE SCREENSHOTS */}
            <div className="relative w-[950px] h-full hidden md:flex items-end">

              {/* Back Layer */}
              <img
                src="/sample2.jpg"
                className="absolute bottom-0 left-0 w-80 rounded-3xl z-10"
              />

              {/* Middle Layer */}
              <img
                src="/sample3.jpg"
                className="absolute bottom-0 left-56 w-[420px] rounded-3xl shadow-xl z-30"
              />

              {/* Front Layer */}
              <img
                src="/Screenshot1.jpg"
                className="absolute bottom-0 left-[520px] w-80 rounded-3xl z-20"
              />

            </div>

          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bg-white py-32 px-12">

        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900">
            Designed for Every Step of Your Journey
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Four powerful tools working together to support your pregnancy —
            physically, emotionally, and intelligently.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ProgressHub */}
          <div className="group bg-[#faf7f8] rounded-3xl p-12
                          transition-all duration-500
                          hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-start gap-8">

              {/* ICON */}
              <div className="w-14 aspect-square flex-shrink-0
                flex items-center justify-center
                rounded-xl bg-primary/10
                text-primary
                shadow-sm
                group-hover:bg-primary
                group-hover:text-white
                group-hover:scale-105
                transition-all duration-300">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16">

                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>

                </svg>

              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  ProgressHub
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Visualize your nutrition, hydration, and activity with structured,
                  trimester-aware insights designed for clarity.
                </p>
              </div>

            </div>
          </div>


          {/* MyPlan */}
          <div className="group bg-gray-50 rounded-3xl p-12
                          transition-all duration-500
                          hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-start gap-8">

              {/* ICON */}
              <div className="w-14 aspect-square flex-shrink-0
                              flex items-center justify-center
                              rounded-xl bg-primary/10
                              text-primary
                              ring-1 ring-primary/15
                              shadow-sm
                              group-hover:bg-primary
                              group-hover:text-white
                              group-hover:scale-105
                              transition-all duration-300">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 16 16">

                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>

                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>

                  <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>

                </svg>

              </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">
                MyPlan
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Personalized meal and exercise plans designed around your trimester
                and health profile.
              </p>
            </div>

          </div>
        </div>


        {/* TriTrack */}
        <div className="group bg-gray-50 rounded-3xl p-12
                        transition-all duration-500
                        hover:-translate-y-2 hover:shadow-2xl">

          <div className="flex items-start gap-8">

            {/* ICON */}
            <div className="w-14 aspect-square flex-shrink-0
                            flex items-center justify-center
                            rounded-xl bg-primary/10
                            text-primary
                            ring-1 ring-primary/15
                            shadow-sm
                            group-hover:bg-primary
                            group-hover:text-white
                            group-hover:scale-105
                            transition-all duration-300">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 16 16">

                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>

                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>

              </svg>

            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">
                TriTrack
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Weekly baby development insights and maternal updates presented in
                a calm, structured format.
              </p>
            </div>

          </div>
        </div>


        {/* MoodNest */}
        <div className="group bg-[#faf7f8] rounded-3xl p-12
                        transition-all duration-500
                        hover:-translate-y-2 hover:shadow-2xl">

          <div className="flex items-start gap-8">

            {/* ICON */}
            <div className="w-14 aspect-square flex-shrink-0
                            flex items-center justify-center
                            rounded-xl bg-primary/10
                            text-primary
                            ring-1 ring-primary/15
                            shadow-sm
                            group-hover:bg-primary
                            group-hover:text-white
                            group-hover:scale-105
                            transition-all duration-300">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 16 16">

                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>

              </svg>

            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">
                MoodNest
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Interactive calming animations designed to reduce anxiety and
                support emotional balance throughout your journey.
              </p>
            </div>

          </div>
        </div>

      </div>
      </section>

      {/* MOMCARE INFO HUB */}
      {/* INFORMATION SECTION */}
      <section className="bg-[#f7f8fb] py-32 px-12">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900">
            Learn More About MomCare+
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Transparency, privacy, and trust are at the core of MomCare+. 
            Explore the policies and information guiding our platform.
          </p>
        </div>


        {/* GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "About Us",
              desc: "Discover the mission and vision behind MomCare+"
            },
            {
              title: "Privacy Policy",
              desc: "Understand how your personal data is securely protected"
            },
            {
              title: "Terms of Service",
              desc: "Review the guidelines governing the use of MomCare+"
            },
            {
              title: "Disclaimers & Citations",
              desc: "Medical references and important usage disclaimers"
            },
            {
              title: "GDPR Rights",
              desc: "Learn how MomCare+ respects your European data rights"
            },
            {
              title: "Our Team",
              desc: "Meet the developers and researchers behind MomCare+"
            }

          ].map((item, i) => (

            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200
                        bg-white p-10
                        transition-all duration-500 ease-out
                        hover:-translate-y-1 hover:shadow-xl"
            >

              {/* GRADIENT HOVER BACKGROUND */}
              <div
                className="absolute inset-0 
                          bg-gradient-to-br from-primary via-primary/90 to-primary/80
                          translate-y-full
                          group-hover:translate-y-0
                          transition-transform duration-500"
              />


              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full">

                {/* ICON */}
                <div
                  className="w-14 h-14 flex items-center justify-center
                            rounded-xl bg-primary/10 text-primary
                            transition-all duration-300
                            group-hover:bg-white group-hover:text-primary"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3z"/>
                  </svg>

                </div>


                {/* TEXT CONTENT (MOVES UP) */}
                <div
                  className="mt-10 transition-transform duration-500
                            group-hover:-translate-y-4"
                >

                  <h3
                    className="text-xl font-semibold text-gray-900
                              transition-colors duration-300
                              group-hover:text-white"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 text-gray-600 text-lg leading-relaxed
                              transition-colors duration-300
                              group-hover:text-white/90"
                  >
                    {item.desc}
                  </p>

                </div>


                {/* ARROW BUTTON */}
                <div
                  className="mt-6 opacity-0 translate-y-3
                            group-hover:opacity-100
                            group-hover:translate-y-0
                            transition-all duration-300"
                >

                  <div
                    className="w-11 h-11 flex items-center justify-center
                              rounded-full bg-white text-primary shadow-md
                              transition-all duration-300
                              group-hover:translate-x-1"
                  >

                    <span className="text-lg font-semibold">↗</span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-32 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-primary font-semibold mb-4">• FAQs</p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Your pregnancy questions,
              <span className="text-primary"> answered here</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Find clear, trusted answers to common questions about pregnancy care,
              baby development, and maternal wellbeing.
            </p>

            {/* CONTACT CARD */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-sm max-w-md border border-primary/10">

              <div className="bg-primary text-white text-xl px-6 py-4 font-bold text-center">
                Need Help? Let’s Talk.
              </div>

              <div className="grid grid-cols-2 text-center py-6 bg-secondary/20">

                <div className="border-r border-primary/10">
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-sm text-gray-500 mt-1">
                    support@momcare.app
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Help Center</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Visit Support
                  </p>
                </div>

              </div>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
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
                      <p className="px-6 py-5 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#f7f8fb] py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gradient-to-br from-primary to-[#8f3d52]
              rounded-[36px] px-20 py-24 text-white"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* TEXT */}
              <div>
                <h2 className="text-5xl font-bold leading-tight">
                  Start your pregnancy journey today
                </h2>

                <p className="mt-6 text-white/80 text-lg">
                  Track baby development, manage personalized plans, and support your
                  emotional wellbeing with MomCare+.
                </p>

                {/* APP STORE BUTTON */}
                <a
                  href="#"
                  className="mt-10 inline-flex items-center gap-4
              bg-white text-black px-8 py-4 rounded-xl
              font-semibold shadow-lg hover:shadow-xl
              transition hover:-translate-y-1"
                >
                  <img src="/appstore.svg" className="w-6" />
                  Download on App Store
                </a>
              </div>

              {/* SIDE VISUAL */}
              <div className="flex justify-center md:justify-end">
                <div
                  className="w-40 h-40 rounded-full bg-white/20
              flex items-center justify-center"
                >
                  <span className="text-4xl">↗</span>
                </div>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="mt-20 pt-10 border-t border-white/20 grid md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <img src="/MomCare.svg" className="w-10" />
                  <span className="text-xl font-semibold">MomCare+</span>
                </div>

                <p className="mt-4 text-white/70 text-sm">
                  Supporting mothers through every step of pregnancy.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-4">Quick Links</p>

                <ul className="space-y-2 text-white/80 text-sm">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Resources</li>
                  <li>Support</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-4">Learn More</p>

                <ul className="space-y-2 text-white/80 text-sm">
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>GDPR Rights</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-4">Legal</p>

                <ul className="space-y-2 text-white/80 text-sm">
                  <li>Disclaimers & Citations</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-12 text-sm">
            © {new Date().getFullYear()} MomCare+ All rights reserved.
          </p>
        </div>
      </section>


    </div>
  )
}

export default Home