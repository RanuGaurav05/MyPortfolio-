import React from "react";

const interests = [
  {
    emoji: "🗣️",
    title: "Technology and Innovation Debates",
    description:
      "Debate and discussions on technology, innovation, and social issues",
  },
  {
    emoji: "♟️",
    title: "Chess",
    description:
      "Chess as a strategic hobby enhancing problem-solving abilities",
  },
  {
    emoji: "🎸",
    title: "Music Enthusiast",
    description:
      "Playing and learning guitar as a passionate music enthusiast",
  },
];

const Interests = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-20" id="interests">
      
      <h2 className="text-3xl font-bold text-gray-200 text-center mb-12">
        Interests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">

        {interests.map((interest, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] p-6 rounded-xl
                       bg-purple-900/20 backdrop-blur-sm
                       border border-purple-800
                       text-gray-300
                       transition-all duration-300

                       hover:bg-gradient-to-br
                       hover:from-purple-600/20
                       hover:to-blue-600/20
                       hover:text-white
                       hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.5)]"
          >
            <div className="text-4xl mb-4">{interest.emoji}</div>

            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {interest.title}
            </h3>

            <p className="text-sm text-gray-400">
              {interest.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Interests;
