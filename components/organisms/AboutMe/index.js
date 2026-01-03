"use client";

import { useState } from "react";
import { FiArrowRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "Are you available to hire full time?",
    answer:
      "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. Simply want to get get in touch? Happy to connect on socials.",
  },
  {
    id: 2,
    question: "How do your quote pricing works and when can we get on call?",
    answer:
      "My pricing is project-based and depends on the scope, complexity, and timeline. I typically start with a discovery call to understand your needs, then provide a detailed proposal. For calls, I'm available during business hours and can accommodate different time zones.",
  },
  {
    id: 3,
    question: "Can you facelift my design?",
    answer:
      "Absolutely! I love taking existing designs and giving them a fresh, modern look. Whether it's a complete redesign or subtle improvements to enhance user experience, I can help transform your current design into something more engaging and effective.",
  },
];

// FAQ Item Component
const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#3a5a4a] bg-[#1a2a25]"
          : "border-[#2a3a35] bg-[#0d1a15]/50"
      }`}>
      <button
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        onClick={onToggle}>
        <span
          className={`text-sm font-medium pr-4 ${
            isOpen ? "text-[#e8f4ec]" : "text-[#b8d4c8]"
          }`}>
          {item.question}
        </span>
        <span className="shrink-0">
          {isOpen ? (
            <FiChevronUp className="w-5 h-5 text-[#7a9a8a]" />
          ) : (
            <FiChevronDown className="w-5 h-5 text-[#7a9a8a]" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-5 pb-5">
          <p className="text-[#8aaa9a] text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="about-me"
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#0e1921" }}>
      {/* About Me Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 mb-24 md:mb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Content Side */}
          <div className="flex-1 space-y-6">
            {/* Label */}
            <span className="inline-block text-[#7a9a8a] text-xs font-semibold tracking-[0.2em] uppercase">
              ABOUT ME
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Know who am I
            </h2>

            {/* Subtitle */}
            <p className="text-[#b8d4c8] text-lg">My journey in few words</p>

            {/* Description */}
            <p className="text-[#8aaa9a] leading-relaxed max-w-xl">
              I&apos;ve designed multiple web & mobile experiences for
              multi-cross-platform devices from TV to Ipads, etc. I&apos;ve
              worked with small agencies and also with medium-sized companies. I
              previously worked with one of India&apos;s largest Ed-Tech
              startups, Toppr which later got acquired by Byjus. Currently
              I&apos;m designing aesthetic and functional solutions for
              smallcase within the invest team, to enhance financial
              accessibility and understanding for Indian users.
            </p>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a2a35] text-white text-sm font-medium transition-all duration-300 hover:bg-[#2a3a45] cursor-pointer">
              <span>Know more</span>
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image Side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border frame */}
              <div className="absolute -inset-3 border-2 border-[#3a5a4a]/30 rounded-2xl" />

              {/* Main image container */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden bg-linear-to-br from-[#2a4a40] to-[#1a3a30]">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-linear-to-br from-[#3a5a4a] to-[#2a4a3a] flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>

                {/* Name tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#1a2a25]/90 backdrop-blur-sm rounded-lg border border-[#3a5a4a]/50">
                  <span className="text-white text-sm font-medium">
                    Hoang Huy
                  </span>
                </div>

                {/* Decorative cursor */}
                <div className="absolute bottom-16 right-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white">
                    <path
                      d="M5 3L19 12L12 14L9 21L5 3Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#4ade80]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[#7a9a8a] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            SOME DOUBTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6b7280]">Your answers await right here</p>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Card */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#1a3a35] to-[#0d1f1c] p-8 h-full">
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-serif text-[#e8f4ec] mb-6 leading-tight">
                  Have any more questions or want to start collaborating?
                </h3>

                {/* Image placeholder */}
                <div className="flex-1 relative rounded-2xl overflow-hidden bg-linear-to-br from-[#2a4a40] to-[#1a3a30] mb-6 min-h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[#1a2a25] flex items-center justify-center">
                      <span className="text-5xl">💬</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0e1921] text-sm font-medium transition-all duration-300 hover:bg-[#e8f4ec] cursor-pointer">
                  <HiSparkles className="w-4 h-4" />
                  <span>Let&apos;s talk</span>
                </button>

                {/* Response time note */}
                <p className="text-center text-[#6b7280] text-xs mt-4">
                  *Response time is typically around 12 hours
                </p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#2a4a40]/50 pointer-events-none" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex-1 space-y-4">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openFAQ === item.id}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutMe;
