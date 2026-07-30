import React from "react";

const projects = [
  {
    id: "01",
    title: "The Modern Villa",
    type: "Luxury Residence",
    place: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  },
  {
    id: "02",
    title: "Urban Apartment",
    type: "Contemporary Interior",
    place: "Delhi",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
  },
  {
    id: "03",
    title: "Creative Workspace",
    type: "Commercial Design",
    place: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
  },
];


export default function Project() {
  return (
    <main className="bg-[#f8f8f7] text-gray-900">



      <section className="py-20 px-6 text-center">

        <p className="uppercase tracking-[6px] text-[#550b14]">
          Selected Works
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif">
          Spaces With
          <br />
          A Story
        </h1>

      </section>




      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">


        {projects.map((project, index) => (

          <div
            key={project.id}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >



            <div className="relative group">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[550px] object-cover rounded-3xl 
                group-hover:scale-105 transition duration-700"
              />


              <div className="absolute top-6 left-6 bg-white px-5 py-3 rounded-full">
                <span className="text-[#550b14] font-semibold">
                  {project.id}
                </span>
              </div>


            </div>




            <div>


              <p className="text-[#550b14] uppercase tracking-[4px]">
                {project.type}
              </p>


              <h2 className="mt-5 text-5xl font-serif">
                {project.title}
              </h2>


              <p className="mt-5 text-gray-600 text-lg">
                A thoughtfully designed space combining
                elegance, comfort and modern architecture.
              </p>


              <div className="mt-6 text-gray-500">
                 {project.place}
              </div>


              <button className="mt-8 border border-[#550b14] text-[#550b14] px-8 py-3 rounded-full hover:bg-[#550b14] hover:text-white transition">
                View Details
              </button>


            </div>


          </div>

        ))}


      </section>

      <section className="py-16 bg-[#550b14] text-center text-white">


<h2 className="text-4xl font-bold">
Ready To Transform Your Space?
</h2>


<p className="mt-4 text-[#cbc0b2] text-lg">
Let's create an interior that reflects your personality.
</p>


<button className="mt-7 bg-[#f8f8f7] text-[#550b14] px-8 py-3 rounded-full font-semibold">
Book Consultation
</button>


</section>
    </main>

    
  );
  
}