import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const SingleCatagory = ({ data, setProduct }) => {
  const {
    location,
    productresealprice,
    phone,
    email,
    productname,
    postedtime,
    sellername,
    image,
    productoriginalprice,
    purchase,
   productquality,
    description,
 years_of_use
  } = data;


  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="card w-full bg-base-100 h-[900px] shadow-xl">
        <img className="h-[300px]" src={image} alt="Shoes" />
        <div className="card-body">
          <h2 className="font-semibold">Product Name : {productname}</h2>
          <h2 className="font-semibold">Seller Name : {sellername}</h2>
          <p className="font-semibold">Location : {location}</p>
          <h2 className="font-semibold">Purchase Year : {purchase}</h2>
          <h2 className="font-semibold">Posted Time : {postedtime}</h2>
          <p className="font-semibold">Phone : {phone}</p>
          <p className="font-semibold">Year of Use : { years_of_use}</p>
          <p className="font-semibold">Product Quality : {productquality}</p>
          <p className="font-semibold">Product Details : {description}</p>
          <p className="font-semibold">Reseal price :{productresealprice}</p>
          <p className="font-semibold">Original price :{productoriginalprice}</p>
          <div className="card-actions justify-center mt-6">
            <label onChange={handleClick}
              onClick={() => setProduct(data)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
