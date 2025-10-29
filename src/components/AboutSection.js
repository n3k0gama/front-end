import React from "react";
import profileSmall from "../assets/images/profile.jpg";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";

export default function AboutSection() {
  return (
    <div>
      {/* ABOUT */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Profile image - fully responsive */}
          <div className="flex justify-center md:justify-start flex-shrink-0">
            <div
              className="
                relative flex items-center justify-center
                p-[4px] bg-[#E0EAFE] rounded-lg
                shadow-[0_4px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]
              "
            >
              <img
                src={profileSmall}
                alt="profile"
                className="
                  rounded-md object-cover
                  w-40 h-40
                  sm:w-48 sm:h-48
                  md:w-56 md:h-56
                  lg:w-64 lg:h-64
                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-textDark font-poppins mb-4">
              About Me
            </h3>
            <p className="text-textGray mb-4 max-w-xl mx-auto md:mx-0">
              Hi, I'm a passionate designer and frontend developer. I craft
              user-centered interfaces and build performant web apps.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">
                Web Design
              </span>
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-bgLight text-textDark rounded-full text-sm">
                Branding
              </span>
            </div>

            <a
              className="btn-gradient text-white px-4 py-2 rounded-lg inline-block self-center md:self-start"
              href="#contact"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-textDark mb-10 font-poppins">
            My Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Figma, Adobe XD, Sketch",
                bg: "bg-[#F0E7FF]",
              },
              {
                icon: "💻",
                title: "Frontend Dev",
                desc: "React, Vue, Tailwind",
                bg: "bg-[#E0EAFE]",
              },
              {
                icon: "✏️",
                title: "Game Dev",
                desc: "Godot, Unreal, Unity",
                bg: "bg-[#FFEFB0]",
              },
              {
                icon: "⚡",
                title: "Motion Graphic",
                desc: "After Effects, Lottie",
                bg: "bg-[#E9E8FF]",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className={`${skill.bg} rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-textDark mb-1 font-poppins">
                  {skill.title}
                </h4>
                <p className="text-sm text-textGray">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 bg-bgSoft">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-textDark mb-8">
            Portfolio
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[project1, project2, project3].map((img, i) => (
              <div
                key={i}
                className="relative bg-white rounded-xl shadow p-4 overflow-hidden"
              >
                <div
                  className="
                    absolute top-3 right-3
                    bg-[#E5E7EB] text-textDark text-xs font-medium
                    px-3 py-1 rounded-md
                    shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)]
                  "
                >
                  Featured
                </div>

                <img
                  src={img}
                  alt={`project-${i}`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h4 className="font-semibold text-textDark">
                  Project Title {i + 1}
                </h4>
                <p className="text-textGray text-sm mt-1">UI/UX • Frontend</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              className="btn-gradient inline-flex items-center text-white px-5 py-2 rounded-full gap-2"
              href="#"
            >
              <img src={github} alt="GitHub" className="w-5 h-5" />
              More on GitHub
            </a>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-16 bg-[#F0E7FF]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Left - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-textDark mb-4">
              Contact Me
            </h3>
            <p className="text-textGray mb-6">
              Interested in working together? Let's talk — send me a message and
              I'll get back to you.
            </p>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm text-textGray">Email</p>
                <p className="text-textDark font-poppins">
                  hello@youremail.com
                </p>
              </div>
              <div>
                <p className="text-sm text-textGray">Phone</p>
                <p className="text-textDark font-poppins">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[linkedin, github, instagram].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <img src={icon} alt="social" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="
              bg-white rounded-xl p-6
              shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]
            "
          >
            <label className="block text-sm text-textGray">Name</label>
            <input
              className="w-full mt-2 mb-4 p-3 border rounded-lg"
              placeholder="Your name"
            />
            <label className="block text-sm text-textGray">Email</label>
            <input
              className="w-full mt-2 mb-4 p-3 border rounded-lg"
              placeholder="you@mail.com"
            />
            <label className="block text-sm text-textGray">Message</label>
            <textarea
              className="w-full mt-2 mb-4 p-3 border rounded-lg"
              rows="5"
              placeholder="Type your message..."
            ></textarea>
            <button className="btn-gradient text-white px-4 py-2 rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
