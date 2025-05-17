"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import css from "styled-jsx/css"
const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontWeight: pathname === link.href ? "bold" : "normal",
              color: pathname === link.href ? "blue" : "black",
              marginRight: "1rem",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  )
}