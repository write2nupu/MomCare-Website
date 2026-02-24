const Home = () => {
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

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* LEFT – BIG VISUAL */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/ProgressHub.png"
                  alt="ProgressHub"
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* RIGHT – TEXT */}
              <div>
                <h3 className="text-4xl font-semibold text-gray-900">
                  ProgressHub
                </h3>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Visualize your nutrition, hydration, and activity with
                  structured, trimester-aware insights designed for clarity.
                </p>
              </div>

            </div>
          </div>


          {/* MyPlan */}
          <div className="group bg-gray-50 rounded-3xl p-10
                          transition-all duration-500
                          hover:-translate-y-3 hover:shadow-2xl">

            <h3 className="text-3xl font-semibold text-gray-900">
              MyPlan
            </h3>

            <p className="mt-4 text-gray-600">
              Personalized meal and exercise plans designed around your
              trimester and health profile.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden">
              <img
                src="/myplan.png"
                alt="MyPlan"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>


          {/* TriTrack */}
          <div className="group bg-gray-50 rounded-3xl p-10
                          transition-all duration-500
                          hover:-translate-y-3 hover:shadow-2xl">

            <h3 className="text-3xl font-semibold text-gray-900">
              TriTrack
            </h3>

            <p className="mt-4 text-gray-600">
              Weekly baby development insights and maternal updates
              presented in a calm, structured format.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden">
              <img
                src="/tritrack.png"
                alt="TriTrack"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>


          {/* MoodNest */}
          <div className="group bg-[#faf7f8] rounded-3xl p-12
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* LEFT – VIDEO */}
              <div className="rounded-2xl overflow-hidden">
                <video
                  src="/SmileAnimation1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* RIGHT – TEXT */}
              <div>
                <h3 className="text-4xl font-semibold text-gray-900">
                  MoodNest
                </h3>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Interactive calming animations designed to reduce anxiety
                  and support emotional balance throughout your journey.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home