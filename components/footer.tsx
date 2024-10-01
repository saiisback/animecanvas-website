import React from "react";

function Footer() {
  return (
    <div className="bg-black">
      {/* Header Section */}
      <div className="flex justify-evenly items-center  text-white align-middle px-10 py-20">
        <h1 className="text-4xl">ANIME CANVAS</h1>
        <div>
          <ul>
            <li>New Drops</li>
            <li>Shop</li>
            <li>Social Media</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Terms and conditions</li>
            <li>Refund Polices</li>
            <li>Disclamer</li>
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
