import React from 'react';

function ShippingPolicy() {
  return (
    <div className="max-w-full mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg border border-gray">
      <h2 className="text-7xl font-bold text-gray-800 mb-4">Shipping Policy</h2>
      <p className="text-gray-700 mb-4">
        For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only. 
        Orders are shipped within <strong>8 (minimum) - 14 (maximum)</strong> days or as per the delivery date agreed at the time of order confirmation 
        and delivering of the shipment subject to Courier Company/post office norms. 
        ANIME CANVAS is not liable for any delay in delivery by the courier company/postal authorities and only guarantees to hand over 
        the consignment to the courier company or postal authorities within <strong>8+ days</strong> from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>ALL PRODUCTS ON THE WEBSITE INCLUDE FREE SHIPPING.</strong>
      </p>
      <p className="text-gray-700 mb-4">
        Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your 
        email ID as specified during registration. For any issues in utilizing our services, you may contact our helpdesk at 
        <strong> SUPPORT@ANIMECANVAS.IN</strong>.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">Address:</h3>
      <p className="text-gray-700">
        1st Cross MSR Nagar, Pipeline Road, Bangalore 560054
      </p>
    </div>
  );
}

export default ShippingPolicy;
