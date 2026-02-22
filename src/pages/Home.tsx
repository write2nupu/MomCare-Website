const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary via-white to-secondary flex flex-col">
      
          {/* HERO */}
          <div className="flex flex-1 items-center justify-between px-16 py-20">
      
            {/* LEFT SIDE */}
            <div className="max-w-xl">
      
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Your Pregnancy.
                <br />
                Guided with Care.
              </h1>
      
              <p className="mt-6 text-lg text-gray-600">
                MomCare+ helps you track your trimester, monitor health,
                and stay emotionally supported throughout your journey.
              </p>
      
              <div className="mt-8 flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
                  Get Started
                </button>
      
                <button className="border border-primary text-primary px-6 py-3 rounded-xl hover:bg-secondary transition">
                  Learn More
                </button>
              </div>
      
            </div>
      
            {/* RIGHT SIDE */}
            <div className="hidden md:block relative">
      
              <img
                src="/AppMockup.png"
                alt="App Preview"
                className="w-[450px] drop-shadow-2xl"
              />
      
              {/* Soft Glow */}
              <div className="absolute -z-10 top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      
            </div>
      
          </div>
      
        </div>
      )
  }
  
  export default Home