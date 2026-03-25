import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { token, user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinkClass =
    "relative transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:origin-left hover:after:w-full";

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/MomCare.svg" className="w-8 h-8 md:w-10 md:h-10" alt="logo" />
          <span className="text-xl md:text-2xl font-semibold text-primary">
            MomCare+
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-12 text-base font-medium text-gray-700">
          <Link to="/" className={navLinkClass}>Home</Link>

          <div className="relative group">
            <span className={`${navLinkClass} flex items-center gap-1 cursor-pointer`}>
              About
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-xl shadow-lg border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
              <ul className="py-2 text-sm">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/privacy-policy", label: "Privacy Policy" },
                  { to: "/terms-of-service", label: "Terms of Service" },
                  { to: "/disclaimers", label: "Disclaimers & Citations" },
                  { to: "/gdpr-rights", label: "GDPR Rights" },
                  { to: "/team", label: "Our Team" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="block px-4 py-2 hover:bg-primary/10 hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/faq" className={navLinkClass}>FAQs</Link>
          <Link to="/contact" className={navLinkClass}>Contact Us</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* MOBILE BUTTON */}
          <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(true)}>
            ☰
          </button>

          {/* DESKTOP CTA */}
          {!token ? (
            <Link to="/login" className="hidden lg:block">
              <button className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
                Get Started
              </button>
            </Link>
          ) : (
            <div className="relative hidden lg:block">
              <img
                src={user?.avatar || "/default-avatar.png"}
                className="w-10 h-10 rounded-full cursor-pointer border"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE DRAWER (3/4 width) */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 p-6 flex flex-col
        shadow-2xl transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* TOP */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-primary">MomCare+</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-4">

          {/* HOME */}
          <Link to="/" onClick={() => setMenuOpen(false)}
            className="p-4 rounded-xl bg-gray-50 active:scale-[0.97] transition flex items-center justify-between">
            Home
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* ABOUT */}
          <div className="rounded-xl bg-gray-50 overflow-hidden">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full p-4 flex justify-between items-center"
            >
              About
              <span
                className={`transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400 group-hover:text-primary transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div className={`overflow-hidden transition-all ${aboutOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="flex flex-col border-t">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/privacy-policy", label: "Privacy Policy" },
                  { to: "/terms-of-service", label: "Terms of Service" },
                  { to: "/disclaimers", label: "Disclaimers & Citations" },
                  { to: "/gdpr-rights", label: "GDPR Rights" },
                  { to: "/team", label: "Our Team" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 text-sm text-gray-600 hover:bg-primary/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <Link to="/faq" onClick={() => setMenuOpen(false)}
            className="p-4 rounded-xl bg-gray-50 active:scale-[0.97] transition flex items-center justify-between">
            FAQs
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 group-hover:text-primary transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* CONTACT */}
          <Link to="/contact" onClick={() => setMenuOpen(false)}
            className="p-4 rounded-xl bg-gray-50 active:scale-[0.97] transition flex items-center justify-between">
            Contact Us
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 group-hover:text-primary transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

        </div>

        {/* CTA */}
        <div className="mt-auto pt-6 border-t">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-primary text-white py-4 rounded-2xl shadow-lg active:scale-[0.97] transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}