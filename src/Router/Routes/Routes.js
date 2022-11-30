import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "../../Contexts/PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import CategoryDetails from "../../Pages/Home/CategoryDetails/CategoryDetails";
import AllBuyers from "../../Pages/Home/Dashboard/AllBuyers/AllBuyers";

import MyOrder from "../../Pages/Home/Dashboard/MyOrder/MyOrder";
import Payment from "../../Pages/Home/Dashboard/Payment/Payment";
import Sellers from "../../Pages/Home/Dashboard/AddProduct/AddProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login/Login'
import SignUp from "../../Pages/Login/SignUp/SignUp";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../../Pages/Home/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Home/Dashboard/MyProducts/MyProducts";
import SellerRoute from "../SellerRoute/SellerRoute";
import AllSellers from "../../Pages/Home/Dashboard/AllSellers/AllSellers";
import AllProducts from '../../Pages/Shared/AllProducts/AllProducts'

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/category/:category_id',
                element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader:({params})=>fetch(`https://furniture-reseal-server-side.vercel.app/category/${params.category_id}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/myorders',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/buyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            // se
            {
                path:'/dashboard/addaproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://furniture-reseal-server-side.vercel.app/bookings/${params.id}`)
               
            }
        ]
    }
])
export default router;