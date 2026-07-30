import React from "react";

const styles = [
  {
    title: "Modern Interior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    desc: "Clean lines, open spaces and elegant minimalism.",
  },
  {
    title: "Luxury Living",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    desc: "Premium finishes with timeless sophistication.",
  },
  {
    title: "Scandinavian",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    desc: "Bright interiors with natural textures and simplicity.",
  },
];

const Discover = () => {
  return (
    <main className="bg-[#f8f8f7]">

      {/* Hero */}
      <section className="relative h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0?w=1600"
          alt="Discover"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="uppercase tracking-[6px] text-yellow-300">
              Discover
            </p>

            <h1 className="text-5xl md:text-7xl font-serif mt-5">
              Find Your
              <br />
              Dream Interior
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
              Explore beautiful interiors, modern concepts and inspiring
              design ideas for every space.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-white text-[#550b14] font-semibold hover:scale-105 duration-300">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Featured Styles */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#550b14] font-semibold">
            Featured Styles
          </p>

          <h2 className="text-5xl font-serif mt-4">
            Discover Interior Styles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {styles.map((style, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-72 object-cover group-hover:scale-110 duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {style.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {style.desc}
                </p>

                <button className="mt-5 text-[#550b14] font-semibold">
                  Discover →
                </button>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Why Discover */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900"
            alt="Interior"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <p className="uppercase tracking-[5px] text-[#550b14] font-semibold">
              Why Discover With Us
            </p>

            <h2 className="text-5xl font-serif mt-4">
              Inspiring Every Corner
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              From modern apartments to luxury villas, we help you explore
              unique design concepts that match your personality and lifestyle.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Modern Design Ideas</li>
              <li>✔ Premium Material Inspiration</li>
              <li>✔ Expert Design Tips</li>
              <li>✔ Smart Space Planning</li>
            </ul>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#550b14] via-[#6d1623] to-[#8b2434] text-white text-center">

        <h2 className="text-5xl font-serif">
          Let's Create Something Beautiful
        </h2>

        <p className="mt-5 text-lg text-gray-200">
          Discover endless possibilities and bring your dream interior to life.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full bg-white text-[#550b14] font-semibold hover:scale-105 duration-300">
          Contact Us
        </button>

      </section>

    </main>
  );
};

export default Discover;