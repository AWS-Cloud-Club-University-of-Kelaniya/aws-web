"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUserLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setUserLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/"; // Full refresh to homepage
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/aws_logo.png"
              alt="AWS Cloud Club Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-[#232F3E] hidden md:inline-block">
              AWS Cloud Club UOK
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/events", label: "Events" },
              { href: "/resources", label: "Resources" },
              { href: "/newsletter", label: "Newsletters" },
              { href: "/contact-us", label: "Contact" },
            ].map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            {userLoggedIn && <NavLink href="/dashboard">Dashboard</NavLink>}

            {userLoggedIn ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity"
                >
                  <Link href="/join-us">Join Us</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity"
                >
                  <Link href="/login">Login</Link>
                </Button>
              </>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#232F3E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 nav-blur"
          >
            <nav className="flex flex-col items-center py-6 space-y-4">
              {userLoggedIn && (
                <NavLink
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              )}
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/resources", label: "Resources" },
                { href: "/newsletter", label: "Newsletters" },
                { href: "/contact-us", label: "Contact" },
              ].map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              {userLoggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity w-32"
                  >
                    <Link
                      href="/join-us"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Join Us
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] hover:opacity-90 transition-opacity w-32"
                  >
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </Button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className="relative text-[#232F3E] hover:text-[#FF9900] transition-colors duration-200 group py-2"
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </span>
    </Link>
  );
}
