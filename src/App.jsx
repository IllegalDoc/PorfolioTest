import React, { useState } from "react";
import { motion } from "framer-motion";
import MobileAppImg from "./assets/MobileApp.png";
import Naptec from "./assets/Naptec.png";
import Lintext from "./assets/Lintext.png";
import ScrapyImg from "./assets/Scrapy.png";
import Avatar from "./assets/Avatar.png";

// --- Tech logo imports ---
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
import Bank from "./assets/logos/bankofAlgeria.jpeg";
import uni1 from "./assets/logos/uni1.jpeg";
import uni2 from "./assets/logos/uni2.png";
import ibnrochd from "./assets/logos/ibnrochd.png";
// -------------------------

export default function AnesPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Mobile App + Admin Dashboard (Paramedical Company)",
      desc: "A mobile app + admin dashboard with clean UI and reactive backend.",
      tech: ["React Native", "Expo", "Firebase"],
      image: MobileAppImg,
      link: null,
    },
    {
      title: "Lintext Homepage",
      desc: "Responsive homepage with accessible layout and animations.",
      tech: ["Vanilla JS", "CSS", "HTML"],
      image: Lintext,
      link: "https://illegaldoc.github.io/LintextTest/",
    },
    {
      title: "Naptec Homepage",
      desc: "Homepage project built during an advanced HTML/CSS exercise.",
      tech: ["Vanilla JS", "CSS", "HTML"],
      image: Naptec,
      link: "https://illegaldoc.github.io/NaptecTest/",
    },
    {
      title: "Scraping Projects",
      desc: "Long-running scraping tools and utilities built with Scrapy.",
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

  const experiences = [
    {
      logo: LogoReact,
      title: "Frontend Developer — Freelance",
      date: "2023 — Present",
      desc: "Built multiple landing pages and small web apps for local clients; focused on performance and accessibility.",
    },
    {
      logo: Bank,
      title: "Bank Of Algeria - Intern",
      date: "2021 — 2023",
      desc: "Diagnosed hardware and peripherals, administered and configured network devices (routers and switches) with issue resolution, and implemented a security solution using a SIEM system.",
    },
    {
      logo: LogoScrapy,
      title: "Web Scraper / Data Engineer",
      date: "2021 — 2023",
      desc: "Designed and maintained Scrapy spiders and ETL pipelines for structured data collection.",
    },
    {
      logo: LogoReactNative,
      title: "Intern — Web Tools",
      date: "2020 — 2021",
      desc: "Assisted in building internal dashboards and automation tools using React and Python.",
    },
  ];

  const education = [
    {
      logo: uni1,
      title: "B.Sc. Computer Science — Saad Dahlab Blida 1",
      date: "2017 — 2021",
      desc: "Bachelor degree in Information Systems Engineering (algorithms, databases, networks).",
    },
    {
      logo: ibnrochd,
      title: "Professional CS Bachelor's  — 3IL Limoges,IbnRochd",
      date: "2021 — 2023",
      desc: "Work oriented Bachelor with courses on cybersecurity, Networks and databases",
    },
    {
      logo: uni2,
      title: "Master's in Networking  — University of Batna 2",
      date: "2024 — Present",
      desc: "Master's in Networking and distributed systems.",
    },
  ];

  // helper to render alternating timeline items (wider, alternating left/right)
  function TimelineItem({ item, index }) {
    const left = index % 2 === 0;

    return (
      <div className="w-full">
        <div
          className={`w-full flex ${
            left ? "justify-start" : "justify-end"
          } md:items-start`}
        >
          <div
            className={`w-full md:w-10/12 ${
              left ? "md:pl-0 md:pr-6" : "md:pr-0 md:pl-6"
            }`}
          >
            <div className="bg-[#0f0f18] rounded-xl p-6 border border-gray-800 shadow-md hover:shadow-indigo-500/20 transition">
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`flex items-center gap-3 flex-1 ${
                    left ? "justify-start" : "justify-end"
                  }`}
                >
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-8 h-8 rounded-md object-contain"
                  />
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex-1 h-px bg-white/6 mx-3"></div>
                </div>
                <div className="text-xs text-gray-400 ml-4">{item.date}</div>
              </div>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // whiteify logos style (used for small icons)
  const whiteifyStyle = { filter: "grayscale(1) brightness(0) invert(1)" };

  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="min-h-screen w-full bg-gradient-to-b from-[#05050a] to-[#121028] text-gray-100 font-sans"
    >
      {/* NAVBAR: grid with 3 columns so center links stay centered */}
      <header className="fixed w-full top-0 left-0 bg-[#05050a]/70 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-3 items-center px-4 sm:px-6 md:px-8 py-3">
          {/* left: SVG logo */}
          <div className="flex items-center justify-start">
            <a
              href="#"
              aria-label="Home"
              className="inline-flex items-center gap-3"
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <rect
                  x="4"
                  y="4"
                  width="40"
                  height="40"
                  rx="8"
                  fill="#070712"
                  stroke="#6c63ff"
                  strokeWidth="2"
                />
                <path
                  d="M14 30L24 14L34 30"
                  stroke="#9aa2ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* center: nav links */}
          <nav className="flex items-center justify-center">
            <div className="space-x-8 text-sm md:text-base hidden sm:inline-flex">
              <a href="#projects" className="hover:text-indigo-300 transition">
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-indigo-300 transition"
              >
                Experience
              </a>
              <a href="#education" className="hover:text-indigo-300 transition">
                Education
              </a>
              <a href="#contact" className="hover:text-indigo-300 transition">
                Contact
              </a>
            </div>
          </nav>

          {/* right: mobile button + social icons */}
          <div className="flex items-center justify-end space-x-3">
            {/* mobile menu button — moved here so it sits on the right on mobile */}
            <div className="sm:hidden">
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

            {/* desktop GitHub icon (hidden on small screens) */}
            <a
              href="https://github.com/illegalDoc"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-white/3 transition hidden md:inline-flex"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5A12 12 0 008.21 23.26c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.41 1.24-3.26-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.94 1.24 3.26 0 4.63-2.8 5.66-5.47 5.96.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.21.7.82.58A12 12 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* mobile dropdown (centered links) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            menuOpen
              ? { opacity: 1, height: "auto" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden sm:hidden w-full bg-[#05050a]/80 border-t border-gray-800 backdrop-blur-md"
        >
          <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col items-center space-y-3">
            <a
              href="#projects"
              className="py-2 hover:text-indigo-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="py-2 hover:text-indigo-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              className="py-2 hover:text-indigo-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-indigo-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </header>

      {/* HERO */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0a0a0f] to-[#1b1b2f] px-6 md:px-12 pt-20">
        <motion.h2
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 w-full max-w-4xl"
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

      {/* PROJECTS: centered cards with highlight */}
      <section id="projects" className="w-full py-12 md:py-20">
        <div className="w-full px-6 md:px-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-300 text-center">
            Projects
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                whileHover={{ scale: 1.03 }}
                className="w-full sm:w-[48%] md:w-[30%] bg-[#0f0f18] border border-transparent rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-200"
              >
                {p.image ? (
                  <div className="w-full h-48 md:h-56 flex items-center justify-center overflow-hidden bg-[#0b0b12]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-full opacity-95"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-center justify-center text-gray-500">
                    No preview
                  </div>
                )}
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-400 mb-3">{p.desc}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    {p.tech.join(" · ")}
                  </div>
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
      <section id="about" className="w-full py-12 md:py-20">
        <div className="w-full px-6 md:px-12 max-w-[900px] mx-auto">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-300"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About
          </motion.h3>
          <motion.p
            className="text-gray-300 text-base md:text-lg"
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

      {/* SKILLS — grid of logos (no carousel) */}
      <section
        id="skills"
        className="w-full py-12 md:py-16 border-t border-gray-800"
      >
        <div className="w-full px-6 md:px-12 max-w-[1000px] mx-auto">
          <h4 className="text-xl font-semibold text-indigo-300 mb-6">
            Can work with
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6">
            {canWorkLogos.map((l, i) => (
              <div
                key={`can-${i}`}
                className="flex items-center justify-center p-3 rounded-lg bg-[#0f0f18] border border-transparent hover:border-indigo-500/30 hover:shadow-lg transition"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  style={whiteifyStyle}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-6">
            Learning
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {learningLogos.map((l, i) => (
              <div
                key={`learn-${i}`}
                className="flex items-center justify-center p-3 rounded-lg bg-[#0f0f18] border border-transparent hover:border-indigo-500/30 hover:shadow-lg transition"
              >
                <img
                  src={l.src}
                  alt={l.alt}
                  style={whiteifyStyle}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="w-full py-12 md:py-20 bg-[#070712]">
        <div className="w-full px-6 md:px-12 max-w-[1200px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-300 text-center">
            Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((e, idx) => (
              <TimelineItem key={e.title} item={e} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="w-full py-12 md:py-20">
        <div className="w-full px-6 md:px-12 max-w-[1200px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-indigo-300 text-center">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((e, idx) => (
              <TimelineItem key={e.title} item={e} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full py-12 md:py-20 bg-[#080810]">
        <div className="w-full px-6 md:px-12 max-w-[800px] mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-300">
            Contact
          </h3>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Want to collaborate or just connect? Reach me via GitHub or
            LinkedIn.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/illegalDoc"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-600 rounded-lg hover:border-indigo-400 transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://dz.linkedin.com/in/anis-bendjaballah-2979342b8"
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
          © {new Date().getFullYear()} Anes Bendjaballah • Built with React •
        </p>
      </footer>
    </div>
  );
}
