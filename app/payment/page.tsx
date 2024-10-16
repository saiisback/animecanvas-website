import React from "react";
import Image from 'next/image';

function Payment() {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Contact, Shipping, Delivery */}
        <div className="lg:col-span-2">
          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Contact Details
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              We will use these details to keep you informed about your
              delivery.
            </p>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              type="email"
              placeholder="Email"
            />
          </div>

          {/* Shipping Address */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                type="text"
                placeholder="Last Name*"
              />
            </div>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Find Delivery Address*"
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Phone Number* (E.g., 123-456-7890)"
            />
          </div>

          {/* Delivery Options */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Delivery Options
            </h2>
            {/* Standard Delivery Option */}
            <div className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Standard Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  Enter your address to see when you&apos;ll get your order
                </p>
              </div>
              <p className="text-blue-600 font-bold">$6.00</p>
            </div>
            {/* Collect in Store Option */}
            <div className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Collect in Store
                </h3>
                <p className="text-sm text-gray-500">
                  Pay now, collect in store
                </p>
              </div>
              <p className="font-bold">Free</p>
            </div>

            {/* Additional Options */}
            <div className="space-y-2 mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>My billing and delivery information are the same</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>I&apos;m 13+ years old</span>
              </label>
            </div>

            {/* Review and Pay Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold">
              REVIEW AND PAY
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-gray-800 mb-2">
              <p>1 ITEM</p>
              <p>$130.00</p>
            </div>
            <div className="flex justify-between text-gray-800 mb-2">
              <p>Delivery</p>
              <p>$6.99</p>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
              <p>Total</p>
              <p>$136.99</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Details
            </h2>
            <div className="flex items-center">
              <div className="w-24 h-24">
                <Image
                  src="https://example.com/shoe-image.jpg"
                  alt="Dropset Trainer Shoes"
                  width={1200}  // Adjust as needed
                  height={800}  // Adjust as needed
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-md font-bold text-gray-800">
                  DROPSET TRAINER SHOES
                </h3>
                <p className="text-sm text-gray-500">
                  Men&apos;s Road Running Shoes
                </p>
                <p className="text-sm text-gray-500">
                  Enamel Blue/University White
                </p>
                <div className="flex items-center mt-2">
                  <p className="text-sm text-gray-500 mr-4">Size 10</p>
                  <p className="text-sm text-gray-500">Quantity 1</p>
                </div>
                <p className="text-lg font-bold text-blue-600">$130.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
