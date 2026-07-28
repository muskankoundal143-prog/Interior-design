import React from "react";

const Contact = () => {
  return (
    <>



<section className="bg-[#f8f8f7] py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">

    <div>

      <p className="text-[#550b14] font-semibold">
        START YOUR DESIGN JOURNEY
      </p>

      <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
        Let's Create A Space
        <br/>
        Worth Remembering
      </h1>


      <p className="mt-5 text-gray-600 text-lg leading-8">
        Tell us about your dream space, your style and your requirements.
        Our interior experts will help create a beautiful home or office
        designed around your lifestyle.
      </p>


      <button className="mt-8 bg-[#550b14] text-white px-8 py-3 rounded-full">
        Plan Your Design
      </button>

    </div>


    <div>
      <img
      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
      />
    </div>


  </div>
</section>





<section className="py-12 bg-white">

<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6">


<div className="p-6 rounded-2xl shadow bg-[#f8f8f7]">

<h3 className="text-xl font-bold text-[#550b14]">
Call Us
</h3>

<p className="mt-3 text-gray-600">
Speak directly with our design experts.
</p>

<p className="mt-3 font-semibold">
+91 9876513350
</p>

</div>



<div className="p-6 rounded-2xl shadow bg-[#f8f8f7]">

<h3 className="text-xl font-bold text-[#550b14]">
Email Us
</h3>

<p className="mt-3 text-gray-600">
Send your design requirements.
</p>

<p className="mt-3 font-semibold">
info@designstudio.com
</p>

</div>



<div className="p-6 rounded-2xl shadow bg-[#f8f8f7]">

<h3 className="text-xl font-bold text-[#550b14]">
Visit Studio
</h3>

<p className="mt-3 text-gray-600">
Meet our interior designers.
</p>

<p className="mt-3 font-semibold">
Chandigarh, India
</p>

</div>


</div>

</section>


<section className="bg-gray-50 py-16">

<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12">


<div>

<h2 className="text-4xl font-bold text-gray-800">
Design Your Dream Space
</h2>


<p className="mt-5 text-gray-600 leading-7">
Share your requirements with us. Whether it's a home,
office or commercial space, we will create a personalised
design solution for you.
</p>


<ul className="mt-6 space-y-3 text-gray-700">

<li>
✓ Custom interior planning
</li>

<li>
✓ Budget friendly solutions
</li>

<li>
✓ Complete project management
</li>

<li>
✓ Expert design consultation
</li>

</ul>


</div>




<div className="bg-white rounded-3xl shadow p-6 md:p-8">


<h2 className="text-2xl font-bold text-gray-800">
Get Free Consultation
</h2>


<input
className="mt-6 w-full border p-3 rounded-lg"
placeholder="Full Name"
/>


<input
className="mt-4 w-full border p-3 rounded-lg"
placeholder="Phone Number"
/>


<input
className="mt-4 w-full border p-3 rounded-lg"
placeholder="Email Address"
/>


<input
className="mt-4 w-full border p-3 rounded-lg"
placeholder="Project Type"
/>


<textarea
className="mt-4 w-full border p-3 rounded-lg h-32"
placeholder="Tell us about your project"
/>


<button className="mt-5 w-full bg-[#550b14] text-white py-3 rounded-lg">
Send Enquiry
</button>


</div>


</div>

</section>




<section className="py-16 bg-white">

<div className="max-w-6xl mx-auto px-5">


<h2 className="text-center text-4xl font-bold text-gray-800">
Why Work With Us
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