import React from "react";

const Contact = () => {
  return (
    <>




<section className="relative">
  <img
    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600"
    alt="Interior"
    className="w-full h-[500px] object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="absolute inset-0 flex items-center justify-center px-6">
    <div className="text-center text-white max-w-3xl">
      <p className="uppercase tracking-[5px] text-[#dbd7ab]">
        Start Your Design Journey
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mt-5">
        Let's Build Your
        <br />
        Dream Interior
      </h2>

      <p className="mt-6 text-lg text-gray-200">
        Elegant, functional, and timeless interiors designed around
        your lifestyle.
      </p>

      <button className="mt-8 px-8 py-3 rounded-full bg-[#550b14] hover:bg-[#6b101b] transition">
        Book Free Consultation
      </button>
    </div>
  </div>
</section>


<section className="-mt-16 relative z-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
   

        <h3 className="mt-5 text-xl font-semibold">
          Call Us
        </h3>

        <p className="mt-3 text-gray-500">
          Speak with our experts.
        </p>

        <p className="mt-4 font-semibold text-[#550b14]">
          +91 98765 13350
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
     

        <h3 className="mt-5 text-xl font-semibold">
          Email
        </h3>

        <p className="mt-3 text-gray-500">
          Send your project details.
        </p>

        <p className="mt-4 font-semibold text-[#550b14]">
          info@designstudio.com
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
      

        <h3 className="mt-5 text-xl font-semibold">
          Visit Studio
        </h3>

        <p className="mt-3 text-gray-500">
          Chandigarh, India
        </p>

        <p className="mt-4 font-semibold text-[#550b14]">
          Mon – Sat
        </p>
      </div>

    </div>
  </div>
</section>


<section className="py-24 bg-[#f8f8f7]">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <span className="uppercase tracking-[4px] text-[#550b14] font-semibold">
        Free Consultation
      </span>

      <h2 className="mt-4 text-5xl font-serif text-gray-800">
        Tell Us About
        <br />
        Your Project
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        Whether you're building a new home or renovating an existing
        space, our designers are ready to create a space that reflects
        your style and needs.
      </p>

      <div className="mt-8 space-y-4">
        <div> ✓ Personalized Design Planning</div>
        <div> ✓ Premium Material Selection</div>
        <div> ✓ End-to-End Project Execution</div>
        <div> ✓ Transparent Pricing</div>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <input
        className="w-full border rounded-xl p-4 mb-4"
        placeholder="Full Name"
      />

      <input
        className="w-full border rounded-xl p-4 mb-4"
        placeholder="Phone Number"
      />

      <input
        className="w-full border rounded-xl p-4 mb-4"
        placeholder="Email Address"
      />

      <textarea
        className="w-full border rounded-xl p-4 h-36"
        placeholder="Tell us about your project..."
      />

      <button className="w-full mt-6 bg-[#550b14] text-white py-4 rounded-xl hover:bg-[#6b101b] transition">
        Send Enquiry
      </button>
    </div>

  </div>
</section>

<section className="py-16 bg-white">

<div className="max-w-6xl mx-auto px-5">


<h2 className="text-center text-4xl font-bold text-gray-800">
Why Work <span className="text-[#550b14]">With </span> Us
</h2>


<div className="grid md:grid-cols-3 gap-8 mt-10">


<div className="text-center p-6">
<h3 className="text-xl font-bold text-[#550b14]">
Personalised Designs
</h3>

<p className="mt-3 text-gray-600">
Every space is designed according to your lifestyle.
</p>

</div>



<div className="text-center p-6">
<h3 className="text-xl font-bold text-[#550b14]">
Quality Materials
</h3>

<p className="mt-3 text-gray-600">
Premium finishing with trusted materials.
</p>

</div>



<div className="text-center p-6">
<h3 className="text-xl font-bold text-[#550b14]">
Complete Support
</h3>

<p className="mt-3 text-gray-600">
From planning to final execution.
</p>

</div>


</div>

</div>

</section>

<section className="py-10 bg-[#f8f8f7]">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center">
      <p className="uppercase tracking-[5px] text-[#550b14] font-semibold">
        Need To Know
      </p>

      <h2 className="mt-4 text-5xl font-serif text-gray-800">
        Frequently Asked Questions
      </h2>
    </div>


    <div className="mt-12 space-y-5">


      <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
        <summary className="list-none flex justify-between items-center text-xl font-semibold text-gray-800">
          Can you design a home according to my lifestyle?
          <span className="text-[#550b14] group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          Yes, we understand your needs, preferences and daily routine
          to create a personalized interior design.
        </p>
      </details>



      <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
        <summary className="list-none flex justify-between items-center text-xl font-semibold text-gray-800">
          Can you make small spaces look luxurious?
          <span className="text-[#550b14] group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          We use smart layouts, lighting and furniture planning to make
          compact spaces beautiful and functional.
        </p>
      </details>



      <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
        <summary className="list-none flex justify-between items-center text-xl font-semibold text-gray-800">
          Do you provide complete project execution?
          <span className="text-[#550b14] group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          Yes, we manage everything from planning and material selection
          to final installation.
        </p>
      </details>



      <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
        <summary className="list-none flex justify-between items-center text-xl font-semibold text-gray-800">
          Can you design within my budget?
          <span className="text-[#550b14] group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600 leading-7">
          We suggest suitable designs and materials according to your
          budget while maintaining quality and style.
        </p>
      </details>


    </div>

  </div>

</section>


<section className="bg-[#550b14] py-16 text-center text-white">

<h2 className="text-4xl font-bold">
Not Sure Where To Start?
</h2>


<p className="mt-4 text-[#cbc0b2] text-lg">
Share your idea and we will suggest the perfect design solution.
</p>


<button className="mt-7 bg-[#f8f8f7] text-[#550b14] px-8 py-3 rounded-full font-semibold">
Contact Designer
</button>


</section>



</>
  );
};


export default Contact;