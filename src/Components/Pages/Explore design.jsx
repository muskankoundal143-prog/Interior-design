import React from "react";

const designs = [
  {
    title: "Luxury Living Room",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  },
  {
    title: "Modern Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800",
  },
  {
    title: "Elegant Bedroom",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
  },
  {
    title: "Office Workspace",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
];

const Explore = () => {
  return (
    <main className="bg-[#f8f8f7]">


      <section className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
          alt="Interior"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="text-white px-5">
            <p className="uppercase tracking-[6px] text-yellow-300">
              Explore Designs
            </p>

            <h1 className="text-5xl md:text-7xl font-serif mt-6">
              Beautiful Spaces
              <br />
              Crafted For You
            </h1>

            <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
              Discover elegant interior designs that combine style,
              comfort, and functionality.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-white text-[#550b14] font-semibold hover:scale-105 duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[5px] text-[#550b14]">
            Our Collection
          </p>

          <h2 className="text-5xl font-serif mt-4">
            Interior Inspirations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {designs.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <button className="mt-5 text-[#550b14] font-semibold">
                  Explore →
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

  
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="text-center">
   
            <h3 className="mt-5 text-2xl font-semibold">
              Custom Designs
            </h3>
            <p className="mt-3 text-gray-600">
              Personalized interiors designed according to your lifestyle.
            </p>
          </div>

          <div className="text-center">
      
            <h3 className="mt-5 text-2xl font-semibold">
              Premium Quality
            </h3>
            <p className="mt-3 text-gray-600">
              High-quality materials and modern finishing.
            </p>
          </div>

          <div className="text-center">
         
            <h3 className="mt-5 text-2xl font-semibold">
              Creative Ideas
            </h3>
            <p className="mt-3 text-gray-600">
              Unique concepts that make every space memorable.
            </p>
          </div>

        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-[#550b14] via-[#6d1623] to-[#8b2434] text-white text-center">

        <h2 className="text-5xl font-serif">
          Ready To Design
          <br />
          Your Dream Space?
        </h2>

        <p className="mt-6 text-lg text-gray-200">
          Let's create interiors that reflect your personality and lifestyle.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full bg-white text-[#550b14] font-bold hover:scale-105 duration-300">
          Book Consultation
        </button>

      </section>

    </main>
  );
};

export default Explore;