import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-br from-bg-color via-second-bg-color to-bg-color flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-main-color/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-color/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-start/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-30"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-6 md:mt-8">
        {/* Greeting badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-main-color to-accent-color text-bg-color text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <i className="bx bx-waving-hand mr-2 text-xl"></i>
            Hello World!
          </span>
          <span className="inline-flex items-center px-6 py-3 bg-card-bg border border-card-border text-main-color text-lg font-bold rounded-full backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <i className="bx bx-code-alt mr-2 text-xl"></i>
            I'm a Developer
          </span>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-text-color via-main-color to-accent-color bg-clip-text text-transparent">
            Bhuvanesvaran R
          </span>
        </h1>

        {/* Subtitle with typing effect */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-second-color mb-8 animate-fade-in-up animation-delay-400">
          <span className="text-main-color">Software Engineer</span>
          <span className="text-accent-color animate-pulse">.</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-second-color leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
          Software Engineer with experience building scalable, responsive UIs
          and features across React.js, Next.js, and Angular.js. Comfortable
          collaborating in Agile teams, shipping features, writing automated
          tests with TestCafe, and integrating REST APIs. Strong focus on
          performance, accessibility, and clean, maintainable code.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center items-center gap-6 animate-fade-in-up animation-delay-800">
          <a
            href="/assets/Bhuvaneshvaran_Resume.pdf"
            target="_blank"
            className="group relative px-8 py-3 bg-gradient-to-r from-main-color to-accent-color text-bg-color text-lg font-bold rounded-full shadow-2xl transform hover:scale-110 hover:shadow-main-color/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <i className="bx bxs-download mr-2 text-xl"></i>
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-color to-main-color opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent border-2 border-main-color text-main-color text-lg font-bold rounded-full hover:bg-main-color hover:text-bg-color transform hover:scale-110 transition-all duration-300 flex items-center"
          >
            <i className="bx bxs-rocket mr-2 text-xl group-hover:rotate-12 transition-transform duration-300"></i>
            Let's Work Together
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-main-color rounded-full flex justify-center">
            <div className="w-1 h-3 bg-main-color rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
