import { useState } from "react";
import type { LoginRequest } from "../types/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  // HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.type === "email" ? "email" : "password"]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      // SAVE TOKEN
      login(data.access_token, {
        email: formData.email,
      });

      // REDIRECT
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-white overflow-hidden">
      
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 px-12 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/MomCare.svg" className="w-10 h-10" alt="logo" />
          <span className="text-2xl font-semibold text-primary">MomCare+</span>
        </Link>
      </div>

      {/* MAIN */}
      <div className="relative flex flex-1 items-center bg-gradient-to-br from-secondary via-white to-secondary">

        <div className="relative z-20 w-full md:w-2/5 px-12 md:ml-20">
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40">

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h2>

            <p className="text-sm text-gray-500 mb-8">
              Sign in to continue your pregnancy journey with MomCare+.
            </p>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-formfield border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-formfield border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              {/* ERROR */}
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition font-medium"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="text-center py-4 text-sm text-gray-500">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password ?
            </button>
          </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
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
  );
};

export default Login;