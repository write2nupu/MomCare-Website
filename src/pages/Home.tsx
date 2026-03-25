import { useState } from "react";
import { faqs } from "../Data/faqs";
import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";

const Home = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">

      <Navbar />
      <main>
      <Outlet />
      </main>

      {/* HERO SECTION */}
      <div className="min-h-screen bg-white flex items-stretch">

        <div className="w-full mt-[72px] flex items-stretch">

          <div className="w-full bg-gradient-to-br from-white via-secondary to-primary
                          flex items-center justify-between
                          px-6 md:px-20 relative overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Pregnancy Journey,
                <span className="text-primary"> Simplified.</span>
              </h1>

              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-xl">
                Track baby development, monitor your health,
                and receive personalized insights —
                all in one beautifully designed app.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6">
                <button
                  className="bg-primary text-white px-8 py-4 rounded-2xl shadow-md
                            transition-all duration-300 ease-out
                            hover:-translate-y-[2px] hover:shadow-lg hover:bg-primary/90"
                >
                  Download App
                </button>

                <button
                  className="border border-primary text-primary px-8 py-4 rounded-2xl
                            transition-all duration-300 ease-out
                            hover:-translate-y-[2px] hover:shadow-md hover:bg-white/40"
                >
                  Explore Features
                </button>

              </div>
            </div>


            {/* RIGHT SIDE SCREENSHOTS */}
            <div className="relative w-full max-w-[950px] h-full hidden md:flex items-end">

              {/* Back Layer */}
              <img
                src="/Screenshot3.jpg"
                className="absolute bottom-0 left-0 w-80 rounded-3xl z-10"
              />

              {/* Middle Layer */}
              <img
                src="/Screenshot2.jpg"
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
      <section className="bg-white py-16 md:py-32 px-6 md:px-12">

        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Designed for Every Step of Your Journey
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Four powerful tools working together to support your pregnancy —
            physically, emotionally, and intelligently.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">

          {/* ProgressHub */}
          <div className="group bg-[#faf7f8] rounded-3xl p-6 md:p-12
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
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
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
          <div className="group bg-gray-50 rounded-3xl p-6 md:p-12
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
              <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
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
        <div className="group bg-gray-50 rounded-3xl p-6 md:p-12
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
              <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
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
        <div className="group bg-[#faf7f8] rounded-3xl p-6 md:p-12
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
              <h3 className="text-xl md:text-3xl font-semibold text-gray-900">
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
      <section className="bg-[#f7f8fb] py-16 md:py-32 px-6 md:px-12">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Learn More About MomCare+
          </h2>

          <p className="mt-6 text-sm md:text-lg text-gray-600">
            Transparency, privacy, and trust are at the core of MomCare+. 
            Explore the policies and information guiding our platform.
          </p>
        </div>


        {/* GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

        {[
          {
            title: "About Us",
            desc: "Discover the mission and vision behind MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
              </svg>
            ),
            link: "/about"
          },
          {
            title: "Privacy Policy",
            desc: "Understand how your personal data is securely protected",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
              </svg>
            ),
            link: "/privacy-policy"
          },
          {
            title: "Terms of Service",
            desc: "Review the guidelines governing the use of MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0M6 9.3v2.4c0 .042.02.107.105.175A.64.64 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.64.64 0 0 0 9.5 9h-3a.64.64 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
              </svg>
            ),
            link: "/terms-of-service"
          },
          {
            title: "Disclaimers & Citations",
            desc: "Medical references and important usage disclaimers",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
              </svg>
            ),
            link: "/disclaimers"
          },
          {
            title: "GDPR Rights",
            desc: "Learn how MomCare+ respects your European data rights",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
              </svg>
            ),
            link: "/gdpr-rights"
          },
          {
            title: "Our Team",
            desc: "Meet the developers and researchers behind MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
              </svg>
            ),
            link: "/team"
          }

        ].map((item, i) => (

          <Link
            key={i}
            to={item.link}
            className="group relative block overflow-hidden rounded-2xl border border-gray-200
                      bg-white p-5 md:p-10
                      active:scale-[0.97] transition-all duration-200 ease-out
                      hover:-translate-y-1 hover:shadow-xl"
          >

            {/* CONTENT */}
            <div className="flex flex-col h-full">

              {/* ICON */}
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center
                              rounded-xl bg-primary/10 text-primary
                              mb-4">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ARROW (ALWAYS VISIBLE) */}
              <div className="mt-4 flex justify-end">
                <div
                  className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center
                            rounded-full bg-primary text-white shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

            </div>
          </Link>

        ))}

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-primary font-semibold mb-4">• FAQs</p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
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
      <CTA />

    </div>
  )
}

export default Home