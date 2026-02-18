import React from "react";
import profilepic from "../assets/RANU.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen max-w-[1200px] mx-auto mt-36 p-16">

      <div className="grid md:grid-cols-2 place-items-center gap-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">RANU GAURAV</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate frontend developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-6 my-4"
          >
         <motion.a
            href="https://ranugaurav-resume.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
            }}
            className="inline-block font-bold text-gray-200 p-4
                      border border-purple-400 rounded-xl cursor-pointer"
          >
            Download CV
        </motion.a>


            <div className="flex gap-6 text-4xl md:text-6xl text-purple-400">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/RanuGaurav05?tab=repositories" target="_blank">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ranu-gaurav-40a5762a4/" target="_blank">
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/ranu.gaurav05/" target="_blank">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        {/* <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        /> */}
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-wrap text-6xl md:text-7xl justify-center items-center gap-4 py-24 mt-12"
      >
        <p className="text-gray-200 mr-6 text-4xl">My Tech Stack</p>
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-500" />
        <DiNodejsSmall className="text-green-500" />
      </motion.div>

      {/* Shiny Effect (SAFE – visual only) */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>

    </section>
  );
};

export default Hero;
