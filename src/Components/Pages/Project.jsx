import React from "react";

const projects = [

];

export default function Project() {
  return (
    <main className="min-h-screen bg-[#111] text-white overflow-hidden">


      <section className="relative h-screen flex items-center px-8 md:px-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[8px] text-sm text-[#dbd7ab]">
            Interior Studio
          </p>

          <h1 className="text-6xl md:text-8xl font-serif mt-6 leading-tight">
            Spaces That
            <br />
            Tell Stories
          </h1>

          <p className="mt-8 text-gray-300 max-w-xl text-lg">
            We design timeless interiors where architecture, emotion,
            and lifestyle meet.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-white text-black hover:bg-[#dbd7ab] transition">
            Discover Studio
          </button>
        </div>
 </section>
</main>


  );
}