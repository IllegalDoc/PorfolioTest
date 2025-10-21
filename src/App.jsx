import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileAppImg from "./assets/MobileApp.png";
import Naptec from "./assets/Naptec.png";
import Lintext from "./assets/Lintext.png";
import ScrapyImg from "./assets/Scrapy.png";
import Avatar from "./assets/Avatar.png";

// --- Tech logo imports (place SVG/PNG logos in src/assets/logos/) ---
import LogoPython from "./assets/logos/python.svg";
import LogoJS from "./assets/logos/js.svg";
import LogoHTML from "./assets/logos/html.svg";
import LogoCSS from "./assets/logos/css.svg";
import LogoReact from "./assets/logos/react.svg";
import LogoReactNative from "./assets/logos/react-native.svg";
import LogoJava from "./assets/logos/java.svg";
import LogoScrapy from "./assets/logos/scrapy.svg";
import LogoMySQL from "./assets/logos/mysql.svg";
import LogoTailwind from "./assets/logos/tailwind.svg";
import LogoThree from "./assets/logos/threejs.svg";
import LogoFirebase from "./assets/logos/firebase.svg";
import LogoMongo from "./assets/logos/mongodb.svg";
// --------------------------------------------------------------------

export default function AnesPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Mobile App + Admin Dashboard (Paramedical Company)",
      desc: "A mobile app and admin dashboard built for a paramedical company. Modern, intuitive design and robust backend.",
      tech: ["React Native", "Expo", "Firebase", "React Dashboard"],
      image: MobileAppImg,
      link: null,
    },
    {
      title: "Lintext Homepage",
      desc: "Homepage built for Lintext with responsive layout and clean design.",
      tech: ["Vanilla JS", "CSS", "HTML"],
      image: Lintext,
      link: "https://illegaldoc.github.io/LintextTest/",
    },
    {
      title: "Naptec Homepage",
      desc: "Responsive homepage for Naptec Paper — built as part of The Odin Project advanced HTML/CSS section.",
      tech: ["Vanilla JS", "CSS", "HTML"],
      image: Naptec,
      link: "https://illegaldoc.github.io/NaptecTest/",
    },
    {
      title: "Scraping Websites Since a While",
      desc: "A set of long-term scraping projects using Scrapy and Python, automating structured data extraction from multiple sources.",
      tech: ["Python", "Scrapy"],
      image: ScrapyImg,
      link: null,
    },
  ];

  const canWorkLogos = [
    { src: LogoPython, alt: "Python" },
    { src: LogoJS, alt: "JavaScript" },
    { src: LogoHTML, alt: "HTML" },
    { src: LogoCSS, alt: "CSS" },
    { src: LogoReact, alt: "React" },
    { src: LogoReactNative, alt: "React Native" },
    { src: LogoJava, alt: "Java" },
    { src: LogoScrapy, alt: "Scrapy" },
    { src: LogoMySQL, alt: "MySQL" },
  ];

  const learningLogos = [
    { src: LogoTailwind, alt: "Tailwind" },
    { src: LogoThree, alt: "Three.js" },
    { src: LogoFirebase, alt: "Firebase" },
    { src: LogoMongo, alt: "MongoDB" },
  ];

  // force logos white
  const whiteifyStyle = {
    filter: "grayscale(1) brightness(0) invert(1)",
    WebkitFilter: "grayscale(1) brightness(0) invert(1)",
  };

  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="min-h-screen w-full bg-gradient-to-b from-[#0a0a0f] to-[#1b1b2f] text-gray-100 font-sans"
    >
      {/* Inline CSS for a seamless marquee */}
      <style>{`
  /* keyframes - translate using 3d for GPU */
  @keyframes marquee-left {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  .marquee-wrap { overflow: hidden; width: 100vw; } 
  /* track is exactly 200% of one set (two identical sets side-by-side) */
  .marquee-track {
    display: flex;
    width: 200%;
    will-change: transform;
    backface-visibility: hidden;
    transform: translate3d(0,0,0);
  }

  /* content block holds one set of logos */
  .marquee-content {
    display: flex;
    gap: 1.5rem; /* same as your Tailwind gap-6 */
    align-items: center;
    /* each content block is allowed to size naturally */
  }

  /* reduce motion respects user preference */
  @media (prefers-reduced-motion: reduce) {
    .marquee-track { animation: none !important; }
  }
`}</style>

      {/* NAVBAR (fixed) */}
      <header className="fixed w-full top-0 left-0 bg-[#0a0a0f]/60 backdrop-blur-md border-b border-gray-800 z-50">
        <nav className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-400">
              Anes Bendjaballah
            </h1>

            {/* desktop links */}
            <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
              <a href="#projects" className="hover:text-indigo-300 transition">
                Projects
              </a>
              <a href="#about" className="hover:text-indigo-300 transition">
                About
              </a>
              <a href="#skills" className="hover:text-indigo-300 transition">
                Skills
              </a>
              <a href="#contact" className="hover:text-indigo-300 transition">
                Contact
              </a>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((s) => !s)}
                className="p-2 rounded-md border border-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden px-4 pb-4">
              <div className="max-w-6xl mx-auto bg-[#0a0a0f]/80 border border-gray-800 rounded-lg p-3 flex flex-col gap-2">
                <a
                  href="#projects"
                  className="py-2 px-2 hover:text-indigo-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className="py-2 px-2 hover:text-indigo-300"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="py-2 px-2 hover:text-indigo-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="py-2 px-2 hover:text-indigo-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0a0a0f] to-[#1b1b2f] px-6 md:px-12 pt-20">
        <motion.h2
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 w-full"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi, I'm Anes.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl w-full max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          A developer who builds interactive web apps, mobile experiences, and
          web scrapers. I love clean interfaces, resilient scrapers, and 3D
          visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex justify-center w-full"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-indigo-700 to-purple-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-[#0b0b11] overflow-hidden flex items-center justify-center">
              <img
                src={Avatar}
                alt="Anes avatar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full py-16 md:py-24">
        <div className="w-full px-6 md:px-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-300">
            Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                className="bg-[#151523] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-indigo-500/20 transition-transform"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {p.image && (
                  <div className="relative w-full h-48 sm:h-56 md:h-64 bg-[#1f1f33] flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-full opacity-90"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <h4 className="font-semibold text-lg text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 mb-3">
                    {p.desc}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {p.tech.join(" · ")}
                  </p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm px-4 py-2 border border-indigo-500 text-indigo-300 rounded-lg hover:bg-indigo-500/10 transition"
                    >
                      Live Repo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-16 md:py-24">
        <div className="w-full px-6 md:px-12">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-300"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About
          </motion.h3>
          <motion.p
            className="text-gray-300 w-full max-w-3xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hey there! I’m Anes, a Computer Science grad from Algeria (soon to
            be Master’s!). I started my web journey with Python and{" "}
            <a href="https://www.scrapy.org/"> Scrapy</a>, and realized that
            scraping meant I needed to know HTML, CSS, and JS. So I dived into
            web development, and with the help of the{" "}
            <a href="https://www.theodinproject.com/"> Odin Project</a>, I got
            hands-on with React. That led to real job opportunities, and soon
            after, I picked up a mobile app project — React Native wasn’t too
            hard since it’s mostly React. Still learning, still building, and
            more to come!
          </motion.p>
        </div>
      </section>

      {/* SKILLS (CSS marquee, full-width, continuous, seamless) */}
      <section
        id="skills"
        className="w-full py-12 md:py-20 border-t border-gray-800"
      >
        <div className="w-full max-w-full mx-auto">
          {/* CAN WORK WITH */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4 px-6 md:px-12">
              <h4 className="text-xl font-semibold text-indigo-300">
                Can work with
              </h4>
            </div>

            {/* full-bleed wrap */}
            <div className="marquee-wrap -mx-6 md:-mx-12">
              <div
                className="marquee-track"
                style={{
                  animation: "marquee-left 18s linear infinite",
                }}
                aria-hidden="false"
              >
                {/* first copy */}
                <div className="marquee-content px-6 md:px-12">
                  {canWorkLogos.map((l, i) => (
                    <div
                      key={`can-${i}`}
                      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        style={whiteifyStyle}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* duplicated copy (must be identical) */}
                <div
                  className="marquee-content px-6 md:px-12"
                  aria-hidden="true"
                >
                  {canWorkLogos.map((l, i) => (
                    <div
                      key={`candup-${i}`}
                      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        style={whiteifyStyle}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LEARNING */}
          <div>
            <div className="flex items-center justify-between mb-4 px-6 md:px-12">
              <h4 className="text-xl font-semibold text-indigo-300">
                Learning
              </h4>
            </div>

            <div className="marquee-wrap -mx-6 md:-mx-12">
              <div
                className="marquee-track"
                style={{
                  animation: "marquee-left 28s linear infinite", // longer = slower
                }}
                aria-hidden="false"
              >
                <div className="marquee-content px-6 md:px-12">
                  {learningLogos.map((l, i) => (
                    <div
                      key={`learn-${i}`}
                      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        style={whiteifyStyle}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div
                  className="marquee-content px-6 md:px-12"
                  aria-hidden="true"
                >
                  {learningLogos.map((l, i) => (
                    <div
                      key={`learndup-${i}`}
                      className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2"
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        style={whiteifyStyle}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="w-full py-16 md:py-24 border-t border-gray-800"
      >
        <div className="w-full px-6 md:px-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-300">
            Contact
          </h3>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Want to collaborate or just connect? Reach me via:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/anes"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-600 rounded-lg hover:border-indigo-400 transition text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-gray-600 rounded-lg hover:border-indigo-400 transition text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} Anes Bendjaballah • Built with React +
          Tailwind + Framer Motion
        </p>
      </footer>
    </div>
  );
}
