import { useState } from "react"
import type { LoginRequest } from "../types/auth"

const Login = () => {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  })

  return (
    <div className="min-h-screen relative flex flex-col bg-white overflow-hidden">
    
      {/* NAVBAR */}
      <div className="relative z-30 w-full px-12 py-4 flex items-center justify-between
                  bg-white shadow-md border-b border-gray-100">
  
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/MomCare.svg" className="w-10 h-10" alt="logo" />
          <span className="text-2xl font-semibold text-primary">
            MomCare+
          </span>
        </div>
  
        {/* Center Tabs */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-12 text-base font-medium text-gray-700">
          <span className="hover:text-primary cursor-pointer transition">Home</span>
          <span className="hover:text-primary cursor-pointer transition">Features</span>
          <span className="hover:text-primary cursor-pointer transition">Resources</span>
          <span className="hover:text-primary cursor-pointer transition">Support</span>
        </div>
  
      </div>
  
      {/* MAIN SECTION */}
      <div className="relative flex flex-1 items-center bg-gradient-to-br from-secondary via-white to-secondary">
  
        {/* LEFT SIDE */}
        <div className="relative z-20 w-full md:w-2/5 px-12 md:ml-20">
  
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40">
  
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h2>
  
            <p className="text-sm text-gray-500 mb-8">
              Sign in to continue your pregnancy journey with MomCare+.
            </p>
  
            <form className="space-y-5">
  
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-formfield border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
  
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-formfield border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
  
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition font-medium"
              >
                Sign In
              </button>
  
            </form>
  
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
  
            {/* Social Buttons */}
            <div className="space-y-3">
  
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Continue with Google
              </button>
  
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                  fill="black"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43M14.496 11.74c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.52-1.185.473-1.282z"/>
                </svg>
                Continue with Apple
              </button>
  
            </div>
  
          </div>
        </div>
  
        {/* RIGHT SIDE IMAGE */}
        <div className="absolute right-0 top-0 h-full w-3/5 hidden md:block">
  
          <img
            src="/Background.png"
            alt="illustration"
            className="h-full w-full object-contain"
          />
  
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40"></div>
  
        </div>

      </div>
  
    </div>
  )
}

export default Login