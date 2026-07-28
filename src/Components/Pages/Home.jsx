import React from "react";

const Home = () => {
  return (
    <>

   <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80')",
  }}
>

  <div className="absolute inset-0 bg-black/50"></div>


  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
      Transform Your Space
      <br />
      With Elegant Interior Design
    </h1>

    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
      We create beautiful, functional, and modern interiors that
      reflect your lifestyle and personality.
    </p>

    <button className="mt-8 px-8 py-4 bg-[#550b14] hover:bg-[#6d0e1a] transition rounded-lg text-lg font-medium">
      Explore Designs
    </button>
  </div>
</section>

 <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

    <div>
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
        alt="Interior Design"
        className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
      />
    </div>


    <div>

      <p className="text-[#550b14] font-semibold uppercase tracking-wider">
        Who We Are
      </p>

      <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
        Designing Spaces
        <br />
        That Feel Like Home
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-8">
        We are an interior design studio dedicated to creating
        elegant, functional, and personalized spaces. Our approach
        combines creativity, modern design, and attention to detail
        to bring your vision to life.
      </p>

      <p className="mt-4 text-gray-600 text-lg leading-8">
        From residential homes to commercial spaces, we create
        interiors that are beautiful, comfortable, and timeless.
      </p>


      <div className="flex gap-10 mt-8">

        <div>
          <h3 className="text-3xl font-bold text-[#550b14]">
            10+
          </h3>
          <p className="text-gray-600">
            Years Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#550b14]">
            200+
          </h3>
          <p className="text-gray-600">
            Projects Done
          </p>
        </div>

      </div>

      <button className="mt-8 bg-[#550b14] text-white px-7 py-3 rounded-lg hover:bg-[#3d0810] transition">
        Learn More
      </button>

    </div>

  </div>
</section>
<section className="bg-[#faf8f6] py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">


    <div className="text-center max-w-3xl mx-auto mb-14">

      <span className="text-[#550b14] uppercase tracking-[3px] font-semibold">
        Our Expertise
      </span>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
        Explore Spaces Designed
        <span className="text-[#550b14]"> Around You</span>
      </h2>

      <p className="mt-5 text-gray-600 text-lg">
        From elegant homes to modern workspaces, we create interiors
        that blend style, comfort, and functionality.
      </p>

    </div>


 
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


      
      <div className="group relative overflow-hidden rounded-3xl shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
          alt="Living Room"
          className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm text-gray-200">
            Residential
          </span>

          <h3 className="text-2xl font-bold mt-2">
            Luxury Living Room
          </h3>
        </div>

      </div>


      <div className="group relative overflow-hidden rounded-3xl shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
          alt="Bedroom"
          className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm text-gray-200">
            Bedroom Design
          </span>

          <h3 className="text-2xl font-bold mt-2">
            Modern Bedroom
          </h3>
        </div>

      </div>




      <div className="group relative overflow-hidden rounded-3xl shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Home Interior"
          className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm text-gray-200">
            Complete Makeover
          </span>

          <h3 className="text-2xl font-bold mt-2">
            Premium Home Design
          </h3>
        </div>

      </div>


      <div className="group relative overflow-hidden rounded-3xl shadow-lg">

        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80"
          alt="Kitchen"
          className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm text-gray-200">
            Modular Kitchen
          </span>

          <h3 className="text-2xl font-bold mt-2">
            Elegant Kitchen
          </h3>
        </div>

      </div>


    </div>






  </div>
</section>

<section className="py-10 md:py-12 px-5 md:px-10 bg-white">

  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800">
      Why Choose <span className="text-[#550b14] ">Us</span>
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
    What <span className="text-[#550b14]">Our Clients</span> Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white p-6 rounded-xl shadow text-center">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Rahul Sharma"
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <p className="text-gray-600">
        "Excellent design work. They transformed our home beautifully."
      </p>

      <h3 className="mt-5 font-bold text-gray-800">
        - Rahul Sharma
      </h3>
    </div>


    <div className="bg-white p-6 rounded-xl shadow text-center">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Priya Singh"
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <p className="text-gray-600">
        "Professional team with amazing creativity."
      </p>

      <h3 className="mt-5 font-bold text-gray-800">
        - Priya Singh
      </h3>
    </div>


    <div className="bg-white p-6 rounded-xl shadow text-center">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Amit Verma"
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />

      <p className="text-gray-600">
        "Our office looks premium and modern now."
      </p>

      <h3 className="mt-5 font-bold text-gray-800">
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
            +91 9876452130
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
