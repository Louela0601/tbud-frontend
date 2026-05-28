export default function AboutPage() {
  const values = [
    { icon: "⚡", title: "Innovation", desc: "Pushing boundaries with cutting-edge solutions" },
    { icon: "🛡️", title: "Reliability", desc: "Consistent service you can always count on" },
    { icon: "🤝", title: "Integrity", desc: "Honest, transparent, and ethical in everything" },
    { icon: "👤", title: "Client-First", desc: "Your success is our top priority" },
  ];

  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white" }}>
      <section style={{ padding: "5rem 6rem 3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", textAlign: "center", marginBottom: "3rem" }}>
          Who We Are
        </h1>

        {/* Story */}
        <div style={{
          backgroundColor: "#0d1526",
          border: "1px solid #1a2535",
          borderLeft: "4px solid #00d4ff",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          position: "relative",
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
            Built for a World That Never Stops Changing
          </h2>
          <p style={{ color: "#ffffffaa", lineHeight: 1.8, marginBottom: "1rem" }}>
            At T-Bud, we believe technology should empower everyone, not just the few. Founded in 2026, we set out to break down the barriers that make digital services expensive and inaccessible. With Tio as our guide and mascot, we have created a platform where innovation meets simplicity.
          </p>
          <p style={{ color: "#ffffffaa", lineHeight: 1.8 }}>
            Our story started with a simple question: Why should quality digital services come with a hefty price tag? So we built T-Bud — a place where your ambition is the only requirement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
          {[
            { title: "Our Mission", text: "To democratize digital services by providing free, high-quality IT solutions that empower individuals and businesses to succeed in an ever-evolving digital landscape." },
            { title: "Our Vision", text: "A world where everyone has equal access to the tools they need to build their digital future — where creativity, innovation, and success are no longer limited by budget." },
          ].map((item) => (
            <div key={item.title} style={{
              backgroundColor: "#0d1526",
              border: "1px solid #1a2535",
              borderLeft: "4px solid #00d4ff",
              borderRadius: "16px",
              padding: "1.5rem",
            }}>
              <h3 style={{ fontWeight: "700", marginBottom: "0.75rem" }}>{item.title}</h3>
              <p style={{ color: "#ffffffaa", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <h2 style={{ fontSize: "2rem", fontWeight: "800", textAlign: "center", marginBottom: "2rem" }}>
          Core Values
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginBottom: "4rem",
        }}>
          {values.map((v) => (
            <div key={v.title} style={{
              backgroundColor: "#0d1526",
              border: "1px solid #1a2535",
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{v.icon}</div>
              <h3 style={{ fontWeight: "700", marginBottom: "0.5rem" }}>{v.title}</h3>
              <p style={{ color: "#ffffffaa", fontSize: "0.85rem" }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 style={{ fontSize: "2rem", fontWeight: "800", textAlign: "center", marginBottom: "2rem" }}>
          Why T-Bud? The Evolution
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { stage: "Idea", date: "January 18, 2026", desc: "The vision begins" },
            { stage: "Build", date: "February 28, 2026", desc: "Foundations laid" },
            { stage: "Launched", date: "April 6, 2026", desc: "Taking flight" },
            { stage: "Growing", date: "June 5, 2026", desc: "Soaring high" },
          ].map((item, i) => (
            <div key={item.stage} style={{ textAlign: "center", width: "160px" }}>
              <div style={{
                width: "80px",
                height: "80px",
                border: `2px solid ${i >= 1 ? "#00d4ff" : "#1a2535"}`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                margin: "0 auto 0.75rem",
                backgroundColor: "#0d1526",
              }}>🦜</div>
              <div style={{ fontWeight: "700", color: i >= 1 ? "#00d4ff" : "white" }}>{item.stage}</div>
              <div style={{ fontSize: "0.8rem", color: "#ffffffaa", marginTop: "0.25rem" }}>{item.desc}</div>
              <div style={{ fontSize: "0.75rem", color: "#00d4ff", marginTop: "0.25rem" }}>{item.date}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}