"use client";
import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  full_name: string;
  role: string;
  bio: string;
  profile_image: string;
  skills: string[];
  stat_design: number;
  stat_tech: number;
  stat_strategy: number;
  portfolio_url: string;
}

export default function PortfolioPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`)
      .then((res) => res.json())
      .then((data: TeamMember[]) => {
        setTeam(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={{ backgroundColor: "#0a0f1a", minHeight: "100vh", color: "white" }}>
      <section style={{ textAlign: "center", padding: "5rem 6rem 3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
          Meet the Team
        </h1>
        <p style={{ color: "#ffffffaa", fontSize: "1.1rem" }}>
          The humans behind Tio
        </p>
      </section>

      <section style={{ padding: "2rem 4rem 6rem" }}>
        {loading ? (
          <p style={{ textAlign: "center", color: "#ffffffaa" }}>Loading team...</p>
        ) : team.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ffffffaa" }}>No team members found.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}>
            {team.map((member) => (
              <div key={member.id} style={{
                backgroundColor: "#0d1526",
                border: "1px solid #1a2535",
                borderRadius: "16px",
                overflow: "hidden",
              }}>
                {/* Card Header */}
                <div style={{
                  background: "linear-gradient(135deg, #0066cc, #00d4ff)",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{ fontWeight: "700", fontSize: "1rem" }}>{member.full_name}</span>
                  <span style={{
                    backgroundColor: "#ffffff20",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                  }}>{member.role}</span>
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.5rem" }}>
                  {/* Profile Image */}
                  <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "12px",
                    backgroundColor: "#1a2535",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    overflow: "hidden",
                  }}>
                    {member.profile_image ? (
                      <img src={member.profile_image} alt={member.full_name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : "👤"}
                  </div>

                  {/* Role Badge */}
                  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <span style={{
                      backgroundColor: "#00d4ff20",
                      color: "#00d4ff",
                      padding: "0.25rem 1rem",
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}>{member.role}</span>
                  </div>

                  {/* Bio */}
                  <p style={{ color: "#ffffffaa", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {member.bio}
                  </p>

                  {/* Skills */}
                  {member.skills && member.skills.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                      {member.skills.map((skill) => (
                        <span key={skill} style={{
                          border: "1px solid #1a2535",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "999px",
                          fontSize: "0.75rem",
                          color: "#ffffffaa",
                        }}>{skill}</span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                    {[
                      { label: "Design", value: member.stat_design },
                      { label: "Tech", value: member.stat_tech },
                      { label: "Strategy", value: member.stat_strategy },
                    ].map((stat) => (
                      <div key={stat.label} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "0.75rem", color: "#ffffffaa", marginBottom: "0.25rem" }}>{stat.label}</div>
                        <div style={{ height: "4px", backgroundColor: "#1a2535", borderRadius: "2px" }}>
                          <div style={{ height: "100%", width: `${stat.value}%`, backgroundColor: "#00d4ff", borderRadius: "2px" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}