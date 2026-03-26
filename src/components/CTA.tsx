import { Link } from "react-router-dom";

import Logo from "../assets/images/MomCare.svg";

export default function CTA() {
    return (
        <section className="bg-[#f7f8fb] py-12 md:pt-20 md:pb-8 px-4 md:px-6">
            <div className="max-w-[1550px] mx-auto">

                {/* MAIN BOX */}
                <div className="bg-gradient-to-r from-primary via-[#a84c64] to-primary rounded-[28px] md:rounded-[36px] px-6 md:px-20 py-12 md:py-24 text-white">

                    {/* HERO TEXT */}
                    <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                            Start your pregnancy journey today
                        </h2>

                        <p className="mt-4 md:mt-6 text-white/80 text-sm sm:text-base md:text-lg">
                            Track baby development, manage personalized plans, and support your
                            emotional wellbeing with MomCare+.
                        </p>
                    </div>

                    {/* DIVIDER */}
                    <div className="mt-10 md:mt-16 border-t border-white/30" />

                    {/* CONTENT */}
                    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                        {/* LOGO */}
                        <div>
                            <div className="flex items-center gap-3">
                                <img src={Logo} className="w-8 md:w-10" alt="logo" />
                                <span className="text-lg md:text-2xl font-semibold">MomCare+</span>
                            </div>

                            <p className="mt-3 text-white/80 text-sm md:text-base max-w-xs">
                                Supporting mothers through every step of their pregnancy.
                            </p>
                        </div>

                        {/* QUICK LINKS + LEARN MORE (SIDE BY SIDE ON MOBILE) */}
                        <div className="grid grid-cols-2 gap-6 md:col-span-2">

                            {/* QUICK LINKS */}
                            <div>
                                <p className="text-lg md:text-xl font-semibold mb-3">Quick Links</p>
                                <ul className="space-y-2 text-white/80 text-sm md:text-base">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/faq">FAQs</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* LEARN MORE */}
                            <div>
                                <p className="text-lg md:text-xl font-semibold mb-3">Learn More</p>
                                <ul className="space-y-2 text-white/80 text-sm md:text-base">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-of-service">Terms of Service</Link></li>
                                    <li><Link to="/gdpr-rights">GDPR Rights</Link></li>
                                    <li><Link to="/disclaimers">Disclaimers & Citations</Link></li>
                                </ul>
                            </div>

                        </div>

                        {/* DOWNLOAD */}
                        <div className="flex flex-col items-center md:items-end">
                            <p className="text-lg md:text-xl mb-3 md:mb-4">
                                Download our App
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-3 bg-black text-white px-5 md:px-7 py-3 md:py-4 rounded-2xl shadow-xl active:scale-[0.97] transition"
                            >
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                </svg>

                                <div className="leading-tight">
                                    <div className="text-[10px] md:text-xs opacity-80">
                                        Download on the
                                    </div>
                                    <div className="text-sm md:text-lg font-semibold">
                                        App Store
                                    </div>
                                </div>
                            </a>

                            <p className="text-white/70 text-xs md:text-sm mt-2">
                                Available for iPhone
                            </p>
                        </div>

                    </div>
                </div>

                {/* COPYRIGHT */}
                <p className="text-center text-gray-500 mt-6 md:mt-8 text-sm md:text-lg">
                    © {new Date().getFullYear()} MomCare+ All rights reserved
                </p>

            </div>
        </section>
    );
}