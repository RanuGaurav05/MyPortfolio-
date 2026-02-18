import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Syntecxhub",
    period: "11/2025 - 12/2025",
    description: "SyntecxHub offers an educational internship opportunity focused on strengthening web development skills and gaining hands-on experience through real-world project exposure..",
  }
  
];

const Experience = () => {
  return (
    <section className="max-w-[900px] mx-auto py-12 px-6">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-8">
        Experience
      </h1>
      <h3 className="text-xl text-gray-400 font-bold text-center mb-12">Internship</h3>

      <motion.div
        className="flex flex-col items-center gap-8 space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-700 p-6 rounded-xl shadow-lg
                         hover:shadow-2xl transition-shadow duration-300
                         bg-purple-900/20 backdrop-blur-sm"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>

              <p className="text-gray-400 text-sm">
                {experience.period}
              </p>

              <p className="text-gray-300 mt-4">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
