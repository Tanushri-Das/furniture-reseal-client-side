import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {!isAdmin && !isSeller && <li className="mt-12 text-xl text-orange-600 font-semibold">
              <Link to='/dashboard/myorders'>My Order</Link>
            </li>
            }
           {
              isAdmin && <> 
              <li className="mt-[50px] text-xl text-violet-600 font-semibold"><Link to='/dashboard/buyers'>All Buyers</Link></li>
              <li className="text-xl text-red-900 font-semibold"><Link to='/dashboard/allsellers'>All Sellers</Link></li>
              </>
           }
           {/* se */}

           {
              isSeller && <>
              <li className="text-xl text-center mt-[50px] text-indigo-500 font-semibold"><Link to='/dashboard/addaproduct'>Add a Product</Link></li>
              <li className="text-xl text-violet-600 font-semibold"><Link to='/dashboard/myproducts'>My Products</Link></li>
              </>
           }
           
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
