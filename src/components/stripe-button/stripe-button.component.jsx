import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HEylSJwtLW4Y2M2eqnNZ6IzA0CjObC8HeVyAdKWIGi2QeyuufhcbAAhXJ4Ljf72Ssa5uVS4XtOptSoEkyKboNUs00f3iNjPAL";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
