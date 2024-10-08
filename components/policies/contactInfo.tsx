import React from 'react'

function ContactInfo() {
  return (
    <div className="max-w-full mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-7xl font-bold text-gray-800 mb-4">Contact Information</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Email:</span> <a href="mailto:support@animecanvas.in" className="text-blue-600 hover:underline">support@animecanvas.in</a>
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Phone no:</span> <a href="tel:+917406537842" className="text-blue-600 hover:underline">7406537842</a>
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Instagram (DM us):</span> <a href="https://www.instagram.com/animecanvas.in" className="text-blue-600 hover:underline">@animecanvas.in</a>
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Address:</span> 1st Main MSR Nagar, Pipeline Road, Bangalore 560054
      </p>
    </div>
  )
}

export default ContactInfo
