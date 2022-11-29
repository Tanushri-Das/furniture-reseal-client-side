import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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

  return (
    <div>
      <h3 className="text-4xl text-orange-600 font-bold text-center mb-7">My Orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Booking No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking,i) => (
              <tr key={booking?._id}>
                <th>{i+1}</th>
                <td>
                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                </td>
                <td>
                  {booking?.productname}
                  <br />
                </td>
                <td>
                {booking?.price}
                  <br />
                </td>

                <th>
                  {booking?.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-accent text-white">PAY</button></Link>}
                  {booking?.price && booking.paid && <span className="text-fuchsia-600">PAID</span>}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
