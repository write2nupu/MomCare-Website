import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { token, user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "relative transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:origin-left hover:after:w-full";

  return (
    <div
      className="fixed top-0 left-0 w-full z-50
      bg-white shadow-sm border-b border-gray-200
      px-12 py-4 flex items-center justify-between"
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/MomCare.svg" className="w-10 h-10" alt="logo" />
        <span className="text-2xl font-semibold text-primary">MomCare+</span>
      </Link>

      {/* NAV LINKS */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 text-base font-medium text-gray-700">
        
        {/* HOME */}
        <Link to="/" className={navLinkClass}>
          Home
        </Link>

        {/* ABOUT DROPDOWN */}
        <div className="relative group">
          <span className={`${navLinkClass} flex items-center gap-1 cursor-pointer`}>
            About
            <svg
              className="w-4 h-4 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>

          {/* DROPDOWN */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
            <ul className="py-2 text-sm text-gray-700">
              {[
                { to: "/about", label: "About Us" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-of-service", label: "Terms of Service" },
                { to: "/disclaimers", label: "Disclaimers & Citations" },
                { to: "/gdpr-rights", label: "GDPR Rights" },
                { to: "/team", label: "Our Team" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block px-4 py-2 transition-all duration-200
                    hover:bg-primary/10 hover:text-primary hover:pl-5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <Link to="/faq" className={navLinkClass}>
          FAQs
        </Link>

        {/* CONTACT */}
        <Link to="/contact" className={navLinkClass}>
          Contact Us
        </Link>
      </div>

      {/* RIGHT SIDE */}
      {!token ? (
        <Link to="/login">
          <button className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition">
            Get Started
          </button>
        </Link>
      ) : (
        <div className="relative">
          <img
            src={user?.avatar || "/default-avatar.png"}
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-200"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
              
              {/* USER INFO */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user?.avatar || "/default-avatar.png"}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user?.name || "User"}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              {/* MENU */}
              <div className="space-y-2 text-sm text-gray-700">
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  Settings & Privacy
                </Link>

                <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  Help
                </div>

                <div className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  Language
                </div>

                <div
                  onClick={logout}
                  className="px-3 py-2 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
                >
                  Logout
                </div>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}