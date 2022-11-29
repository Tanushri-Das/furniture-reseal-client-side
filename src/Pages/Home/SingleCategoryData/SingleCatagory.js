import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const SingleCatagory = ({ data, setProduct }) => {
  const {
    location,
    productresealprice,
    phone,
    productname,
    posted_time,
    sellername,
    image,
    productoriginalprice,
    purchase,
    description,
  } = data;

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <img className="h-[300px]" src={image} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">Product Name : {productname}</h2>
          <h2 className="card-title">Seller Name : {sellername}</h2>
          <p>Location : {location}</p>
          <h2 className="card-text">Purchase Year : {purchase}</h2>
          <h2 className="card-text">Posted Time : {posted_time}</h2>
          <p>Phone : {phone}</p>
          <p>Product Details : {description}</p>
          <p>Reseal price :{productresealprice}</p>
          <p>Original price :{productoriginalprice}</p>
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
