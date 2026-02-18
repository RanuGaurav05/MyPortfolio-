import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-24 px-6" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-12">

          {/* About Section */}
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="text-purple-400">Me</span>
              </h3>

              <p className="text-justify leading-7 w-11/12 mx-auto md:mx-0">
               I am a dedicated BTech Computer Science student proficient in full-stack MERN (HTML, CSS, Tailwind, JavaScript), Python DSA, and Java, with proven alumni networking prototypes. Targeting software engineering internships to deliver scalable solutions and tackle complex challenges.
              </p>
            </div>

            <div className="flex flex-wrap mt-10 gap-6">
              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  11<span className="text-purple-400">+</span>
                </h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5<span className="text-purple-400">+</span>
                </h3>
                <p className="text-sm text-gray-400">
                  Years of experience
                </p>
              </div>

              <div className="bg-gray-800/40 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  30<span className="text-purple-400">+</span>
                </h3>
                <p className="text-sm text-gray-400">Happy clients</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="w-full max-w-lg p-6 md:p-10 bg-purple-900/10
                       rounded-xl backdrop-blur-sm border border-purple-700"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-4">
              Let’s connect!
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name ..."
              className="mb-3 w-full rounded-md bg-transparent
                         border border-purple-600 py-2 px-4
                         text-gray-200 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email ..."
              className="mb-3 w-full rounded-md bg-transparent
                         border border-purple-600 py-2 px-4
                         text-gray-200 focus:outline-none"
            />

            <textarea
              name="textarea"
              rows="4"
              placeholder="Your Message ..."
              className="mb-4 w-full rounded-md bg-transparent
                         border border-purple-600 py-2 px-4
                         text-gray-200 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md font-semibold text-lg
                         text-gray-100 bg-purple-600 hover:bg-purple-700
                         transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
