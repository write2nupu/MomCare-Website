import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import PageLoader from "./components/PageLoader";

import Login from "./pages/Login"
import Home from "./pages/Home"

import AboutUs from "./pages/AboutUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Disclaimers from "./pages/Disclaimers"
import GDPR from "./pages/GDPR"
import OurTeam from "./pages/OurTeam"
import React from "react";

import FAQ from "./pages/FAQ"
import ContactUs from "./pages/ContactUs"
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <RouteLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
          <Route path="/gdpr-rights" element={<GDPR />} />
          <Route path="/team" element={<OurTeam />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </RouteLoader>
    </BrowserRouter>
  )
}

function RouteLoader({ children }: { children: React.ReactNode }) {

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const firstLoad = React.useRef(true);

  React.useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}

export default App