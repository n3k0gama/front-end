import React from "react";
import profile from "../assets/images/profile.jpg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";

export default function ProfileCard(){
  return (
    <section className="hero-bg pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* left - text */}
          <div className="md:pr-8">
            <p className="text-sm text-textGray mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-textDark font-poppins leading-tight">
              Creative Designer & <span className="block md:inline">Frontend Developer</span>
            </h1>
            <p className="mt-4 text-textGray max-w-xl">
              Passionate in creating beautiful and functional digital experiences. I build modern web apps
              with attention to detail and delightful UI using React & Tailwind.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a className="btn-gradient inline-flex items-center gap-3 text-white px-4 py-2 rounded-lg shadow" href="#portfolio">See My Work</a>
              <a className="border border-primary text-primary px-4 py-2 rounded-lg font-medium" href="#contact">Contact Me</a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="linkedin"><img src={linkedin} alt="" className="w-6 h-6" /></a>
              <a href="#" aria-label="github"><img src={github} alt="" className="w-6 h-6" /></a>
              <a href="#" aria-label="instagram"><img src={instagram} alt="" className="w-6 h-6" /></a>
            </div>
          </div>

          {/* right - profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white shadow-soft flex items-center justify-center">
                <img src={profile} alt="profile" className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover" />
              </div>
              {/* decorative ring */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
