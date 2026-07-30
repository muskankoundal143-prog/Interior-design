import React from "react";

const tips = [
  {
    title: "Space Planning",
    desc: "A well-planned layout makes every room more functional and comfortable.",
  },
  {
    title: "Color Selection",
    desc: "Choose colors that create the right mood and complement your furniture.",
  },
  {
    title: "Lighting Design",
    desc: "Layer ambient, task, and accent lighting for a balanced interior.",
  },
  {
    title: "Furniture Placement",
    desc: "Arrange furniture to improve movement and create a welcoming atmosphere.",
  },
];

const Learn = () => {
  return (
    <main className="bg-[#f8f8f7]">

  
      <section className="relative h-[65vh]">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="text-white px-6">
            <p className="uppercase tracking-[6px] text-yellow-300">
              Learn Interior Design
            </p>

            <h1 className="text-5xl md:text-7xl font-serif mt-6">
              Design Smarter,
              <br />
              Live Better
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
              Learn the basics of interior design, discover expert tips,
              and get inspired to create beautiful living spaces.
            </p>
          </div>
        </div>
      </section>

    
      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#550b14] font-semibold">
            What You'll Learn
          </p>

          <h2 className="text-5xl font-serif mt-4">
            Interior Design Essentials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#550b14] text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {tip.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {tip.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

  
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#550b14]">
              Design Journey
            </p>

            <h2 className="text-5xl font-serif mt-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            {[
              "Consultation",
              "Planning",
              "Design",
              "Execution",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-[#f8f8f7] rounded-2xl p-8 text-center shadow-md"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#550b14] text-white flex items-center justify-center text-2xl font-bold">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {step}
                </h3>

                <p className="mt-3 text-gray-600">
                  Professional guidance through every stage of your project.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-center text-5xl font-serif mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-xl">
                How long does an interior project take?
              </h3>
              <p className="mt-3 text-gray-600">
                Depending on the size and scope, projects typically take
                between 4 and 12 weeks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-xl">
                Can I customize the design?
              </h3>
              <p className="mt-3 text-gray-600">
                Yes. Every project is tailored to your style, preferences,
                and budget.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-xl">
                Do you provide 3D designs?
              </h3>
              <p className="mt-3 text-gray-600">
                Yes, we provide realistic 3D visualizations before execution.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="py-20 bg-[#550b14] text-center text-white">

        <h2 className="text-5xl font-serif">
          Ready To Start Learning?
        </h2>

        <p className="mt-5 text-lg text-gray-200">
          Explore inspiring ideas and create interiors you'll love.
        </p>

        <button className="mt-8 bg-white text-[#550b14] px-10 py-4 rounded-full font-semibold hover:scale-105 duration-300">
          Explore More
        </button>

      </section>

    </main>
  );
};

export default Learn;