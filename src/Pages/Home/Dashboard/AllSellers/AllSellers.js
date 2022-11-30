import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const [verify,setVerify] = useState(false);
  const { data: allseller = [] ,refetch} = useQuery({
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("https://furniture-reseal-server-side.vercel.app/allseller");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = id =>{
    console.log(id)
    const proceed = window.confirm('Are you sure , you want to delete this seller?');
    if(proceed){
        fetch(`https://furniture-reseal-server-side.vercel.app/allseller/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                toast.success("Seller deleted successfully");
                refetch();
            }
        })
    }
  }

  const handleMakeSeller = id =>{
    fetch(`https://furniture-reseal-server-side.vercel.app/buyers/Seller/${id}`,{
        method:"PUT",
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success("Seller verified successfully");
            refetch();
        }
    })
  }

  return (
    <div>
      <h3 className="text-4xl mb-7 text-red-900 font-bold text-center mt-16">All Sellers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Seller</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allseller.map((seller, i) => (
              <tr key={seller._id}>
                <th className="text-xl">{i + 1}</th>
                <td className="text-xl">{seller.name}</td>
                <td className="text-xl">{seller.email}</td>
                
                <td className="text-xl">
                  {!seller.verify ?<button
                    onClick={() => handleMakeSeller(seller._id)}
                    className="btn btn-info text-white"
                  >
                    Make Verify Seller
                  </button> : "Verified"}
                </td>
                <td className="text-xl">
                  <button onClick={()=>{handleDeleteSeller(seller._id)}}
                    className="btn btn-error text-white"
                  >
                    Delete Seller
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
