import ContactInfo from "@/components/policies/contactInfo";
import RefundPolicy from "@/components/policies/refundPolicy";
import TermsOfService from "@/components/policies/termsOfService";
import PrivacyPolicy from "@/components/policies/privacyPolicy";
import ShippingPolicy from "@/components/policies/shippingPolicy";

import React from "react";

function Polices() {
  return (
      <div className="m-5">
        <div id="ContactInfo">
          <ContactInfo />
        </div>
        <div id="TermsOfService">
          <TermsOfService />
        </div>
        <div id="PrivacyPolicy">
          <PrivacyPolicy />
        </div>
        <div id="ShippingPolicy">
          <ShippingPolicy />
        </div>
        <div id="RefundPolicy">
          <RefundPolicy />
        </div>
      </div>
    
  );
}

export default Polices;
