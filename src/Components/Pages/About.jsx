import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
        alt="Modern Interior"
        className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
      />

   
      <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-8 py-6">
        <h3 className="text-4xl font-bold text-[#550b14]">10+</h3>
        <p className="text-gray-600 mt-1">
          Years of <br /> Experience
        </p>
      </div>
    </div>


    <div>
      <span className="inline-block bg-[#550b14]/10 text-[#550b14] font-semibold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
        About Our Studio
      </span>

      <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Crafting Beautiful
        <br />
        Interiors That Feel
        <span className="text-[#550b14]"> Like Home.</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        We believe every space should reflect your personality and
        lifestyle. Our experienced designers create elegant,
        functional, and timeless interiors by blending creativity,
        premium materials, and attention to every detail.
      </p>


      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#550b14]/10 flex items-center justify-center text-[#550b14] text-xl">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Modern Design
            </h4>
            <p className="text-sm text-gray-500">
              Stylish & functional spaces.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#550b14]/10 flex items-center justify-center text-[#550b14] text-xl">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Premium Quality
            </h4>
            <p className="text-sm text-gray-500">
              Finest materials & finishes.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#550b14]/10 flex items-center justify-center text-[#550b14] text-xl">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              Personalized Style
            </h4>
            <p className="text-sm text-gray-500">
              Tailored to your vision.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#550b14]/10 flex items-center justify-center text-[#550b14] text-xl">
            ✓
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">
              On-Time Delivery
            </h4>
            <p className="text-sm text-gray-500">
              Reliable project completion.
            </p>
          </div>
        </div>
      </div>

      <button className="mt-10 bg-[#550b14] hover:bg-[#6a0d19] transition text-white px-8 py-4 rounded-xl font-medium shadow-lg">
        Discover More
      </button>
    </div>

  </div>
</section>
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">
      <span className="text-[#550b14] uppercase tracking-[3px] font-semibold">
        How It Works
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
        Interior Design Services
        <span className="text-[#550b14]"> For Every Space</span>
      </h2>

      <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
        Our simple five-step process makes designing your dream home
        easy, collaborative, and enjoyable from start to finish.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <img
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80"
        alt="Tell us your needs"
        className="rounded-3xl shadow-xl h-[420px] w-full object-cover"
      />

      <div>
        <span className="text-[#550b14] text-5xl font-bold">01</span>

        <h3 className="text-3xl font-bold mt-4">
          Tell Us Your Vision
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          Share your ideas, preferred style, room photos, and
          inspiration. We'll understand your goals and create a
          personalized design plan tailored to your space.
        </p>
      </div>
    </div>


    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1">
        <span className="text-[#550b14] text-5xl font-bold">02</span>

        <h3 className="text-3xl font-bold mt-4">
          Receive Custom Design Concepts
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          Our designers prepare creative layouts, mood boards,
          furniture suggestions, and color palettes based on your
          preferences.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
        alt="Design Concepts"
        className="rounded-3xl shadow-xl h-[420px] w-full object-cover order-1 lg:order-2"
      />
    </div>


    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <img
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80"
        alt="3D Design"
        className="rounded-3xl shadow-xl h-[420px] w-full object-cover"
      />

      <div>
        <span className="text-[#550b14] text-5xl font-bold">03</span>

        <h3 className="text-3xl font-bold mt-4">
          Collaborate With Your Designer
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          Review realistic 3D renders, floor plans, color palettes,
          and furniture selections. We'll refine every detail until
          your dream design is perfect.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-gray-50 p-4 rounded-xl">
               ✓ 3D Visualizations
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
             ✓ Floor Plans
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
                ✓ Color Palette
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
               ✓ Shopping List
          </div>

        </div>
      </div>
    </div>


    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 lg:order-1">
        <span className="text-[#550b14] text-5xl font-bold">04</span>

        <h3 className="text-3xl font-bold mt-4">
          Order With Confidence
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          Receive a curated shopping list with recommended furniture,
          décor, and finishes. Purchase at your own pace with complete
          flexibility.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
        alt="Shopping"
        className="rounded-3xl shadow-xl h-[420px] w-full object-cover order-1 lg:order-2"
      />
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
        alt="Dream Home"
        className="rounded-3xl shadow-xl h-[420px] w-full object-cover"
      />

      <div>
        <span className="text-[#550b14] text-5xl font-bold">05</span>

        <h3 className="text-3xl font-bold mt-4">
          Enjoy Your Dream Space
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          Sit back and enjoy a beautifully designed interior created
          just for you. Every detail is carefully planned to match
          your lifestyle and personality.
        </p>

        <button className="mt-8 bg-[#550b14] text-white px-8 py-4 rounded-xl hover:bg-[#3d0810] transition">
          Start Your Project
        </button>
      </div>
    </div>

  </div>
</section>

