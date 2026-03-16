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

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 text-base font-medium text-gray-700">

          <span className="relative cursor-pointer transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Home
          </span>

          <span className="relative cursor-pointer transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Features
          </span>

          <span className="relative cursor-pointer transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Resources
          </span>

          <span className="relative cursor-pointer transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Support
          </span>

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
            desc: "Discover the mission and vision behind MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
              </svg>
            )
          },
          {
            title: "Privacy Policy",
            desc: "Understand how your personal data is securely protected",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
              </svg>
            )
          },
          {
            title: "Terms of Service",
            desc: "Review the guidelines governing the use of MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0M6 9.3v2.4c0 .042.02.107.105.175A.64.64 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.64.64 0 0 0 9.5 9h-3a.64.64 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
              </svg>
            )
          },
          {
            title: "Disclaimers & Citations",
            desc: "Medical references and important usage disclaimers",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
              </svg>
            )
          },
          {
            title: "GDPR Rights",
            desc: "Learn how MomCare+ respects your European data rights",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
              </svg>
            )
          },
          {
            title: "Our Team",
            desc: "Meet the developers and researchers behind MomCare+",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
              </svg>
            )
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
                {item.icon}
              </div>

              {/* TEXT CONTENT */}
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
                            cursor-pointer"
                >

                  <span
                    className="text-lg transition-transform duration-300
                              -rotate-45 hover:rotate-0"
                  >
                    →
                  </span>

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

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Home
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Features
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Resources
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Support
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Contact Us
                  </li>

                </ul>
              </div>


              <div>
                <p className="text-xl font-semibold mb-4">Learn More</p>

                <ul className="space-y-2 text-white/80 text-m">

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    About Us
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Privacy Policy
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Terms of Service
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    GDPR Rights
                  </li>

                  <li className="relative w-fit cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-1
                                after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                                after:transition-all after:duration-300 hover:after:w-full">
                    Disclaimers & Citations
                  </li>

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

export default Home