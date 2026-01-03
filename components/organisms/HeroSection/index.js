"use client";

import { useEffect, useState } from "react";
import GalaxyBackground from "@/components/molecules/GalaxyBackground";
import LightRays from "@/components/molecules/LightRay";
import { FaReact, FaGithub, FaDocker, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import LogoLoop from "@/components/molecules/LogoLoop";
import TextType from "@/components/atoms/TextType";
import PillNav from "@/components/molecules/PillNav";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/hoanghuy",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/hoanghuy",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/hoanghuy",
    label: "X (Twitter)",
  },
  {
    icon: HiOutlineMail,
    href: "mailto:hoanghuy@email.com",
    label: "Email",
  },
];

const techLogos = [
  {
    node: <FaReact className="text-white" />,
    title: "React",
    alt: "React",
  },
  {
    node: <FaGithub className="text-white" />,
    title: "GitHub",
    alt: "GitHub",
  },
  {
    node: <FaDocker className="text-white" />,
    title: "Docker",
    alt: "Docker",
  },
  {
    node: <RiNextjsLine className="text-white" />,
    title: "Next.js",
    alt: "Next.js",
  },
  {
    node: <TbBrandReactNative className="text-white" />,
    title: "React Native",
    alt: "React Native",
  },
  {
    node: <SiExpress className="text-white" />,
    title: "Express",
    alt: "Express",
  },
  {
    node: <TbSql className="text-white" />,
    title: "SQL",
    alt: "SQL",
  },
];

// Sparkle Star Component
const SparkleIcon = ({ className = "", size = 24, color = "#4ade80" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
      fill={color}
    />
  </svg>
);

// Floating Star Component with Animation
const FloatingStar = ({ style, size = 24, delay = 0, color = "#4ade80" }) => (
  <div
    className="absolute animate-pulse"
    style={{
      ...style,
      animationDelay: `${delay}s`,
      animationDuration: "3s",
    }}>
    <SparkleIcon size={size} color={color} />
  </div>
);

// Mini Dot Component
const MiniDot = ({ style, color = "#4ade80" }) => (
  <div
    className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
    style={{
      ...style,
      backgroundColor: color,
      animationDuration: "2s",
    }}
  />
);

// Cross Star Component (smaller decorative element)
const CrossStar = ({ style, size = 8, color = "#6b7280" }) => (
  <div className="absolute" style={style}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0V8M0 4H8" stroke={color} strokeWidth="1" />
    </svg>
  </div>
);

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Company logos data
  const companies = [
    { name: "Disney", logo: "Disney" },
    { name: "Airbnb", logo: "airbnb" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "Duolingo", logo: "duolingo" },
    { name: "Netflix", logo: "NETFLIX" },
    { name: "Disney2", logo: "Disney" },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0e1921" }}>
      <div className="absolute z-0 top-0 left-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-10 mt-16">
        {/* <nav className="fixed top-0 left-0 right-0 z-10 flex justify-center pt-6">
          <div
            className="flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            {["Home", "Works", "About", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: "#9ca3af" }}>
                {item}
              </a>
            ))}
          </div>
        </nav> */}

        <div className="relative mb-4">
          <div
            className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#1a2a35" }}>
            <div className="relative w-16 h-16">
              <div
                className="w-full h-full rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#2a3a45" }}>
                👨‍💻
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "#1a2a35" }}>
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#4ade80" }}
          />
          <span className="text-sm" style={{ color: "#9ca3af" }}>
            Available for opportunities
          </span>
        </div>

        <h1
          className="text-5xl md:text-6xl font-serif text-center mb-6 leading-tight"
          style={{ color: "#ffffff" }}>
          Welcome to
          <br />
          <span className="italic">
            <TextType
              text={["my portfolio", "my digital humble abode"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>
        </h1>

        <p
          className="text-center max-w-md mb-10 leading-relaxed"
          style={{ color: "#6b7280" }}>
          I&apos;m an website developer.
          <br />
          My interest lies in website development, and user experience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full border transition-all hover:bg-opacity-10 hover:bg-white hover:text-[#333333] cursor-pointer"
            style={{ borderColor: "#3d4f5f" }}>
            <span className="rotate-135">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
            <span>Download CV</span>
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#1a2a35", color: "#ffffff" }}
            onClick={() => {
              window.location.href = "#contact-form";
            }}>
            <span>Contact Me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative max-w-5xl overflow-hidden mx-auto z-10 mt-24 pb-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-4 opacity-50">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={36}
            gap={30}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0e1921, transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
