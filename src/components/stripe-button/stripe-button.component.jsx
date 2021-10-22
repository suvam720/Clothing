import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jn13nSAqB4Hc9MXvQ4Qpue9wAnC5NhCJK81P0C0ZyQPAlOBuUHydV8xNfQ5CBEydFyCXm63CmF7eIMv4rrOuOJx00TRzo5jLk';

 const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
}
    return(
        <StripeCheckout

         label = 'Pay Now'
         name = 'CLOTHING Ltd.'
         billingAddress
         shippingAddress
         image = 'https://svgshare.com/i/CUz.svg'
         description={`Your total is ₹${price}`}
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}   
         stripeKey ={publishableKey}
         currency = 'INR'
        />
    );
};
 

export default StripeCheckoutButton;