<section className="bg-[#faf8f6] py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
        alt="Interior Design"
        className="rounded-3xl w-full h-[600px] object-cover shadow-2xl"
      />


      <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-8 py-6">
        <h3 className="text-4xl font-bold text-[#550b14]">12+</h3>
        <p className="text-gray-600 mt-1">
          Years of Design <br /> Excellence
        </p>
      </div>
    </div>


    <div>

      <span className="uppercase tracking-[4px] text-[#550b14] font-semibold">
        Our Story
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        Creating Spaces That
        <span className="text-[#550b14]"> Feel Like Home.</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Every beautiful space begins with a vision. We combine
        creativity, functionality, and timeless design to craft
        interiors that perfectly reflect your personality and lifestyle.
      </p>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        From luxurious residences to modern commercial environments,
        every project is carefully planned and thoughtfully executed,
        ensuring every detail contributes to an exceptional experience.
      </p>


      <div className="grid grid-cols-3 gap-6 mt-10 border-t pt-8">

        <div>
          <h3 className="text-3xl font-bold text-[#550b14]">250+</h3>
          <p className="text-gray-600 mt-1">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#550b14]">98%</h3>
          <p className="text-gray-600 mt-1">Happy Clients</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#550b14]">15+</h3>
          <p className="text-gray-600 mt-1">Design Awards</p>
        </div>

      </div>

      <button className="mt-10 bg-[#550b14] hover:bg-[#3d0810] text-white px-8 py-4 rounded-xl transition">
        Discover More
      </button>

    </div>

  </div>
</section>



<section className="py-16 bg-[#550b14] text-white">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

<div>
<h2 className="text-4xl font-bold">10+</h2>
<p className="mt-2">Years Experience</p>
</div>

<div>
<h2 className="text-4xl font-bold">500+</h2>
<p className="mt-2">Projects Done</p>
</div>

<div>
<h2 className="text-4xl font-bold">350+</h2>
<p className="mt-2">Happy Clients</p>
</div>

<div>
<h2 className="text-4xl font-bold">50+</h2>
<p className="mt-2">Design Awards</p>
</div>

</div>

</section>
<section className="py-20 px-5 md:px-10 bg-gray-50">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
Our Design Process
</h2>


<div className="grid md:grid-cols-4 gap-8">


<div className="bg-white p-6 rounded-xl shadow text-center">
<h3 className="text-xl font-bold text-[#550b14]">
01
</h3>
<h4 className="font-semibold mt-3">
Consultation
</h4>
<p className="text-gray-600 mt-2">
Understanding your ideas and requirements.
</p>
</div>


<div className="bg-white p-6 rounded-xl shadow text-center">
<h3 className="text-xl font-bold text-[#550b14]">
02
</h3>
<h4 className="font-semibold mt-3">
Planning
</h4>
<p className="text-gray-600 mt-2">
Creating layouts and design concepts.
</p>
</div>


<div className="bg-white p-6 rounded-xl shadow text-center">
<h3 className="text-xl font-bold text-[#550b14]">
03
</h3>
<h4 className="font-semibold mt-3">
Execution
</h4>
<p className="text-gray-600 mt-2">
Building your dream space professionally.
</p>
</div>


<div className="bg-white p-6 rounded-xl shadow text-center">
<h3 className="text-xl font-bold text-[#550b14]">
04
</h3>
<h4 className="font-semibold mt-3">
Final Touch
</h4>
<p className="text-gray-600 mt-2">
Delivering a perfect finished interior.
</p>
</div>


</div>

</section>
<section className="py-20 px-10 bg-white">

<h2 className="text-4xl font-bold text-center mb-12">
Meet Our Designers
</h2>


<div className="grid md:grid-cols-3 gap-8">

<div className="text-center">
<img 
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
className="w-40 h-40 rounded-full mx-auto object-cover"
/>
<h3 className="mt-4 text-xl font-bold">
Arjun Sharma
</h3>
<p className="text-gray-600">
Lead Interior Designer
</p>
</div>


<div className="text-center">
<img 
src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
className="w-40 h-40 rounded-full mx-auto object-cover"
/>
<h3 className="mt-4 text-xl font-bold">
Neha Kapoor
</h3>
<p className="text-gray-600">
Creative Designer
</p>
</div>


<div className="text-center">
<img 
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
className="w-40 h-40 rounded-full mx-auto object-cover"
/>
<h3 className="mt-4 text-xl font-bold">
Rahul Verma
</h3>
<p className="text-gray-600">
Project Manager
</p>
</div>

</div>

</section>

<section className="py-20 bg-[#550b14] text-white text-center px-5">

<h2 className="text-4xl font-bold">
Ready To Transform Your Space?
</h2>

<p className="mt-4 text-lg">
Let's create a beautiful interior that matches your lifestyle.
</p>


<button className="mt-8 bg-white text-[#550b14] px-8 py-3 rounded-lg font-semibold">
Start Your Project
</button>



</section>

    </>
  );
};

export default About;
