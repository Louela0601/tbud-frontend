"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  is_free: boolean;
  price: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`)
      .then((res) => res.json())
      .then((data: Service[]) => {
        setServices(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Loading services...</p>
    </main>
  );

  if (error) return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "red" }}>Error: {error}</p>
    </main>
  );

  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white" }}>
      <section style={{ textAlign: "center", padding: "5rem 6rem 3rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🦜</div>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
          What We Offer
        </h1>
        <p style={{ color: "#ffffffaa", fontSize: "1.1rem" }}>
          All services FREE — Tio has got you covered
        </p>
      </section>

      <section style={{ padding: "2rem 6rem 6rem" }}>
        {services.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ffffffaa" }}>No services found.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {services.map((service) => (
              <div key={service.id} style={{
                backgroundColor: "#0d1526",
                border: "1px solid #1a2535",
                borderRadius: "16px",
                padding: "1.5rem",
              }}>
                <h3 style={{ color: "#00d4ff", fontWeight: "700", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#ffffffaa", fontSize: "0.9rem", marginBottom: "1rem" }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ color: "#ffffffaa", fontSize: "0.9rem" }}>Available Now</span>
                  <span style={{ color: "#00d4ff", fontWeight: "700" }}>
                    {service.is_free ? "FREE" : `₱${service.price}`}
                  </span>
                </div>
                <Link href="/contact" style={{
                  display: "block",
                  backgroundColor: "#00d4ff",
                  color: "#0a0f1a",
                  textAlign: "center",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}