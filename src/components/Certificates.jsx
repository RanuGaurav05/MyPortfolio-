import React from "react";

const certificates = [
  {
    title: "Full Stack Web Development with MERN",
    issuer: "Sheryians Coding School",
    year: "2025-26",
    link: "/certificates/MERN-certificate-sheryians.jpeg",
  },
  {
    title: "Internship Offer Letter",
    issuer: "Syntecxhub",
    year: "2025",
    link: "/certificates/internship-letter.pdf",
  },
  {
    title: "Data Structures and Algorithms in Python",
    issuer: "SAGE",
    year: "2025",
    link: "/certificates/dsa-certificate.jpeg",
  },
];

const Certificates = () => {
  return (
    <section className="max-w-[1100px] mx-auto py-24 px-6" id="certificates">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[300px] p-6 rounded-xl
                       bg-purple-900/20 backdrop-blur-sm
                       border border-purple-800
                       shadow-lg transition-all duration-300
                       hover:bg-gradient-to-br
                       hover:from-purple-600/20
                       hover:to-blue-600/20
                       hover:shadow-[0_25px_60px_-15px_rgba(128,0,255,0.8)]"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {cert.title}
            </h3>

            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
