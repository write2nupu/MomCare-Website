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

    </div>
  )
}

export default Home