import React from "react";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  demo: string;
  category: string;
}

const portfolioData: Project[] = [
  {
    image: "/assets/medizura.png",
    title: "Medizura HMS",
    description:
      "Enterprise-grade hospital management system covering patients, billing, appointments, and inventory.",
    technologies: ["React.js", "Node.js", "Express", "MySQL", "Material UI"],
    link: "#",
    demo: "#",
    category: "Product",
  },
  {
    image: "/assets/fotofacet.jpeg",
    title: "FotoFacet",
    description:
      "Photography workflow app for bookings, galleries, and automated communications with face-matching search.",
    technologies: ["Angular.js", "Laravel", "MySQL", "Tailwind CSS"],
    link: "#",
    demo: "#",
    category: "Web App",
  },
  {
    image: "/assets/sumanas.png",
    title: "Company Website Revamp",
    description:
      "SEO-optimized Next.js site integrated with Strapi CMS for editable, server-rendered content.",
    technologies: [
      "Next.js",
      "Strapi.js",
      "JavaScript",
      "GSAP",
      "Tailwind CSS",
      "REST API",
    ],
    link: "#",
    demo: "#",
    category: "Web Development",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-second-bg-color relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-40 w-64 h-64 bg-main-color rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-accent-color rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black leading-none mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-second-color max-w-3xl mx-auto">
            A showcase of my recent projects, demonstrating my skills in web
            development, problem-solving, and creating user-centered digital
            experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-main-color to-accent-color mx-auto rounded-full mt-6"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="group bg-card-bg border border-card-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-main-color/50 hover:shadow-2xl hover:shadow-main-color/10 transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-color/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-main-color/90 text-bg-color text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-color mb-3 group-hover:text-main-color transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-second-color text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block px-2 py-1 bg-main-color/10 text-main-color text-xs font-medium rounded-md border border-main-color/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-main-color to-accent-color text-bg-color text-sm font-semibold py-2 px-4 rounded-lg text-center hover:shadow-lg hover:shadow-main-color/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="bx bx-play-circle mr-2"></i>
                    Live Demo
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-main-color text-main-color text-sm font-semibold py-2 px-4 rounded-lg text-center hover:bg-main-color hover:text-bg-color transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="bx bxl-github mr-2"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-card-bg to-card-bg/50 border border-card-border rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-text-color mb-4">
              <i className="bx bx-briefcase text-main-color mr-2"></i>
              Have a Project in Mind?
            </h3>
            <p className="text-second-color text-lg max-w-2xl mx-auto mb-6">
              I'm always excited to work on new projects and collaborate with
              creative teams. Let's discuss how we can bring your ideas to life!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-main-color to-accent-color text-bg-color font-semibold rounded-full hover:shadow-lg hover:shadow-main-color/25 transform hover:scale-105 transition-all duration-300"
            >
              <i className="bx bx-envelope mr-2"></i>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
