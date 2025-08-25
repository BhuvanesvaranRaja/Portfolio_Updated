"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full flex justify-between items-center top-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-[10%] py-4 sm:py-5 ${
        isSticky
          ? "bg-bg-color/95 backdrop-blur-md border-b border-card-border shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-2 text-2xl lg:text-3xl font-extrabold tracking-wide"
        aria-label="Bhuvanesvaran Dev Home"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-main-color to-accent-color text-bg-color">
          B
        </span>
        <span className="text-text-color">.DEV</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-8">
          {[
            { href: "#", label: "Home" },
            { href: "#", label: "About" },
            { href: "#", label: "Skills" },
            { href: "#", label: "Portfolio" },
            { href: "#", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-text-color text-lg font-medium transition-all duration-300 ease-in-out hover:text-main-color"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden relative z-50 p-2 rounded-md bg-card-bg border border-card-border text-text-color hover:text-main-color transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-bg-color/90 backdrop-blur-sm z-40 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex items-center justify-center h-full px-6">
          <ul className="text-center space-y-6 w-full max-w-sm p-6 rounded-xl bg-card-bg border border-card-border">
            {[
              { href: "#", label: "Home", icon: "bx-home" },
              { href: "#", label: "About", icon: "bx-user" },
              { href: "#", label: "Skills", icon: "bx-code-alt" },
              { href: "#", label: "Portfolio", icon: "bx-briefcase" },
              { href: "#", label: "Contact", icon: "bx-envelope" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center justify-center space-x-3 text-text-color text-2xl font-medium transition-all duration-300 ease-in-out hover:text-main-color hover:scale-110"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i
                    className={`${item.icon} text-main-color group-hover:scale-125 transition-transform duration-300`}
                  ></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
