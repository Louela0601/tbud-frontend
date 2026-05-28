"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      backgroundColor: "#0a0f1a",
      borderBottom: "1px solid #1a2535",
      padding: "0 2rem",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00d4ff" }}>
          T—Bud
        </span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} style={{
            textDecoration: "none",
            color: pathname === link.href ? "#00d4ff" : "#ffffff",
            fontSize: "0.95rem",
            fontWeight: pathname === link.href ? "600" : "400",
          }}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Buttons */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/signin" style={{ color: "white", textDecoration: "none", fontSize: "0.95rem" }}>
          Sign In
        </Link>
        <Link href="/contact" style={{
          backgroundColor: "#00d4ff",
          color: "#0a0f1a",
          padding: "0.5rem 1.25rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.95rem",
        }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}