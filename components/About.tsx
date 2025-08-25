import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-second-bg-color relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-main-color rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-color rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black leading-none mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-main-color to-accent-color mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/aboout.JPG"
                alt="Bhuvanesvaran R - Software Engineer"
                className="w-full h-[520px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-6 -right-6 bg-card-bg border border-card-border backdrop-blur-md rounded-xl p-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-main-color rounded-full animate-pulse"></div>
                <span className="text-main-color font-semibold">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-color mb-4">
                Software Engineer{" "}
                <span className="text-main-color">
                  (React, Next.js, Angular.js)
                </span>
              </h3>
              <p className="text-lg text-second-color leading-relaxed">
                I build responsive, accessible, and performant web applications.
                I’ve shipped features across multiple releases, collaborated in
                Agile teams, and improved delivery speed with end-to-end
                automation using TestCafe. Passionate about clean code, reusable
                components, and great user experiences.
              </p>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card-bg border border-card-border rounded-xl p-6 backdrop-blur-sm hover:border-main-color/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="bx bx-graduation text-2xl text-main-color"></i>
                  <h4 className="text-lg font-semibold text-text-color">
                    Education
                  </h4>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-second-color">M.Sc. Computer Science</p>
                    <p className="text-sm text-main-color">
                      Dr.N.G.P Arts and Science College (2021–2023) • GPA 7.2
                    </p>
                  </div>
                  <div>
                    <p className="text-second-color">B.Sc. Computer Science</p>
                    <p className="text-sm text-main-color">
                      Dr.N.G.P Arts and Science College (2018–2021) • GPA 6.2
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg border border-card-border rounded-xl p-6 backdrop-blur-sm hover:border-main-color/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="bx bx-code-alt text-2xl text-main-color"></i>
                  <h4 className="text-lg font-semibold text-text-color">
                    Experience
                  </h4>
                </div>
                <p className="text-second-color">Software Development</p>
                <p className="text-sm text-main-color">
                  2023–2025 • Sumanas Technologies
                </p>
              </div>

              <div className="bg-card-bg border border-card-border rounded-xl p-6 backdrop-blur-sm hover:border-main-color/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="bx bx-map text-2xl text-main-color"></i>
                  <h4 className="text-lg font-semibold text-text-color">
                    Location
                  </h4>
                </div>
                <p className="text-second-color">Coimbatore, India</p>
                <p className="text-sm text-main-color">Open to Remote</p>
              </div>

              <div className="bg-card-bg border border-card-border rounded-xl p-6 backdrop-blur-sm hover:border-main-color/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="bx bx-time text-2xl text-main-color"></i>
                  <h4 className="text-lg font-semibold text-text-color">
                    Status
                  </h4>
                </div>
                <p className="text-second-color">Available</p>
                <p className="text-sm text-main-color">Full-time & Freelance</p>
              </div>
            </div>

            {/* Personal Qualities */}
            <div className="bg-gradient-to-r from-card-bg to-card-bg/50 border border-card-border rounded-xl p-6">
              <h4 className="text-xl font-semibold text-text-color mb-4 flex items-center">
                <i className="bx bx-star text-main-color mr-2"></i>
                What Drives Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <i className="bx bx-check-circle text-main-color"></i>
                  <span className="text-second-color">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bx bx-check-circle text-main-color"></i>
                  <span className="text-second-color">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bx bx-check-circle text-main-color"></i>
                  <span className="text-second-color">User Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="bx bx-check-circle text-main-color"></i>
                  <span className="text-second-color">Continuous Learning</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/assets/Bhuvaneshvaran_Resume.pdf"
                target="_blank"
                className="group px-6 py-3 bg-gradient-to-r from-main-color to-accent-color text-bg-color font-semibold rounded-full hover:shadow-lg hover:shadow-main-color/25 transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <i className="bx bxs-file-pdf mr-2 group-hover:rotate-12 transition-transform duration-300"></i>
                View Full Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border-2 border-main-color text-main-color font-semibold rounded-full hover:bg-main-color hover:text-bg-color transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <i className="bx bxs-chat mr-2"></i>
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
