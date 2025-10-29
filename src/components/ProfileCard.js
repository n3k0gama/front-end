import React from "react";
import profile from "../assets/images/profile.jpg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import gradientDecor from "../assets/images/div.png";

export default function ProfileCard() {
  return (
    <section className="hero-bg pt-28 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* LEFT — TEXT */}
          <div className="md:pr-8 text-center md:text-left">
            <p className="text-sm text-textGray mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-textDark font-poppins leading-tight">
              Creative Designer &{" "}
              <span className="block md:inline">Frontend Developer</span>
            </h1>
            <p className="mt-4 text-textGray max-w-xl mx-auto md:mx-0">
              Passionate in creating beautiful and functional digital experiences.
              I build modern web apps with attention to detail and delightful UI using React & Tailwind.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                className="btn-gradient inline-flex items-center gap-3 text-white px-4 py-2 rounded-lg shadow"
                href="#portfolio"
              >
                See My Work
              </a>
              <a
                className="border border-primary text-primary px-4 py-2 rounded-lg font-medium"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex justify-center md:justify-start items-center gap-4">
              <a href="#" aria-label="linkedin">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="github">
                <img src={github} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="instagram">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative">
              
              {/* Decorative gradient image */}
              <img
                src={gradientDecor}
                alt="decorative gradient"
                className="
                  absolute
                  -top-4 -left-4
                  w-40 h-40
                  sm:-top-6 sm:-left-6 sm:w-48 sm:h-48
                  md:-top-8 md:-left-8 md:w-56 md:h-56
                  lg:-top-10 lg:-left-10 lg:w-64 lg:h-64
                  opacity-90
                  z-0
                  transition-all duration-300
                "
              />

              {/* Profile image */}
              <div className="
                relative z-10 rounded-full bg-white shadow-soft
                flex items-center justify-center
                w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64
                transition-all duration-300
              ">
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-full object-cover w-[90%] h-[90%]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
