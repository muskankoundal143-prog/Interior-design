import React from "react";

const Services = () => {

const services = [
{
image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
title:"Home Interior Design",
desc:"Complete home transformation with elegant living rooms, bedrooms and personalised designs."
},

{
image:"https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800",
title:"Modular Kitchen",
desc:"Modern kitchen designs with smart storage, premium finishes and functional layouts."
},

{
image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
title:"Office Interior",
desc:"Creative workspaces designed to improve productivity and brand identity."
},

{
image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
title:"Luxury Interior",
desc:"Premium interiors with sophisticated designs and high quality materials."
},

{
image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
title:"Living Room Design",
desc:"Beautiful living spaces combining comfort, style and modern aesthetics."
},

{
image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
title:"Bedroom Design",
desc:"Relaxing bedroom interiors designed according to your lifestyle."
}

];


return(
<>




<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative">

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
        alt="Interior Design"
        className="w-full h-[600px] object-cover rounded-3xl"
      />

      {/* Content Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-xl md:absolute md:right-10 md:bottom-10 mt-6 md:mt-0">

        <span className="uppercase tracking-[4px] text-[#550b14] font-semibold">
          Our Services
        </span>

        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mt-4 leading-tight">
          Designing Spaces
          <br />
          That Inspire
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          From luxury homes to commercial interiors, we create elegant,
          functional spaces tailored to your lifestyle and vision.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-[#550b14] text-white hover:bg-[#6b101b] transition">
          Explore Services
        </button>

      </div>

    </div>

  </div>
</section>







<section className="py-12 md:py-16 bg-white">


<div className="max-w-7xl mx-auto px-5 md:px-10">


<div className="text-center mb-10">

<h2 className="text-4xl font-bold text-gray-800">
Our Interior Services
</h2>

<p className="mt-4 text-gray-600">
Complete design solutions for every type of space.
</p>

</div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


{
services.map((service,index)=>(

<div
key={index}
className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
>


<img
src={service.image}
className="w-full h-56 object-cover"
/>


<div className="p-6">

<h3 className="text-xl font-bold text-gray-800">
{service.title}
</h3>


<p className="mt-3 text-gray-600">
{service.desc}
</p>


<button className="mt-5 text-[#550b14] font-semibold">
View Details →
</button>


</div>


</div>


))
}



</div>


</div>

</section>








<section className="bg-gray-50 py-16">


<div className="max-w-6xl mx-auto px-5">


<h2 className="text-center text-4xl font-bold text-gray-800">
Our Design Process
</h2>



<div className="grid md:grid-cols-4 gap-6 mt-10">


<div className="bg-white p-6 rounded-xl shadow text-center">

<h3 className="text-3xl font-bold text-[#550b14]">
01
</h3>

<h4 className="font-semibold mt-3">
Consultation
</h4>

<p className="mt-2 text-gray-600">
Understand your needs and style.
</p>

</div>



<div className="bg-white p-6 rounded-xl shadow text-center">

<h3 className="text-3xl font-bold text-[#550b14]">
02
</h3>

<h4 className="font-semibold mt-3">
Planning
</h4>

<p className="mt-2 text-gray-600">
Create layouts and design concepts.
</p>

</div>



<div className="bg-white p-6 rounded-xl shadow text-center">

<h3 className="text-3xl font-bold text-[#550b14]">
03
</h3>

<h4 className="font-semibold mt-3">
Execution
</h4>

<p className="mt-2 text-gray-600">
Bring designs into reality.
</p>

</div>



<div className="bg-white p-6 rounded-xl shadow text-center">

<h3 className="text-3xl font-bold text-[#550b14]">
04
</h3>

<h4 className="font-semibold mt-3">
Final Touch
</h4>

<p className="mt-2 text-gray-600">
Deliver your dream space.
</p>

</div>


</div>


</div>


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



</>

)

}


export default Services;