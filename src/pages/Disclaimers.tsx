// Source file reference
// :contentReference[oaicite:0]{index=0}

import { useEffect, useState } from "react";
import {
  Stethoscope,
  Lightbulb,
  Utensils,
  Activity,
  TrendingUp,
  BookOpen,
  Smile,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { Outlet } from "react-router-dom";

export default function Disclaimers() {
  const sections = [
    { id: "general", label: "General Medical Disclaimer" },
    { id: "tips", label: "Daily Tips" },
    { id: "meals", label: "Meal Plans" },
    { id: "exercise", label: "Exercise & Yoga" },
    { id: "growth", label: "Baby Growth Tracker" },
    { id: "articles", label: "Pregnancy Articles" },
    { id: "mood", label: "Mood & Music" },
  ];

  const [active, setActive] = useState("general");

  useEffect(() => {
    const handleScroll = () => {
      let current = "general";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 160) current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* HERO */}
      <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroImageDisclaimers.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-[#f4a6b7]/70" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 md:px-6 text-white">
          <p className="text-xs md:text-sm mb-3 opacity-80">
            Home / Disclaimers & Citations
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Disclaimers & Citations
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-xl max-w-2xl text-white/90">
            MomCare supports you, but your doctor knows you best. Please review
            important information before using the app.
          </p>
        </div>
      </section>

      {/* MOBILE TOP NAV (NEW) */}
      <div className="md:hidden sticky top-[64px] z-30 bg-white border-b overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 py-3 min-w-max">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap text-sm pb-1 ${
                active === item.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-[#faf7f9]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[260px_1fr] gap-10 md:gap-16">

          {/* SIDEBAR (DESKTOP ONLY) */}
          <div className="hidden md:block">
            <div className="sticky top-32 h-fit space-y-4">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-left w-full text-sm transition-all duration-200 ${
                    active === item.id
                      ? "text-primary font-semibold border-l-2 border-primary pl-3"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="space-y-20 text-gray-700 text-lg leading-relaxed">
            {/* 1 */}
            <div id="general" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Stethoscope className="text-primary" size={22} />
                1. General Medical Disclaimer
              </h2>

              <p>
                This application is not a substitute for professional medical
                advice, diagnosis, or treatment. The content provided in
                MomCare+, including all text, graphics, images, and other
                material, is for informational and educational purposes only. It
                is not intended to be a substitute for professional medical
                advice from your doctor, midwife, or other qualified healthcare
                provider. Always seek the advice of your physician or another
                qualified health professional with any questions you may have
                regarding a medical condition or your pregnancy. Never disregard
                professional medical advice or delay in seeking it because of
                something you have read in this application. If you think you
                may have a medical emergency, call your doctor or emergency
                services immediately.
              </p>
            </div>

            {/* 2 */}
            <div id="tips" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Lightbulb className="text-primary" size={22} />
                2. Daily Tips
              </h2>

              <p>
                DISCLAIMER: The daily tips provided on the dashboard are
                intended as general guidance and for informational purposes.
                While we strive to provide accurate and useful information, we
                make no representation or warranty of any kind regarding the
                accuracy, validity, or completeness of these tips.
              </p>
            </div>

            {/* 3 */}
            <div id="meals" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Utensils className="text-primary" size={22} />
                3. Personalized Meal Plans
              </h2>

              <p>
                DISCLAIMER: The meal plans provided in this app are personalized
                based on the health conditions, allergies, and dietary
                preferences that you provide. We use this information to
                generate meal suggestions that are tailored to your stated
                needs. However, this automated plan is not a substitute for a
                direct, one-on-one consultation with a registered dietitian or
                your healthcare provider. A medical professional can perform a
                comprehensive assessment that an app cannot. It is your
                responsibility to ensure that all information you enter into the
                app is accurate and complete. MomCare+ is not liable for any
                adverse outcomes resulting from the meal plans, including those
                that may arise from inaccurate or incomplete self-reported data.
              </p>
              <p>
                CITATION: The nutritional data and meal plan structures are
                based on the dataset provided by Kaggle.
              </p>
            </div>

            {/* 4 */}
            <div id="exercise" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Activity className="text-primary" size={22} />
                4. Exercise & Yoga Plans
              </h2>

              <p>
                DISCLAIMER: The exercise and yoga videos in this app have been
                carefully curated to be generally safe and appropriate for the
                specific week of pregnancy you are in. We have taken care to
                select gentle, low-impact routines that are beneficial for most
                expectant mothers. However, every pregnancy is unique. Your
                individual health status, fitness level, or specific medical
                conditions (like placenta previa or high-risk status) may
                require modifications or mean that certain exercises should be
                avoided. It remains essential to consult with your doctor or a
                qualified prenatal fitness instructor before beginning this or
                any exercise regimen. They can provide guidance tailored to your
                body. Listen to your body and stop immediately if you feel pain,
                dizziness, or discomfort. By participating in these exercises,
                you agree that you are doing so at your own risk and release
                MomCare+ from any and all claims or liabilities for any injury
                or harm you might sustain.
              </p>
              <p>
                CITATION: The yoga and exercise video content is provided
                courtesy of Pexels.com.
              </p>
            </div>

            {/* 5 */}
            <div id="growth" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <TrendingUp className="text-primary" size={22} />
                5. Baby Growth & Development
              </h2>

              <p>
                DISCLAIMER: The week-by-week baby size comparisons (e.g., "the
                size of an apple") are illustrative approximations meant to
                provide a fun and relatable way to visualize your baby's growth.
                Fetal development is unique to each pregnancy and can be
                influenced by various factors, including genetics, ethnicity,
                and maternal health. The data used in this app is based on
                general averages and may not perfectly reflect your baby's
                individual development. These comparisons are not a medical tool
                and should not be used for diagnostic purposes. For accurate
                information about your baby's growth, please rely on the
                ultrasound measurements and assessments provided by your
                healthcare professional.
              </p>
            </div>

            {/* 6 */}
            <div id="articles" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <BookOpen className="text-primary" size={22} />
                6. Pregnancy Articles
              </h2>

              <p>
                DISCLAIMER: To provide you with reliable and helpful
                information, we have made a significant effort to carefully
                select and aggregate articles from highly reputable sources,
                including government health organizations, international
                maternal health forums, and leading medical publications. Our
                goal is to bring you trusted educational content to help you
                prepare for your pregnancy journey. However, while we select
                sources known for their high standards of accuracy, MomCare+
                does not independently verify every single fact within these
                articles and cannot guarantee its absolute accuracy or
                timeliness. This content is presented for educational purposes
                and does not necessarily reflect the views of MomCare+. As with
                all content in this app, this information is not a substitute
                for direct, professional medical advice from your healthcare
                provider.
              </p>
              <p>
                CITATION:
                <ul>
                  <li>
                    • American College of Obstetricians and Gynecologists{" "}
                  </li>
                  <li>• BabyCenter </li>
                  <li>• What to Expect </li>
                  <li>• WomensHealth.gov</li>
                </ul>
              </p>
            </div>

            {/* 7 */}
            <div id="mood" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-gray-900 mb-4">
                <Smile className="text-primary" size={22} />
                7. Mood Tracking & Music
              </h2>

              <p>
                DISCLAIMER: We understand that pregnancy is an emotional
                journey. The mood tracking feature is designed to help you
                maintain your emotional well-being. Based on the mood you log,
                our system suggests music that has been thoughtfully categorized
                and selected in an effort to provide comfort, calm, or
                upliftment. It is crucial to understand that this is an
                automated wellness feature intended for comfort and
                entertainment only. It is not a diagnostic tool and does not
                provide medical or psychological therapy. This feature cannot
                detect or treat conditions such as prenatal or postpartum
                depression or anxiety. If you are experiencing persistent low
                moods, anxiety, or have concerns about your mental health, it is
                essential that you speak with your healthcare provider or a
                mental health professional. Your well-being is the top priority,
                and professional care is the correct and necessary step.
              </p>
              <p>CITATION: Images and tunes are taken from Free To Use.</p>
            </div>

            {/* FINAL */}
            <p className="text-primary font-semibold pt-10">
              By using MomCare+, you acknowledge that you have read and
              understood these disclaimers.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}