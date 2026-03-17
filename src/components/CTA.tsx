import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#f7f8fb] pt-20 pb-8 px-6">
      <div className="max-w-[1550px] mx-auto">
        
        <div className="bg-gradient-to-r from-primary via-[#a84c64] to-primary rounded-[36px] px-20 py-24 text-white">
          
          {/* TOP TEXT */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
                <img src="/MomCare.svg" className="w-10" alt="logo" />
                <span className="text-2xl font-semibold">MomCare+</span>
              </div>

              <p className="mt-4 text-white/80 text-m max-w-xs">
                Supporting mothers through every step of their pregnancy.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xl font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2 text-white/80 text-m">
                {[
                  { to: "/home", label: "Home" },
                  { to: "/faq", label: "FAQs" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="relative w-fit block transition-all duration-300 hover:text-white hover:translate-x-1
                      after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                      after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEARN MORE */}
            <div>
              <p className="text-xl font-semibold mb-4">Learn More</p>
              <ul className="space-y-2 text-white/80 text-m">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/privacy-policy", label: "Privacy Policy" },
                  { to: "/terms-of-service", label: "Terms of Service" },
                  { to: "/gdpr-rights", label: "GDPR Rights" },
                  { to: "/disclaimers", label: "Disclaimers & Citations" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="relative w-fit block transition-all duration-300 hover:text-white hover:translate-x-1
                      after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-white
                      after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* DOWNLOAD */}
            <div className="flex justify-start md:justify-end md:mr-20">
              <div className="flex flex-col items-center">
                <p className="text-xl mb-4">Download our App</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-4 bg-black text-white px-7 py-4 rounded-2xl shadow-xl hover:scale-105 hover:bg-gray-900 transition-all duration-300"
                >
                  <svg width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18..." />
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
  );
}