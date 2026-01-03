"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

// Mock project data
const projectsData = [
  {
    id: 1,
    company: "AIRBNB",
    year: "2023",
    title: "Curating AR experiences while travelling",
    metrics: [
      "Onboarding increased to 12%.",
      "New users signups increased by 32%.",
      "Engagement increased by 20%.",
    ],
    image: "/projects/airbnb-mockup.png",
    link: "/case-study/airbnb",
    gradient: "from-[#1a3a35] to-[#0d1f1c]",
  },
  {
    id: 2,
    company: "SHOPIFY",
    year: "2023",
    title: "Building profitable dropshipping dashboard",
    description:
      "Aims to show you how you can start your own profitable business in just a few weeks, how company increased their MRR by 25%.",
    image: "/projects/shopify-mockup.png",
    link: "/case-study/shopify",
    gradient: "from-[#1a3530] to-[#0d1f1a]",
  },
  {
    id: 3,
    company: "DELOITTE",
    year: "2023",
    title: "Terrific: An app that helps you find a home tutor",
    description:
      "Terrific Tutors is a mobile app which will help people (students/parents) to find a home tutor.",
    image: "/projects/deloitte-mockup.png",
    link: "/case-study/deloitte",
    gradient: "from-[#1a3a35] to-[#0d1f1c]",
  },
  {
    id: 4,
    company: "HEADOUT",
    year: "2023",
    title: "Enhancing the payment flow of Headout",
    description:
      "Redesigning the checkout experience to improve conversion rates and user satisfaction.",
    image: "/projects/headout-mockup.png",
    link: "/case-study/headout",
    gradient: "from-[#1a3530] to-[#0d1f1a]",
  },
];

// Check Icon Component
const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#2a4a40] flex items-center justify-center shrink-0">
    <FiCheck className="w-3 h-3 text-[#b8d4c8]" />
  </div>
);

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br ${project.gradient} p-8 md:p-10 transition-all duration-500 ease-out`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Subtle glow effect on hover */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-[#4ade80]/5 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          {/* Company Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[#b8d4c8] text-xs font-semibold tracking-wider uppercase">
              {project.company}
            </span>
            <span className="text-[#4a6a5a] text-xs">•</span>
            <span className="text-[#7a9a8a] text-xs font-medium">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif text-[#e8f4ec] leading-tight">
            {project.title}
          </h3>

          {/* Metrics or Description */}
          {project.metrics ? (
            <ul className="space-y-3">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#8aaa9a] text-sm">{metric}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#8aaa9a] text-sm leading-relaxed max-w-md">
              {project.description}
            </p>
          )}

          {/* CTA Button */}
          <button
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3a5a4a] text-[#e8f4ec] text-sm font-medium transition-all duration-300 hover:bg-[#2a4a3a] hover:border-[#4a6a5a] cursor-pointer"
            onClick={() => (window.location.href = project.link)}>
            <span>View Case Study</span>
            <FiArrowUpRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full lg:w-auto">
          <div
            className={`relative transition-transform duration-500 ease-out ${
              isHovered ? "scale-[1.02]" : "scale-100"
            }`}>
            {/* Placeholder for project image/mockup */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-[#2a4a40] to-[#1a3a30] border border-[#3a5a4a]/30">
              {/* Device Frame Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-xl bg-linear-to-br from-[#1a2a25] to-[#0d1a15] shadow-2xl overflow-hidden">
                  {/* Mock App UI */}
                  <div className="w-full h-8 bg-[#2a3a35] flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="w-3/4 h-4 bg-[#3a4a45] rounded" />
                    <div className="w-1/2 h-4 bg-[#3a4a45] rounded" />
                    <div className="w-full h-24 bg-[#3a4a45]/50 rounded-lg mt-4" />
                    <div className="flex gap-2 mt-4">
                      <div className="w-20 h-8 bg-[#4ade80]/20 rounded-full" />
                      <div className="w-20 h-8 bg-[#3a4a45] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#4ade80]/10 rounded-full blur-3xl" />
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#4ade80]/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Border glow effect */}
      <div
        className={`absolute inset-0 rounded-3xl border transition-all duration-500 ${
          isHovered ? "border-[#4ade80]/20" : "border-[#2a4a40]/50"
        } pointer-events-none`}
      />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#0e1921" }}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a1510]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#7a9a8a] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            CURATED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-[#6b7280] max-w-md mx-auto">
            Compilation of case studies that evoke my sense of pride
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#3d4f5f] text-white text-sm font-medium transition-all duration-300 hover:bg-[#1a2a35] hover:border-[#4d5f6f] cursor-pointer">
            <span>View All Projects</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0e1921, transparent)",
        }}
      />
    </section>
  );
};

export default ProjectsSection;
