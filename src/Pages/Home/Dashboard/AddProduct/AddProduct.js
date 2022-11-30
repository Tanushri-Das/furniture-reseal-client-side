import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Loading/Loading";
import "./AddProduct.css";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
console.log(user)
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoriesname");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            
            category_id:data.category_id,
            productname: data.productname,
            productoriginalprice: data.productoriginalprice,
            productresealprice: data.productresealprice,
            sellername: data.sellername,
            email:data.email,
            productquality:data.productquality,
            phone: data.phone,
            postedtime:data.postedtime,
            location: data.location,
            category: data.category,
            description: data.description,
            purchase: data.purchase,
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.productname} is added successfully`);
              navigate("/dashboard/myproducts");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full p-7 mb-12">
      <h3 className="text-4xl text-center mb-6 text-indigo-500 font-semibold">
        Add a Product
      </h3>
      <div
        className=" p-7"
        style={{
          "box-shadow": " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
          "border-radius": "18px",
        }}
      >
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Product ID</span>
              </label>
              <select
                {...register("category_id",{
                  required: "category id is required",
                })}
                className="select select-bordered w-full max-w-sm"
              >
                <option selected>01</option>
                <option>02</option>
                <option>03</option>
                {errors.category_id && (
                <p className="text-error">{errors.category_id?.message}</p>
              )}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Product Name</span>
              </label>
              <input
                type="text"
                {...register("productname", {
                  required: "Product Name is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.productname && (
                <p className="text-error">{errors.productname?.message}</p>
              )}
            </div>
            
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Original Price</span>
              </label>
              <input
                type="text"
                {...register("productoriginalprice", {
                  required: "Product Price is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.productoriginalprice && (
                <p className="text-error">{errors.productoriginalprice?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Reseal Price</span>
              </label>
              <input
                type="text"
                {...register("productresealprice", {
                  required: "Product Price is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.productresealprice && (
                <p className="text-error">{errors.productresealprice?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Seller Name</span>
              </label>
              <input
                type="text" readOnly
                {...register("sellername",{ value: user?.displayName }, {
                  required: "Product Name is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.sellername && (
                <p className="text-error">{errors.sellername?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text" readOnly
                {...register("email",{ value: user?.email }, {
                  required: "Email is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Product Quality</span>
              </label>
              <select
                {...register("productquality",{
                  required: "Product Quality is required",
                })}
                className="select select-bordered w-full max-w-sm"
              >
                
                <option selected>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                {errors.productquality && (
                <p className="text-error">{errors.productquality?.message}</p>
              )}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Posted Time</span>
              </label>
              <input
                type="text"
                {...register("postedtime", {
                  required: "Posted Time is required",
                })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.postedtime && (
                <p className="text-error">{errors.postedtime?.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Mobile Number</span>
              </label>
              <input
                type="number"
                {...register("phone", { required: "phone number is required" })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.phone && (
                <p className="text-error">{errors.phone?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Location</span>
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.location && (
                <p className="text-error">{errors.location?.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Product Category</span>
              </label>
              <select
                {...register("category",{required:"catgory is required"})}
                className="select select-bordered w-full max-w-sm"
              >
                {categories?.map((category) => (
                  <option key={category._id} value={category.category_name}>
                    {category.category_name}
                  </option>
                ))}
                {errors.category && (
                <p className="text-error">{errors.category?.message}</p>
              )}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Year of Purchase</span>
              </label>
              <input
                value={new Date().getFullYear()}
                {...register("purchase", { required: "Purchase is required" })}
                className="input input-bordered w-full max-w-sm"
              />
              {errors.purchase && (
                <p className="text-error">{errors.purchase?.message}</p>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            {/* <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              className="input input-bordered w-full max-w-xs"
            /> */}
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-4/5 h-40 textarea textarea-bordered resize-none"
              placeholder="Product Description"
            ></textarea>
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-primary w-full mt-5"
            value="Add A product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
