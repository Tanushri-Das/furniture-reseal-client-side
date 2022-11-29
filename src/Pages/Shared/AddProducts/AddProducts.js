import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Home/BookingModal/BookingModal";
import SingleCatagory from "../../Home/SingleCategoryData/SingleCatagory";

const AddProducts = () => {
  const categoriesAllData = useLoaderData();
  console.log(categoriesAllData);

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
  } = categoriesAllData;

  const [product, setProduct] = useState(null);

  return (
    <div className="my-20">
      <h1 className="text-center">Each Category Product</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categoriesAllData?.map((data) => (
            <SingleCatagory
              key={data._id}
              data={data}
              setProduct={setProduct}
            ></SingleCatagory>
          ))}
        </div>
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default AddProducts;
