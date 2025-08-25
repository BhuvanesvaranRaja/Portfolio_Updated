"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-second-bg-color border-t border-card-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-main-color rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-color rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black tracking-wider mb-2">
                  <span className="text-text-color">B.</span>
                  <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">
                    DEV
                  </span>
                </h3>
                <p className="text-second-color max-w-md">
                  Software Engineer focused on building scalable, accessible,
                  and performant web apps with React, Next.js, Angular, and
                  Node.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300"
                >
                  <i className="bx bxl-github text-lg"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300"
                >
                  <i className="bx bxl-linkedin text-lg"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300"
                >
                  <i className="bx bxl-instagram text-lg"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-color mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-second-color hover:text-main-color transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-second-color hover:text-main-color transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-second-color hover:text-main-color transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-second-color hover:text-main-color transition-colors duration-300"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-second-color hover:text-main-color transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-text-color mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="bx bx-envelope text-main-color"></i>
                  <span className="text-second-color">
                    Bhuvioffcl07@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="bx bx-phone text-main-color"></i>
                  <span className="text-second-color">+91 90871 89608</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="bx bx-map text-main-color"></i>
                  <span className="text-second-color">Coimbatore, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-card-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-second-color text-sm">
                  © 2025{" "}
                  <span className="text-main-color font-semibold">
                    Bhuvanesvaran R
                  </span>
                  . All Rights Reserved.
                </p>
                <p className="text-xs text-second-color mt-1">
                  Built with ❤️ using Next.js & Tailwind CSS
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-xs text-second-color">
                  Available for opportunities
                </span>
                <div className="w-2 h-2 bg-main-color rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute bottom-6 right-6">
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 bg-gradient-to-r from-main-color to-accent-color text-bg-color rounded-full shadow-lg hover:shadow-xl hover:shadow-main-color/25 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <i className="bx bx-up-arrow-alt text-xl group-hover:-translate-y-1 transition-transform duration-300"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
