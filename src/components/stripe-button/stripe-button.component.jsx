import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gr4OBKbDnrVWt1qJtxVMoFJQkNjoQGdNn9V22etY4qV3LGfsEzTm9npcuotCqtPnTg3bWopk7DgKmLZuRqLCp0J00XZVUZxlW';

    const onToken = token => {
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Royalty Clothings Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;