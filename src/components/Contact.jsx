import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
      id="contact"
    >
      <Reveal>
        <form
          action="https://getform.io/f/placeYourEndpointHere"
          method="POST"
          className="w-full max-w-lg p-6 md:p-10
                     bg-purple-900/10
                     rounded-xl backdrop-blur-sm
                     border border-purple-700
                     shadow-lg"
        >
          <p className="text-gray-100 font-bold text-xl mb-4 text-center">
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
                       text-gray-100 bg-purple-600
                       hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
