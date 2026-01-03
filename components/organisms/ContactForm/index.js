"use client";

import { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Contact Info Data
const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "hoanghuycls@gmail.com",
    href: "mailto:hoanghuycls@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: null,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+84 123 456 789",
    href: "tel:+84123456789",
  },
];

// Social Links Data
const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/huycls",
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
];

// Input Field Component
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-[#b8d4c8] text-sm font-medium">
      {label}
      {required && <span className="text-[#4ade80] ml-1">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-xl bg-[#1a2a25] border border-[#2a3a35] text-white placeholder-[#6b7280] focus:outline-none focus:border-[#4ade80]/50 focus:ring-1 focus:ring-[#4ade80]/20 transition-all duration-300"
    />
  </div>
);

// Textarea Field Component
const TextareaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 5,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-[#b8d4c8] text-sm font-medium">
      {label}
      {required && <span className="text-[#4ade80] ml-1">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="w-full px-4 py-3 rounded-xl bg-[#1a2a25] border border-[#2a3a35] text-white placeholder-[#6b7280] focus:outline-none focus:border-[#4ade80]/50 focus:ring-1 focus:ring-[#4ade80]/20 transition-all duration-300 resize-none"
    />
  </div>
);

// Contact Info Card Component
const ContactInfoCard = ({ item }) => {
  const Icon = item.icon;
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1a2a25]/50 border border-[#2a3a35] transition-all duration-300 hover:border-[#3a5a4a] hover:bg-[#1a2a25]">
      <div className="w-10 h-10 rounded-lg bg-[#2a4a40] flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#4ade80]" />
      </div>
      <div>
        <p className="text-[#7a9a8a] text-xs font-medium uppercase tracking-wider">
          {item.label}
        </p>
        <p className="text-[#e8f4ec] text-sm">{item.value}</p>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

// Social Link Button Component
const SocialButton = ({ item }) => {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="w-12 h-12 rounded-xl bg-[#1a2a25] border border-[#2a3a35] flex items-center justify-center text-[#8aaa9a] transition-all duration-300 hover:border-[#4ade80]/50 hover:text-[#4ade80] hover:bg-[#1a2a25]">
      <Icon className="w-5 h-5" />
    </a>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and show success
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section
      id="contact-form"
      className="relative py-20 md:py-32"
      style={{ backgroundColor: "#0e1921" }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#7a9a8a] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#6b7280] max-w-md mx-auto">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Info Side */}
          <div className="lg:w-2/5 space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <ContactInfoCard key={index} item={item} />
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-[#b8d4c8] text-sm font-medium">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <SocialButton key={index} item={item} />
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2a25] border border-[#2a3a35]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[#9ca3af] text-sm">
                Currently available for freelance
              </span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5">
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#1a3a35] to-[#0d1f1c] p-8 md:p-10">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Your Name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Your Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}
                <InputField
                  label="Subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {/* Message */}
                <TextareaField
                  label="Your Message"
                  name="message"
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4ade80] text-[#0e1921] font-medium transition-all duration-300 hover:bg-[#5aee90] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="text-center p-4 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/30">
                    <p className="text-[#4ade80] text-sm">
                      ✨ Message sent successfully! I&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}
              </form>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-[#2a4a40]/50 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-[#6b7280] text-sm">
            Prefer email?{" "}
            <a
              href="mailto:hello@hoanghuy.dev"
              className="text-[#4ade80] hover:underline">
              hello@hoanghuy.dev
            </a>
          </p>
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

export default ContactForm;
