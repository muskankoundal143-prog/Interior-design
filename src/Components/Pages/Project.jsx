import React from "react";

const Projects = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      title: "Modern Apartment",
      desc: "Contemporary design with luxury finishes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      title: "Luxury Villa",
      desc: "Elegant spaces designed for premium living.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      title: "Corporate Office",
      desc: "Functional workspace with modern aesthetics.",
    },
  ];

  return (
    <>

      <section className="bg-gray-50 py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10">


          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
             <span className="text-[#550b14]"> Our Projects</span>
            </h1>

            <p className="mt-3 text-gray-600 text-base md:text-lg">
              Explore some of our latest interior design creations.
            </p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {project.desc}
                  </p>

                  <button className="mt-4 text-[#550b14] font-semibold">
                    View Project →
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


    </>
  );
};

export default Projects;