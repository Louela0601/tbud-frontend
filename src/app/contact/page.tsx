"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_category: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ full_name: "", email: "", phone: "", service_category: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white" }}>
      <section style={{ padding: "5rem 6rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
            Talk to Tio 🦜
          </h1>
          <p style={{ color: "#ffffffaa" }}>Drop us a message — Tio will deliver it personally</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: "1100px", margin: "0 auto" }}>
          {/* Form */}
          <div style={{ backgroundColor: "#0d1526", border: "1px solid #1a2535", borderRadius: "16px", padding: "2rem" }}>
            {status === "success" && (
              <div style={{ backgroundColor: "#00d4ff20", border: "1px solid #00d4ff", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", color: "#00d4ff", textAlign: "center" }}>
                Message sent! Tio will get back to you soon 🎉
              </div>
            )}
            {status === "error" && (
              <div style={{ backgroundColor: "#ff000020", border: "1px solid #ff0000", borderRadius: "8px", padding: "1rem", marginBottom: "1rem", color: "#ff6666", textAlign: "center" }}>
                Something went wrong. Please try again.
              </div>
            )}

            {[
              { label: "Full Name", key: "full_name", placeholder: "Your full name", type: "text" },
              { label: "Email", key: "email", placeholder: "your@email.com", type: "email" },
              { label: "Phone", key: "phone", placeholder: "+63 987-654-3210", type: "text" },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "0.5rem", color: "#ffffffcc" }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: "100%",
                    backgroundColor: "#111c2e",
                    border: "1px solid #1a2535",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "0.5rem", color: "#ffffffcc" }}>Service</label>
              <select
                value={form.service_category}
                onChange={(e) => setForm({ ...form, service_category: e.target.value })}
                style={{
                  width: "100%",
                  backgroundColor: "#111c2e",
                  border: "1px solid #1a2535",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  color: "white",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              >
                <option value="">Select a service</option>
                <option value="Graphic & Creative">Graphic & Creative</option>
                <option value="Educational & Training">Educational & Training</option>
                <option value="Social Media & Marketing">Social Media & Marketing</option>
                <option value="Online Business">Online Business</option>
              </select>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", marginBottom: "0.5rem", color: "#ffffffcc" }}>Message</label>
              <textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                style={{
                  width: "100%",
                  backgroundColor: "#111c2e",
                  border: "1px solid #1a2535",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  color: "white",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                backgroundColor: "#00d4ff",
                color: "#0a0f1a",
                padding: "0.875rem",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send to Tio
            </button>
          </div>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: "✉️", title: "Email", value: "klc.techmate@gmail.com" },
              { icon: "📞", title: "Phone", value: "+63 987-654-3210" },
              { icon: "📍", title: "Location", value: "Philippines" },
              { icon: "🕐", title: "Hours", value: "24/7 - Always Available" },
            ].map((item) => (
              <div key={item.title} style={{
                backgroundColor: "#0d1526",
                border: "1px solid #1a2535",
                borderRadius: "12px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#00d4ff20",
                  border: "1px solid #00d4ff40",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "0.95rem" }}>{item.title}</div>
                  <div style={{ color: "#ffffffaa", fontSize: "0.9rem" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}