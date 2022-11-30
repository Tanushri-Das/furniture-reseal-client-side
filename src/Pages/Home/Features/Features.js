import React from "react";

const Features = () => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl text-amber-700 mb-8 font-semibold">Main Features</h1>
      <p className="text-lime-800 text-2xl font-semibold mb-5">Why we are different</p>
      <p className="text-blue-600 text-xl mb-12">
        Our main ambission is providing good quality product to our customer
      </p>
      <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-r from-violet-500 to-fuchsia-500 text-neutral-content">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/previews/006/405/826/non_2x/delivery-truck-with-time-flat-illustration-of-delivery-time-vector.jpg" />
              </div>
            </div>
            <h2 className="text-xl">Timely delivery</h2>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-violet-500 to-fuchsia-500 text-neutral-content">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://w7.pngwing.com/pngs/11/946/png-transparent-quality-control-computer-icons-quality-assurance-quality-miscellaneous-service-logo-thumbnail.png" />
              </div>
            </div>
            <h2 className="text-xl">Best Quality</h2>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-violet-500 to-fuchsia-500 text-neutral-content">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://www.clipartmax.com/png/middle/339-3396592_jpg-royalty-free-library-delivery-vector-transparent-delivery-boy-icon-vector.png" />
              </div>
            </div>
            <h2 className="text-xl">Free Home delivery Services</h2>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Features;
