import React from "react";

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="text-lg font-poppins font-semibold text-textDark">MyProfile</div>

        <nav className="hidden md:flex items-center gap-6 text-textDark font-poppins">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        <div className="hidden md:block">
          <button className="btn-gradient text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Hire Me</button>
        </div>

        {/* mobile menu stub */}
        <div className="md:hidden">
          <button aria-label="menu" className="p-2">
            <svg className="w-6 h-6 text-textDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
