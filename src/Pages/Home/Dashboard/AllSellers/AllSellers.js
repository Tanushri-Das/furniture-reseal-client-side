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
      <h3 className="text-4xl mb-7 text-red-900 font-bold text-center">All Sellers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Seller</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allseller.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                
                <td>
                  {!seller.verify ?<button
                    onClick={() => handleMakeSeller(seller._id)}
                    className="btn btn-info text-white"
                  >
                    Make Verify Seller
                  </button> : "Verified"}
                </td>
                <td>
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
