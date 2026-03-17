import { useState } from "react"
import {
  User,
  Shield,
  Bell,
  Eye,
  HeartPulse
} from "lucide-react"

export default function ProfilePage() {

  const [activeTab, setActiveTab] = useState("account")

  const tabs = [
    { id: "account", label: "Account", icon: User },
    { id: "health", label: "Health Info", icon: HeartPulse },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "visibility", label: "Visibility", icon: Eye }
  ]

  return (
    <div className="bg-[#faf7f9] min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-10">

        {/* LEFT SIDEBAR */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-primary/10 h-fit">

          <h2 className="text-lg font-semibold mb-6 text-gray-900">
            Settings
          </h2>

          <div className="space-y-3">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition
                  ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/10">

          {/* PROFILE HEADER */}
          <div className="flex items-center gap-6 mb-10">

            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
              N
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Nupur Sharma
              </h2>
              <p className="text-gray-500 text-sm">
                MomCare+ User
              </p>
            </div>

          </div>


          {/* ACCOUNT TAB */}
          {activeTab === "account" && (
            <div className="space-y-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Account Preferences
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-500">First Name</label>
                  <input
                    className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                    defaultValue="Nupur"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Last Name</label>
                  <input
                    className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                    defaultValue="Sharma"
                  />
                </div>

              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200"
                  defaultValue="nupur@email.com"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600">
                  Cancel
                </button>

                <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold">
                  Update
                </button>
              </div>

            </div>
          )}


          {/* HEALTH TAB */}
          {activeTab === "health" && (
            <div className="space-y-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Health Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-500">Due Date</label>
                  <input type="date" className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200" />
                </div>

                <div>
                  <label className="text-sm text-gray-500">Weeks Pregnant</label>
                  <input className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200" />
                </div>

              </div>

            </div>
          )}


          {/* PRIVACY TAB */}
          {activeTab === "privacy" && (
            <div className="space-y-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Privacy Settings
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Data Sharing</span>
                <input type="checkbox" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Analytics Tracking</span>
                <input type="checkbox" />
              </div>

            </div>
          )}


          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Notifications
              </h3>

              <div className="flex items-center justify-between">
                <span>Reminders</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <span>Tips & Insights</span>
                <input type="checkbox" defaultChecked />
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}