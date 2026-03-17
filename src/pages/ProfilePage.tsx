import { useState } from "react"
import { User, HeartPulse, Shield } from "lucide-react"

export default function ProfilePage({ userData }: any) {

  const [activeTab, setActiveTab] = useState("personal")
  const [isEditing, setIsEditing] = useState(false)

  /* 🔥 DEFAULT FALLBACK (IMPORTANT) */
  const user = userData || {
    personal: {
      fullName: "XXXXX",
      dob: "XX XXX XXXX",
      height: "XXX cm",
      currentWeight: "XX kg",
      prePregnancyWeight: "XX kg"
    },
    health: {
      dueDate: "XX XXX XXXX",
      day: "--",
      week: "--",
      trimester: "--",
      dietaryPreferences: [],
      allergies: []
    },
    account: {
      email: "Not Set",
      appleConnected: false
    }
  }

  const handleChange = (section: string, field: string, value: any) => {
    // 🔥 Backend dev will wire this
    console.log(section, field, value)
  }

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "health", label: "Health Info", icon: HeartPulse },
    { id: "security", label: "Account & Security", icon: Shield },
  ]

  return (
    <div className="bg-[#faf7f9] min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-[260px_1fr] gap-10">

        {/* SIDEBAR */}
        <div className="bg-white rounded-3xl p-6 border border-primary/10">

          <h2 className="text-lg font-semibold mb-6">Profile</h2>

          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-2
                ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            )
          })}

        </div>


        {/* CONTENT */}
        <div className="space-y-8">

          {/* HEADER */}
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-primary/10">

            <div>
              <h2 className="text-xl font-semibold">{user.personal.fullName}</h2>
              <p className="text-gray-500 text-sm">MomCare+ User</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-primary text-white px-6 py-2 rounded-xl"
            >
              {isEditing ? "Save" : "Edit"}
            </button>

          </div>


          {/* PERSONAL */}
          {activeTab === "personal" && (
            <Card title="Personal Information">

              <Row label="Full Name" value={user.personal.fullName} editable={isEditing} onChange={(v:any)=>handleChange("personal","fullName",v)} />
              <Divider />

              <Row label="Date of Birth" value={user.personal.dob} editable={isEditing} onChange={(v:any)=>handleChange("personal","dob",v)} />
              <Divider />

              <Row label="Height" value={user.personal.height} editable={isEditing} onChange={(v:any)=>handleChange("personal","height",v)} />
              <Divider />

              <Row label="Current Weight" value={user.personal.currentWeight} editable={isEditing} onChange={(v:any)=>handleChange("personal","currentWeight",v)} />
              <Divider />

              <Row label="Pre Pregnancy Weight" value={user.personal.prePregnancyWeight} editable={isEditing} onChange={(v:any)=>handleChange("personal","prePregnancyWeight",v)} />

            </Card>
          )}


          {/* HEALTH */}
          {activeTab === "health" && (
            <Card title="Health Information">

              <Row label="Due Date" value={user.health.dueDate} editable={isEditing} onChange={(v:any)=>handleChange("health","dueDate",v)} />
              <Divider />

              <Row label="Day" value={user.health.day} editable={false} />
              <Divider />

              <Row label="Week" value={user.health.week} editable={false} />
              <Divider />

              <Row label="Trimester" value={user.health.trimester} editable={false} />
              <Divider />

              <Row
                label="Dietary Preferences"
                value={user.health.dietaryPreferences.length ? user.health.dietaryPreferences.join(", ") : "None"}
                editable={isEditing}
                onChange={(v:any)=>handleChange("health","dietaryPreferences",v.split(","))}
              />
              <Divider />

              <Row
                label="Allergies"
                value={user.health.allergies.length ? user.health.allergies.join(", ") : "None"}
                editable={isEditing}
                onChange={(v:any)=>handleChange("health","allergies",v.split(","))}
              />

            </Card>
          )}


          {/* SECURITY */}
          {activeTab === "security" && (
            <Card title="Account & Security">

              <Row label="Email Address" value={user.account.email} editable={isEditing} onChange={(v:any)=>handleChange("account","email",v)} />
              <Divider />

              <ActionRow label="Change Password" />
              <Divider />

              <ActionRow
                label="Apple ID"
                action={user.account.appleConnected ? "Disconnect" : "Connect"}
                danger={user.account.appleConnected}
              />

            </Card>
          )}

        </div>

      </div>

    </div>
  )
}


/* ---------- COMPONENTS ---------- */

function Card({ title, children }: any) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-primary/10">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Row({ label, value, editable, onChange }: any) {
  return (
    <div className="flex justify-between items-center">

      <span className="text-gray-600">{label}</span>

      {editable ? (
        <input
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-right border-b border-gray-300 focus:outline-none"
        />
      ) : (
        <span className="text-gray-900">{value}</span>
      )}

    </div>
  )
}

function ActionRow({ label, action, danger }: any) {
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <span>{label}</span>
      {action ? (
        <span className={danger ? "text-red-500" : "text-primary"}>
          {action}
        </span>
      ) : (
        <span>›</span>
      )}
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-gray-200" />
}