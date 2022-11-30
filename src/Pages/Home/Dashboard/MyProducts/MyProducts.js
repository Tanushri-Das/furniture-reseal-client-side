import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  const url = `https://furniture-reseal-server-side.vercel.app/product?email=${user?.email}`;
  const { data: product = [] ,refetch} = useQuery({
    queryKey: ["product", user?.email],
    queryFn: async () => {
      const res = await fetch(url,{
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
  const handleProductDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this product?');
    if(proceed){
        fetch(`https://furniture-reseal-server-side.vercel.app/product/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
              toast.success("Product deleted successfully");
              refetch();
          }
      })
    }
  }
  return (
    <div>
      <h3 className="text-4xl text-violet-600 text-center mb-12 font-bold mt-20">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Product Image</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Original Price</th>
              <th className="text-lg">Reseal Price</th>
              <th className="text-lg">Status</th>
              <th className="text-lg">Delete Product</th>
            </tr>
          </thead>
          <tbody className="mt-12">
            
            {
              product.map((products,i) =><tr key={products._id} products={products}>
                <th>{i+1}</th>
                <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 mt-5">
                <img src={products?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
                <td className="font-semibold text-sm">{products?.productname}</td>
                <td className="font-semibold text-sm">{products?.productoriginalprice}</td>
                <td className="font-semibold text-sm">{products?.productresealprice}</td>
                <td>
                  {!products?.soldstatus ? <h1 className="text-xl font-semibold">Avaiable</h1> : <h1 className="text-xl font-semibold">Sold</h1>}
                </td>
                
                <td>
                  <button onClick={()=>{handleProductDelete(products?._id)}} className="btn btn-error text-white">
                    Delete Product
                  </button>
                </td>

              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
