
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({product,setProduct}) => {
    const {productresealprice,productname,image,_id} = product;
    
    const {user} = useContext(AuthContext);
    let [changeText, setChangeText] = useState(true);
    const handleChange = () => {
      return setChangeText(!changeText);
    };
   
    const handleBooking = e =>{
        e.preventDefault();
        const form = e.target;
        const productname = form.productname.value;
        const productImg = form.productImg.value;
        const username = form.username.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        

        const booking = {
            productname,productImg,username,email,price,phone,location,productId:_id
        }
        console.log(productImg)

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setProduct(null);
                toast.success('Order is confirmed');
                
            }
           
        })
    }
    
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-5">
            <img name="productImg" src={image} alt="" />
          <input type="text" name="productname" disabled defaultValue={productname} className="text-xl font-semibold input input-bordered input-md w-full" />
          <input name="username" type="text" disabled defaultValue={user?.displayName} className="input input-bordered input-md w-full" />
          <input name="email" type="text" disabled defaultValue={user?.email} className="input input-bordered input-md w-full" />
          <input name="price" type="text" disabled defaultValue={productresealprice} className="input input-bordered input-md w-full" />
          <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-md w-full" required/>
          <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered input-md w-full" required/>
          <input type="submit" className="btn btn-success w-full" value="SUBMIT" />
          <div>

     
    </div>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default BookingModal;
