


import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: allbuyer = [] ,refetch} = useQuery({
    queryKey: ["allbuyer"],
    queryFn: async () => {
      const res = await fetch("https://furniture-reseal-server-side.vercel.app/allbuyer");
      const data = await res.json();
      return data;
    },
  });
  

  const handleBuyerDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this user?');
    if(proceed){
        fetch(`https://furniture-reseal-server-side.vercel.app/allbuyer/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
              toast.success("Buyer deleted successfully");
              refetch();
          }
      })
    }
  }
  return (
    <div>
      <h3 className="text-4xl mb-7 text-violet-600 text-center font-bold mt-16">All Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allbuyer.map((buyer, i) => (
              <tr key={buyer._id}>
                <th className="text-xl">{i + 1}</th>
                <td className="text-xl">{buyer?.name}</td>
                <td className="text-xl">{buyer?.email}</td>
                
                <td>
                  <button onClick={()=>{handleBuyerDelete(buyer._id)}} className="btn btn-error text-white">
                    Delete User
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

export default AllBuyers;
