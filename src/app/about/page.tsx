export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white", padding: "5rem 6rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "800", textAlign: "center", marginBottom: "2rem" }}>
        Who We Are
      </h1>
      <div style={{
        backgroundColor: "#0d1526",
        border: "1px solid #1a2535",
        borderRadius: "16px",
        padding: "2rem",
        marginBottom: "2rem",
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
          Built for a World That Never Stops Changing
        </h2>
        <p style={{ color: "#ffffffaa", lineHeight: 1.8 }}>
          At T-Bud, we believe technology should empower everyone, not just the few. Founded in 2026, we set out to break down the barriers that make digital services expensive and inaccessible. With Tio as our guide and mascot, we have created a platform where innovation meets simplicity.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div style={{ backgroundColor: "#0d1526", border: "1px solid #1a2535", borderRadius: "16px", padding: "2rem" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Mission</h3>
          <p style={{ color: "#ffffffaa", lineHeight: 1.8 }}>To democratize digital services by providing free, high-quality IT solutions that empower individuals and businesses to succeed.</p>
        </div>
        <div style={{ backgroundColor: "#0d1526", border: "1px solid #1a2535", borderRadius: "16px", padding: "2rem" }}>
          <h3 style={{ fontWeight: "700", marginBottom: "1rem" }}>Our Vision</h3>
          <p style={{ color: "#ffffffaa", lineHeight: 1.8 }}>A world where everyone has equal access to the tools they need to build their digital future.</p>
        </div>
      </div>
    </main>
  );
}