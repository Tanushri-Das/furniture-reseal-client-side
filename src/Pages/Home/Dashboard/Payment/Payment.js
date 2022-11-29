import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51M6DapDxINWxD62RCeOKdBqtU237MXrCZS04917JujyAuQX7N3bOAQHv5RqFN2DX109ZzqpsN0uY1zlkxxrYW49z00SEjA91sY');
console.log(stripePromise)

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  if(navigation.state === "loading"){
    return <Loading></Loading>
  }

  console.log("book", booking);
  return (
    <div>
      <h3 className="text-3xl">Payment for {booking.productname}</h3>
      <p className="text-xl">Please pay {booking.price}</p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
