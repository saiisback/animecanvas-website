import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-full mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg border border-gray">
      <h2 className="text-7xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        At Anime Canvas, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our small Instagram store.
      </p>
      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Information We Collect:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Billing information</li>
            <li>Instagram username (if applicable)</li>
            <li>Any other information you voluntarily provide to us</li>
          </ul>
        </li>
        <li>
          <strong>How We Use Your Information:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Processing and fulfilling your orders</li>
            <li>Communicating with you about your orders, inquiries, or requests</li>
            <li>Providing customer support</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails or updates about our store (you may opt out at any time)</li>
            <li>Analyzing trends and statistics to enhance your shopping experience</li>
          </ul>
        </li>
        <li>
          <strong>Information Sharing:</strong>
          <p className="mt-2">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our store, conducting business, or servicing you, as long as they agree to keep your information confidential.
            </li>
            <li>
              <strong>Compliance with Laws:</strong> We may disclose your information when we believe it is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </li>
          </ul>
        </li>
        <li>
          <strong>Data Security:</strong>
          <p className="mt-2">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your information.</p>
        </li>
        <li>
          <strong>Your Rights:</strong>
          <p className="mt-2">You have the right to access, update, or delete the personal information we hold about you. If you would like to exercise this right or have any questions about your privacy, please contact us using the information provided below.</p>
        </li>
        <li>
          <strong>Policy Changes:</strong>
          <p className="mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective when posted.</p>
        </li>
        <li>
          <strong>Contact Us:</strong>
          <p className="mt-2">If you have any questions or concerns about this Privacy Policy or our practices, you may contact us at <strong>SUPPORT@ANIMECANVAS.IN</strong>.</p>
        </li>
      </ol>
      <p className="text-gray-700">
        By using our Instagram store, you consent to our Privacy Policy and agree to its terms and conditions.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
