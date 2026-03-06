"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/docs", label: "Docs" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-thin text-white hover:opacity-80 transition-opacity glow-text tracking-widest">
              LuminOS
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/roadmap"
                className="px-4 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition-colors"
              >
                Coming Soon
              </Link>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 cursor-pointer hover:opacity-70 transition-opacity md:hidden"
            >
              <div className="w-6 h-0.5 bg-white rounded"></div>
              <div className="w-6 h-0.5 bg-white rounded"></div>
              <div className="w-6 h-0.5 bg-white rounded"></div>
            </button>
          </div>

          {/* Sidebar Menu */}
          {menuOpen && (
            <div className="fixed inset-0 z-40">
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-black/50"
                onClick={() => setMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <div className="absolute right-0 top-0 h-full w-64 bg-black/95 border-l border-white/10 shadow-lg animate-slide-left p-6 pt-20 flex flex-col gap-6">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16 page-shell page-fade">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 glass-effect py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2026 LuminOS. Building the future of Linux.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
