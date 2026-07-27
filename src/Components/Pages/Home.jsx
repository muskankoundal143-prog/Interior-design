import React from "react";

const Home = () => {
  return (
    <>

     <section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

    <div>
     <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
        Transform Your Space
        <br />
        With Elegant Interior Design
      </h1>
<p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg leading-7">
        We create beautiful, functional and modern interiors
        that reflect your lifestyle and personality.
      </p>

     <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-[#550b14] text-white rounded-lg">
        Explore Designs
      </button>
    </div>


    <div>
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
        alt="Luxury Interior"
        className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
      />
    </div>

  </div>
</section>


 
<section className="bg-gray-50 py-8 md:py-10">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">



    <div className="w-full">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        alt="Interior Studio"
        className="w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-xl"
      />
    </div>



    <div className="w-full">

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Who We Are
      </h2>


      <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
        We are a passionate interior design studio creating elegant,
        functional and timeless spaces. Our team combines creativity,
        quality materials and modern designs to transform your dream
        space into reality.
      </p>


      <button 
        className="mt-6 bg-[#550b14] text-white px-6 py-3 rounded-lg hover:bg-[#3d0810] transition"
      >
        Learn More
      </button>

    </div>


  </div>
</section>

<section className="py-10 md:py-12 px-5 md:px-10 bg-white">

<div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800">
      Discover Your Perfect Property Match
    </h2>

    <p className="mt-4 text-gray-600">
      Explore our beautifully designed spaces created for modern living.
    </p>
  </div>


  <div className="grid md:grid-cols-4 gap-6">

    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
        alt="Living Room"
        className="h-64 w-full object-cover"
      />
      <h3 className="p-4 text-xl font-semibold">
        Luxury Living Room
      </h3>
    </div>


    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        alt="Bedroom"
        className="h-64 w-full object-cover"
      />
      <h3 className="p-4 text-xl font-semibold">
        Modern Bedroom
      </h3>
    </div>


    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Home Interior"
        className="h-64 w-full object-cover"
      />
      <h3 className="p-4 text-xl font-semibold">
        Premium Home Design
      </h3>
    </div>


    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
        alt="Kitchen"
        className="h-64 w-full object-cover"
      />
      <h3 className="p-4 text-xl font-semibold">
        Elegant Kitchen
      </h3>
    </div>

  </div>
<section className="py-10 md:py-10 px-5 md:px-10 bg-gray-100">

  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Our Services
    </h2>

    <p className="mt-2 text-gray-600">
      Complete interior solutions designed to make your space beautiful and functional.
    </p>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600"
        alt="Home Interior"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Home Interior Design
        </h3>

        <p className="mt-3 text-gray-600">
          Beautiful living rooms, bedrooms and complete home solutions.
        </p>
      </div>
    </div>


    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600"
        alt="Kitchen Design"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Modular Kitchen
        </h3>

        <p className="mt-3 text-gray-600">
          Smart kitchen designs with modern storage solutions.
        </p>
      </div>
    </div>


    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"
        alt="Office Interior"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Office Interior
        </h3>

        <p className="mt-3 text-gray-600">
          Professional workspaces that improve productivity.
        </p>
      </div>
    </div>

  </div>

</section>
</section>
<section className="py-6 md:py-8 px-5 md:px-10 bg-gray-50">

  <div className="text-center mb-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Our Featured Projects
    </h2>

    <p className="mt-4 text-gray-600">
      Explore some of our latest interior design creations.
    </p>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
        alt="Modern Interior"
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          Modern Apartment
        </h3>

        <p className="mt-2 text-gray-600">
          Contemporary design with luxury finishes.
        </p>
      </div>
    </div>


    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
        alt="Luxury Home"
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          Luxury Villa
        </h3>

        <p className="mt-2 text-gray-600">
          Elegant spaces designed for premium living.
        </p>
      </div>
    </div>


    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office Interior"
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          Corporate Office
        </h3>

        <p className="mt-2 text-gray-600">
          Functional workspace with modern aesthetics.
        </p>
      </div>
    </div>

  </div>

</section>
<section className="py-10 md:py-12 px-5 md:px-10 bg-white">

  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800">
      Why Choose Us
    </h2>
    <p className="mt-4 text-gray-600">
      We deliver creative designs with quality and perfection.
    </p>
  </div>


  <div className="grid md:grid-cols-4 gap-6">

    <div className="p-5 text-center shadow rounded-xl">
      <h3 className="text-2xl font-bold text-[#550b14]">10+</h3>
      <p className="mt-2 text-gray-600">Years Experience</p>
    </div>

    <div className="p-6 text-center shadow rounded-xl">
      <h3 className="text-2xl font-bold text-[#550b14]">500+</h3>
      <p className="mt-2 text-gray-600">Projects Completed</p>
    </div>

    <div className="p-6 text-center shadow rounded-xl">
      <h3 className="text-2xl font-bold text-[#550b14]">300+</h3>
      <p className="mt-2 text-gray-600">Happy Clients</p>
    </div>

    <div className="p-6 text-center shadow rounded-xl">
      <h3 className="text-2xl font-bold text-[#550b14]">24/7</h3>
      <p className="mt-2 text-gray-600">Support</p>
    </div>
</div>
</section>

<section className="py-10 md:py-12 px-5 md:px-10 bg-gray-100">
<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
  What Our Clients Say
</h2>


<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-600">
"Excellent design work. They transformed our home beautifully."
</p>

<h3 className="mt-5 font-bold">
- Rahul Sharma
</h3>
</div>


<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-600">
"Professional team with amazing creativity."
</p>

<h3 className="mt-5 font-bold">
- Priya Singh
</h3>
</div>


<div className="bg-white p-6 rounded-xl shadow">
<p className="text-gray-600">
"Our office looks premium and modern now."
</p>

<h3 className="mt-5 font-bold">
- Amit Verma
</h3>
</div>
</div>
</section>


<section className="bg-[#f8f8f7] py-16">
  <div className="max-w-6xl mx-auto px-5">

    <div className="bg-[#550b14] rounded-3xl px-6 sm:px-10 py-12 text-center shadow-xl">

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Ready To Design Your Dream Space?
      </h2>

      <p className="mt-5 text-[#cbc0b2] text-base sm:text-lg max-w-2xl mx-auto">
        Let's create a beautiful interior that reflects your personality and lifestyle.
      </p>


      <button
        className="mt-7 bg-[#f8f8f7] text-[#550b14] px-8 py-3 rounded-full font-semibold hover:bg-[#cbc0b2] transition duration-300"
      >
        Contact Us
      </button>

    </div>

  </div>
</section><footer className="bg-[#550b14] text-white">

  <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12">


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


      <div>
        <h2 className="text-3xl font-bold">
          Design
        </h2>

        <p className="mt-4 text-[#cbc0b2] leading-7">
          Creating elegant interiors where comfort meets luxury.
        </p>
      </div>



      <div>
        <h3 className="text-lg font-semibold">
          Explore
        </h3>

        <ul className="mt-4 space-y-3 text-[#cbc0b2]">

          <li className="hover:text-white transition">
            Home
          </li>

          <li className="hover:text-white transition">
            About
          </li>

          <li className="hover:text-white transition">
            Projects
          </li>

          <li className="hover:text-white transition">
            Services
          </li>

        </ul>

      </div>



      <div>
        <h3 className="text-lg font-semibold">
          Services
        </h3>

        <ul className="mt-4 space-y-3 text-[#cbc0b2]">

          <li>Home Interior</li>
          <li>Modular Kitchen</li>
          <li>Office Design</li>
          <li>Luxury Spaces</li>

        </ul>

      </div>



      <div>
        <h3 className="text-lg font-semibold">
          Contact
        </h3>

        <div className="mt-4 space-y-3 text-[#cbc0b2]">

          <p>
            info@studio.com
          </p>

          <p>
            +91 9876543210
          </p>

          <p>
            Chandigarh, India
          </p>

        </div>

      </div>


    </div>


    <div className="border-t border-[#cbc0b2]/30 mt-10 pt-6 text-center text-sm text-[#cbc0b2]">

      © 2026 Design Interior Studio. All Rights Reserved.

    </div>


  </div>

</footer>

    </>
  );
};

export default Home;
