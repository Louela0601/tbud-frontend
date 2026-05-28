"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => {});
  }, []);

  const stats = [
    { value: "4", label: "Services Offered" },
    { value: "3", label: "Team Members" },
    { value: "FREE", label: "All Services" },
    { value: "2026", label: "Founded" },
  ];

  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white" }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 6rem",
        gap: "2rem",
      }}>
        <div style={{ maxWidth: "600px" }}>
          <div style={{
            display: "inline-block",
            border: "1px solid #ffffff40",
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            fontSize: "0.85rem",
            marginBottom: "1.5rem",
            color: "#ffffffcc",
          }}>
            Meet Tio — Your Digital Buddy
          </div>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "900", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Your Digital Buddy,<br />Always Ready.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#ffffffaa", marginBottom: "2rem", lineHeight: 1.7 }}>
            T-Bud delivers modern IT services for everyone.<br />
            Simple, fast, and completely free.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/services" style={{
              backgroundColor: "#00d4ff",
              color: "#0a0f1a",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "1rem",
            }}>
              Explore Services
            </Link>
            <Link href="/about" style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "0.75rem 1.75rem",
              borderRadius: "8px",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "1rem",
              border: "2px solid #ffffff40",
            }}>
              Meet Tio
            </Link>
          </div>
        </div>

        {/* Bud Mascot placeholder */}
        <div style={{
          width: "420px",
          height: "420px",
          border: "1px solid #1a2535",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "6rem",
          flexShrink: 0,
          backgroundColor: "#0d1526",
        }}>
          🦜
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        padding: "2rem 6rem",
        borderTop: "1px solid #1a2535",
        borderBottom: "1px solid #1a2535",
      }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            backgroundColor: "#0d1526",
            border: "1px solid #1a2535",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "#00d4ff", marginBottom: "0.5rem" }}>
              {stat.value}
            </div>
            <div style={{ color: "#ffffffaa", fontSize: "0.95rem" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section style={{ padding: "5rem 6rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "800", marginBottom: "3rem" }}>
          What We Offer
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {services.length > 0 ? services.map((service: any) => (
            <div key={service.id} style={{
              backgroundColor: "#0d1526",
              border: "1px solid #1a2535",
              borderRadius: "12px",
              padding: "1.5rem",
            }}>
              <h3 style={{ color: "#00d4ff", fontWeight: "700", marginBottom: "0.5rem" }}>{service.title}</h3>
              <p style={{ color: "#ffffffaa", fontSize: "0.9rem", marginBottom: "1rem" }}>{service.description}</p>
              <span style={{
                backgroundColor: "#00d4ff20",
                color: "#00d4ff",
                border: "1px solid #00d4ff50",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}>
                {service.is_free ? "FREE" : `₱${service.price}`}
              </span>
            </div>
          )) : (
            // Placeholder cards while loading
            ["Graphic & Creative", "Educational & Training", "Social Media & Marketing", "Online Business"].map((title) => (
              <div key={title} style={{
                backgroundColor: "#0d1526",
                border: "1px solid #1a2535",
                borderRadius: "12px",
                padding: "1.5rem",
              }}>
                <h3 style={{ color: "#00d4ff", fontWeight: "700", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "#ffffffaa", fontSize: "0.9rem", marginBottom: "1rem" }}>Design that stands out</p>
                <span style={{
                  backgroundColor: "#00d4ff20",
                  color: "#00d4ff",
                  border: "1px solid #00d4ff50",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}>FREE</span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: "linear-gradient(135deg, #0066cc, #00d4ff)",
        padding: "4rem 6rem",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "2rem" }}>
          All T-Bud services are FREE — Start your digital journey today!
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "3rem" }}>🦜</span>
          <Link href="/contact" style={{
            backgroundColor: "white",
            color: "#0066cc",
            padding: "0.85rem 2.5rem",
            borderRadius: "8px",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "1.1rem",
          }}>
            Get Started Free
          </Link>
        </div>
      </section>

    </main>
  );
}