// import { useQuery } from "@tanstack/react-query";
// import { data } from "autoprefixer";
// import React from "react";

// const AllBuyers = () => {
//   const { data: buyers = [] } = useQuery({
//     queryKey: ["buyers"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:5000/buyers");
//       const data = await res.json();
//       return data;
//     },
//   });

//   const handleMakeAdmin = id =>{
//     fetch(`http://localhost:5000/buyers/admin/${id}`,{
//         method:"PUT",
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//   }

//   return (
//     <div>
//       <h3 className="text-3xl mb-7">All Buyers</h3>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Admin</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buyers.map((buyer, i) => (
//               <tr key={buyer._id}>
//                 <th>{i + 1}</th>
//                 <td>{buyer?.name}</td>
//                 <td>{buyer?.email}</td>
//                 <td>
//                   <button
//                     onClick={() => handleMakeAdmin(buyer._id)}
//                     className="btn btn-info text-white"
//                   >
//                     Make Admin
//                   </button>
//                 </td>
//                 <td>
//                   <button className="btn btn-error text-white">
//                     Delete User
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllBuyers;


import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: allbuyer = [] ,refetch} = useQuery({
    queryKey: ["allbuyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allbuyer");
      const data = await res.json();
      return data;
    },
  });
// {acknowledged: true, deletedCount: 1}
  

  const handleBuyerDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete this user?');
    if(proceed){
        fetch(`http://localhost:5000/allbuyer/${id}`,{
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
      <h3 className="text-4xl mb-7 text-violet-600 text-center font-bold">All Buyers</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Admin</th> */}
             
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allbuyer.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                
                {/* <td>
                  {buyer?.role !=='admin' && <button
                    onClick={() => handleMakeAdmin(buyer._id)}
                    className="btn btn-info text-white"
                  >
                    Make Seller
                  </button>}
                </td> */}
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
