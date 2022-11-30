

import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="hero h-[1200px] lg:h-[800px] bg-slate-500 mt-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
     <img className="w-96" src="https://media.istockphoto.com/id/1252414324/photo/green-sofa-on-white-background-with-a-plaid-and-pillow-3d-rendering.jpg?s=612x612&w=0&k=20&c=dOofzh_3PWjGLljiwPOXnXxpi4oENQTsOOuVgnsHBWc=" />
     </div>
     <div className='w-3/4'>
      <h1 className="text-4xl font-bold text-white">Home <span className='text-fuchsia-500'>Decore</span></h1>
       <p className="py-6 text-white text-xl">Ashley homestore is an online marketplace for all kinds of furnitures. Whether hunting for the perfact piece, or creating space for something new, ashley homestore make it easy to make a better choice for you.</p>
       <button className="btn btn-warning btn-lg text-white text-xl">More info</button>
       <div className='flex items-center mt-8'>
          <img className='w-12' src="https://png.pngtree.com/png-clipart/20201113/ourmid/pngtree-phone-icon-with-square-black-frame-png-image_5578524.png" alt="" />
          <h1 className="text-xl text-white ml-3">+8801646-471948</h1>
       </div>
       <div className='flex items-center mt-8'>
          <img className='w-12' src="https://png.pngitem.com/pimgs/s/146-1466755_nearby-transparent-background-address-icon-hd-png-download.png" alt="" />
          <h1 className="text-xl text-white ml-3">Bondor Bazar , Sylhet, Bangladesh</h1>
       </div>
     </div>
  </div>
</div>
  )
}

export default Slider