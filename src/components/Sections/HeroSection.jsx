import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { useTheme } from "../../context/ThemeContext";

import PROFILE_PIC from "../../assets/images/profile-img.jpg";

import {
  containerVariants,
  itemVariants,
} from "../../utils/helper";

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, -100]
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/gutsyParth",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/parth-yadav-sde/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:parth.10june@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-10 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode
                ? "bg-blue-500"
                : "bg-blue-400"
            }`}
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode
                ? "bg-purple-500"
                : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 mt-20">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div
                variants={imageVariants}
                className="mb-8"
              >
                <div className="w-36 h-36 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`w-full h-full overflow-hidden rounded-3xl border-4 shadow-2xl ${
                      isDarkMode
                        ? "border-gray-800"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Parth Yadav"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-3xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-[0.3em] mb-4 ${
                  isDarkMode
                    ? "text-gray-500"
                    : "text-gray-600"
                }`}
              >
                Full Stack Engineer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }
                >
                  Building
                </span>

                <br />

                <span className="text-blue-500 font-medium">
                  Scalable Software
                </span>

                <br />

                <span
                  className={
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }
                >
                  & Distributed Systems
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8 ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Full Stack Engineer at PwC building enterprise
                platforms, distributed backend systems, real-time
                applications, and scalable cloud-native software
                using React.js, FastAPI, Spring Boot, Node.js,
                PostgreSQL, Redis, Docker, and AWS.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    scrollToSection("work")
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-4 text-xs uppercase tracking-[0.25em] flex-wrap"
              >
                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Architect
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  •
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Build
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  •
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Scale
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  •
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Optimize
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-[0.3em] mb-6 ${
                  isDarkMode
                    ? "text-gray-500"
                    : "text-gray-600"
                }`}
              >
                Full Stack Engineer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span
                  className={
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }
                >
                  Building
                </span>

                <br />

                <span className="text-blue-500 font-medium">
                  Scalable Software
                </span>

                <br />

                <span
                  className={
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }
                >
                  & Distributed Systems
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl font-light leading-relaxed max-w-2xl mb-12 ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Full Stack Engineer at PwC focused on enterprise
                applications, distributed backend systems,
                event-driven architectures, real-time platforms,
                and scalable cloud-native engineering solutions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex gap-6 mb-10"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    scrollToSection("work")
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  className={`border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-6 text-xs uppercase tracking-[0.25em]"
              >
                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Distributed Systems
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  •
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Backend Engineering
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  •
                </span>

                <span
                  className={
                    isDarkMode
                      ? "text-gray-600"
                      : "text-gray-500"
                  }
                >
                  Cloud Systems
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-6 text-xs uppercase tracking-[0.25em] absolute -top-16 -left-10"
                >
                  <span
                    className={
                      isDarkMode
                        ? "text-gray-600"
                        : "text-gray-500"
                    }
                  >
                    React
                  </span>

                  <span
                    className={
                      isDarkMode
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                  >
                    •
                  </span>

                  <span
                    className={
                      isDarkMode
                        ? "text-gray-600"
                        : "text-gray-500"
                    }
                  >
                    FastAPI
                  </span>

                  <span
                    className={
                      isDarkMode
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                  >
                    •
                  </span>

                  <span
                    className={
                      isDarkMode
                        ? "text-gray-600"
                        : "text-gray-500"
                    }
                  >
                    AWS
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-96 rounded-3xl overflow-hidden border-4 shadow-2xl ${
                    isDarkMode
                      ? "border-gray-800"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt="Parth Yadav"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={
              isDarkMode
                ? "text-gray-600"
                : "text-gray-400"
            }
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
