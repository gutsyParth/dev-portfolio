import { useRef } from "react";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import { useTheme } from "../../context/ThemeContext";

import {
  SKILLS_CATEGORY,
  STATS,
  TECH_STACK,
} from "../../utils/data";

import {
  containerVariants,
  itemVariants,
} from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`relative overflow-hidden py-24 px-6 ${
        isDarkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Effects */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode
              ? "bg-blue-500"
              : "bg-blue-400"
          }`}
        />

        <div
          className={`absolute bottom-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode
              ? "bg-purple-500"
              : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-[0.3em] mb-4 ${
              isDarkMode
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills &{" "}
            <span className="text-blue-500 font-medium">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed ${
              isDarkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Experience building scalable full-stack applications,
            distributed systems, enterprise platforms, real-time
            services, and cloud-native architectures using modern
            engineering technologies and backend-focused system
            design principles.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILLS_CATEGORY.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white/80 border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl mr-4 ${
                    isDarkMode
                      ? "bg-gray-800"
                      : "bg-gray-100"
                  }`}
                >
                  <category.icon
                    size={24}
                    className="text-blue-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {category.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    className={`px-4 py-3 rounded-lg border text-center text-sm font-medium transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800"
                        : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-semibold mb-3">
              Additional Technologies
            </h3>

            <p
              className={`text-sm md:text-base ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Technologies, tools, and platforms frequently used
              across enterprise and personal projects.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white/70 border-gray-200"
              }`}
            >
              <div className="text-3xl md:text-4xl font-light text-blue-500 mb-3">
                {stat.number}
              </div>

              <div
                className={`text-sm uppercase tracking-wide ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
