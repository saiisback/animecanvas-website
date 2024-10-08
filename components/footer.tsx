import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black">
      {/* Header Section */}
      <div className="flex justify-evenly items-center  text-white align-middle px-10 py-20">
        <h1 className="text-4xl">ANIME CANVAS</h1>
        <div>
          <ul>
            <li><Link href="/policies/#TermsOfService">Terms of service</Link></li>
            <li><Link href="/policies/#ShippingPolicy">Shipping policy</Link></li>
            <li><Link href="/policies/#RefundPolicy">Refund policy</Link></li>
            <li><Link href="/policies/#PrivacyPolicy">Privacy policy</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link href="/#Drops">New Drops</Link></li>
            <li><Link href="/catlog">Shop</Link></li>
            <li><Link href="https://www.instagram.com/animecanvas.in/">Social Media</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        {/* or set a specific height */}
        <h1 className="text-md text-gray-500">© Anime Canvas. 2024. All Rights Reserved.</h1>
      </div>

      {/* Categories Section */}
    </div>
  );
}

export default Footer;
