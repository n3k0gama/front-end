import React from "react";
import profileSmall from "../assets/images/profile.jpg";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

export default function AboutSection(){
  return (
    <div>
      {/* ABOUT */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img src={profileSmall} alt="profile" className="w-48 h-48 rounded-lg object-cover shadow-soft" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-textDark font-poppins mb-4">About Me</h3>
            <p className="text-textGray mb-4">
              Hi, I'm a passionate designer and frontend developer. I craft user-centered interfaces and build performant web apps.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">Web Design</span>
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">Branding</span>
            </div>
            <a className="btn-gradient text-white px-4 py-2 rounded-lg inline-block" href="#contact">Let's Connect</a>
          </div>
        </div>
      </section>

            {/* SKILLS */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-textDark mb-10 font-poppins">My Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skill 1 */}
            <div className="bg-[#F0E7FF] rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold text-textDark mb-1 font-poppins">UI/UX Design</h4>
              <p className="text-sm text-textGray">Figma, Adobe XD, Sketch</p>
            </div>

            {/* Skill 2 */}
            <div className="bg-[#E0EAFE] rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold text-textDark mb-1 font-poppins">Frontend Dev</h4>
              <p className="text-sm text-textGray">React, Vue, Tailwind</p>
            </div>

            {/* Skill 3 */}
            <div className="bg-[#FFEFB0] rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-3">✏️</div>
              <h4 className="font-semibold text-textDark mb-1 font-poppins">Game Dev</h4>
              <p className="text-sm text-textGray">godot, unreal engine, unity</p>
            </div>

            {/* Skill 4 */}
            <div className="bg-[#E9E8FF] rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-textDark mb-1 font-poppins">Motion Graphic</h4>
              <p className="text-sm text-textGray">After Effects, Lottie</p>
            </div>
          </div>
        </div>
      </section>


      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 bg-bgSoft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-textDark mb-8">Portfolio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[project1, project2, project3].map((img, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4">
                <img src={img} alt={`project-${i}`} className="w-full h-40 object-cover rounded-md mb-3" />
                <h4 className="font-semibold text-textDark">Project Title {i+1}</h4>
                <p className="text-textGray text-sm mt-1">UI/UX • Frontend</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a className="btn-gradient inline-block text-white px-5 py-2 rounded-full" href="#">More on Behance</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-softA">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-textDark mb-4">Contact Me</h3>
            <p className="text-textGray mb-6">Interested in working together? Let's talk — send me a message and I'll get back to you.</p>
            <div className="flex gap-3 items-center">
              <div>
                <p className="text-sm text-textGray">Email</p>
                <p className="text-textDark font-poppins">hello@youremail.com</p>
              </div>
              <div>
                <p className="text-sm text-textGray">Phone</p>
                <p className="text-textDark font-poppins">+62 812-3456-7890</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <img src="../assets/images/linkedin.svg" alt="in" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <img src="../assets/images/github.svg" alt="gh" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <img src="../assets/images/instagram.svg" alt="ig" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <label className="block text-sm text-textGray">Name</label>
              <input className="w-full mt-2 mb-4 p-3 border rounded-lg" placeholder="Your name" />
              <label className="block text-sm text-textGray">Email</label>
              <input className="w-full mt-2 mb-4 p-3 border rounded-lg" placeholder="you@mail.com" />
              <label className="block text-sm text-textGray">Message</label>
              <textarea className="w-full mt-2 mb-4 p-3 border rounded-lg" rows="5" placeholder="Type your message..."></textarea>
              <button className="btn-gradient text-white px-4 py-2 rounded-lg">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
