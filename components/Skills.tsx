import React from "react";

interface Skill {
  icon: string;
  title: string;
  description: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  {
    icon: "bx bxl-html5",
    title: "HTML",
    description: "Semantic, accessible markup.",
    level: 95,
    category: "Frontend",
  },
  {
    icon: "bx bxl-css3",
    title: "CSS",
    description: "Responsive layouts, Flexbox, Grid, animations.",
    level: 90,
    category: "Frontend",
  },
  {
    icon: "bx bxl-javascript",
    title: "JavaScript",
    description: "ES6+, async/await, modular patterns.",
    level: 85,
    category: "Frontend",
  },
  {
    icon: "bx bxl-react",
    title: "React.js",
    description: "Hooks, context, reusable components.",
    level: 90,
    category: "Frontend",
  },
  {
    icon: "bx bxl-react",
    title: "Next.js",
    description: "App Router, SSR/SSG, API routes.",
    level: 85,
    category: "Frontend",
  },
  {
    icon: "bx bxl-angular",
    title: "Angular.js",
    description: "Dashboards, components, services.",
    level: 75,
    category: "Frontend",
  },
  {
    icon: "bx bxl-typescript",
    title: "TypeScript",
    description: "Type-safe React/Node apps.",
    level: 80,
    category: "Programming",
  },
  {
    icon: "bx bxl-nodejs",
    title: "Node.js",
    description: "API integration, tooling.",
    level: 75,
    category: "Backend",
  },
  {
    icon: "bx bx-data",
    title: "MySQL",
    description: "Schema design, queries.",
    level: 70,
    category: "Database",
  },
  {
    icon: "bx bxl-tailwind-css",
    title: "Tailwind CSS",
    description: "Utility-first, responsive UI.",
    level: 90,
    category: "Frontend",
  },
  {
    icon: "bx bxl-bootstrap",
    title: "Bootstrap",
    description: "Components, grid, utilities.",
    level: 80,
    category: "Frontend",
  },
  {
    icon: "bx bx-test-tube",
    title: "TestCafe",
    description: "E2E automation and CI.",
    level: 70,
    category: "Tools",
  },
  {
    icon: "bx bx-cube",
    title: "Strapi CMS",
    description: "Headless CMS integration.",
    level: 70,
    category: "Tools",
  },
  {
    icon: "bx bxl-git",
    title: "Git",
    description: "Branching, reviews, CI.",
    level: 85,
    category: "Tools",
  },
];

export default function Skills() {
  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <section
      id="skills"
      className="section-padding bg-bg-color relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-64 h-64 bg-main-color rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-accent-color rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black leading-none mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-second-color max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels across various technologies and domains.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-main-color to-accent-color mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-3xl font-bold text-text-color text-center">
                <span className="text-main-color">{category}</span> Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-card-bg border border-card-border rounded-2xl p-8 backdrop-blur-sm hover:border-main-color/50 hover:shadow-2xl hover:shadow-main-color/10 transform hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Skill Icon */}
                    <div className="text-6xl text-main-color mb-6 group-hover:scale-110 transition-transform duration-300">
                      <i className={skill.icon}></i>
                    </div>

                    {/* Skill Title */}
                    <h4 className="text-2xl font-bold text-text-color mb-4 group-hover:text-main-color transition-colors duration-300">
                      {skill.title}
                    </h4>

                    {/* Skill Description */}
                    <p className="text-second-color leading-relaxed mb-6">
                      {skill.description}
                    </p>

                    {/* Skill Level Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-main-color font-medium">
                          Proficiency
                        </span>
                        <span className="text-sm text-second-color">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-card-border rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-main-color to-accent-color h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mt-6">
                      <span className="inline-block px-3 py-1 bg-main-color/10 text-main-color text-xs font-semibold rounded-full border border-main-color/20">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-card-bg to-card-bg/50 border border-card-border rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-text-color mb-4">
              <i className="bx bx-bulb text-main-color mr-2"></i>
              Always Learning
            </h3>
            <p className="text-second-color text-lg max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying updated with the
              latest technologies. Currently exploring advanced React patterns,
              TypeScript, and cloud technologies.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="inline-flex items-center px-4 py-2 bg-main-color/10 text-main-color text-sm font-medium rounded-full">
                <i className="bx bx-time mr-2"></i>
                Continuous Learning
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-accent-color/10 text-accent-color text-sm font-medium rounded-full">
                <i className="bx bx-trending-up mr-2"></i>
                Skill Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
