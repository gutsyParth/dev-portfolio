import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import {
  containerVariants,
  itemVariants,
} from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative overflow-hidden py-24 px-6 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />

        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-[0.3em] mb-4 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light"
          >
            About{" "}
            <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="col-span-full space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Building Scalable Software That Solves Real Problems
              </h3>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                I’m a Full Stack Engineer focused on building
                scalable, reliable, and high-performance software
                systems. My experience spans enterprise platforms,
                distributed backend services, real-time applications,
                and cloud-native architectures using technologies like
                React.js, Next.js, FastAPI, Spring Boot, Node.js,
                PostgreSQL, Redis, Docker, and AWS.
              </p>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                At PwC Acceleration Center India, I work on
                enterprise-grade systems for automotive quoting and
                lending risk domains, contributing across frontend,
                backend, databases, observability, and distributed
                processing workflows. I enjoy designing systems that
                remain maintainable, performant, and resilient under
                scale.
              </p>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                I’m particularly interested in backend engineering,
                distributed systems, microservices architecture,
                event-driven systems, API design, and performance
                optimization. I enjoy solving engineering problems
                involving scalability, asynchronous processing,
                real-time communication, and system reliability.
              </p>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                Beyond enterprise engineering, I actively build
                full-stack products ranging from real-time chat
                systems to microservices-based platforms and AI-powered
                communication tools. I care deeply about clean
                architecture, developer experience, maintainable code,
                and building products that create meaningful impact.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                My long-term goal is to grow into a strong systems and
                product engineer capable of building highly scalable
                software platforms that combine strong engineering
                fundamentals with excellent user experience.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold mb-6">
                What I Love Building
              </h3>

              <div className="grid gap-4">
                {PASSIONS.map((passion) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-5 rounded-xl transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-gray-700"
                          : "bg-white"
                      }`}
                    >
                      <passion.icon
                        size={20}
                        className="text-blue-500"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        {passion.title}
                      </h4>

                      <p
                        className={`text-sm ${
                          isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={timelineRef}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={timelineVariants}
          className="relative mt-20"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center lg:text-left">
            Professional Journey
          </h3>

          <div
            className={`absolute left-8 top-16 bottom-0 w-px ${
              isDarkMode
                ? "bg-gray-700"
                : "bg-gray-300"
            }`}
          />

          <div className="space-y-8">
            {JOURNEY_STEPS.map((step) => (
              <motion.div
                key={step.year}
                variants={stepVariants}
                whileHover={{ x: 4 }}
                className="relative flex items-start space-x-6 group"
              >
                <div
                  className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon
                    size={24}
                    className="text-white"
                  />
                </div>

                <div
                  className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                      : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                  } backdrop-blur-sm`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-semibold">
                      {step.title}
                    </h4>

                    <span
                      className={`text-sm px-3 py-1 rounded-full w-fit ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {step.year}
                    </span>
                  </div>

                  <div
                    className={`text-sm font-medium mb-3 ${
                      isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                    }`}
                  >
                    {step.company}
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-24"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <p
              className={`text-lg ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Interested in building scalable products together?
            </p>

            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
