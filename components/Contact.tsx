"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email service integration here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
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
            Let's{" "}
            <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-second-color max-w-3xl mx-auto">
            I'm always excited to hear about new opportunities, collaborations,
            or just to chat about technology. Let's discuss how we can work
            together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-main-color to-accent-color mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-text-color mb-6">
                Get in <span className="text-main-color">Touch</span>
              </h3>
              <p className="text-lg text-second-color leading-relaxed">
                I'm currently available for full-time opportunities, freelance
                projects, and exciting collaborations. Whether you have a
                project in mind or just want to say hello, I'd love to hear from
                you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-main-color/10 rounded-full flex items-center justify-center group-hover:bg-main-color transition-all duration-300">
                  <i className="bx bx-phone text-xl text-main-color group-hover:text-bg-color transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-sm text-second-color">Phone</p>
                  <a
                    href="tel:+919087189608"
                    className="text-lg font-semibold text-text-color hover:text-main-color transition-colors duration-300"
                  >
                    +91 90871 89608
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-main-color/10 rounded-full flex items-center justify-center group-hover:bg-main-color transition-all duration-300">
                  <i className="bx bx-envelope text-xl text-main-color group-hover:text-bg-color transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-sm text-second-color">Email</p>
                  <a
                    href="mailto:bhuvioffcl07@gmail.com"
                    className="text-lg font-semibold text-text-color hover:text-main-color transition-colors duration-300"
                  >
                    bhuvioffcl07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-main-color/10 rounded-full flex items-center justify-center group-hover:bg-main-color transition-all duration-300">
                  <i className="bx bx-map text-xl text-main-color group-hover:text-bg-color transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-sm text-second-color">Location</p>
                  <p className="text-lg font-semibold text-text-color">
                    No 41 Ramlaxmi Nagar, Hope College, Peelamedu, Coimbatore
                    641004
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-main-color/10 rounded-full flex items-center justify-center group-hover:bg-main-color transition-all duration-300">
                  <i className="bx bx-time text-xl text-main-color group-hover:text-bg-color transition-colors duration-300"></i>
                </div>
                <div>
                  <p className="text-sm text-second-color">Availability</p>
                  <p className="text-lg font-semibold text-text-color">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-color mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300 transform hover:scale-110"
                >
                  <i className="bx bxl-github text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300 transform hover:scale-110"
                >
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300 transform hover:scale-110"
                >
                  <i className="bx bxl-instagram text-xl"></i>
                </a>
                <a
                  href="https://wa.me/919087189608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card-bg border border-card-border rounded-full flex items-center justify-center text-main-color hover:bg-main-color hover:text-bg-color hover:border-main-color transition-all duration-300 transform hover:scale-110"
                >
                  <i className="bx bxl-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-text-color mb-6">
              Send me a <span className="text-main-color">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-color border border-card-border rounded-lg text-text-color placeholder-second-color focus:border-main-color focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-color border border-card-border rounded-lg text-text-color placeholder-second-color focus:border-main-color focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your Phone"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-color border border-card-border rounded-lg text-text-color placeholder-second-color focus:border-main-color focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-color border border-card-border rounded-lg text-text-color placeholder-second-color focus:border-main-color focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-color border border-card-border rounded-lg text-text-color placeholder-second-color focus:border-main-color focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-main-color to-accent-color text-bg-color font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-main-color/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <i className="bx bx-send mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
