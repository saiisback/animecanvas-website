import React from 'react';

function RefundPolicy() {
  return (
    <div className="max-w-full mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg border border-gray">
      <h2 className="text-7xl font-bold text-gray-800 mb-4">Refund Policy</h2>
      <p className="text-gray-700 mb-4">
        You understand that upon initiating a transaction for availing the Services, you are entering into a legally binding and enforceable contract with us for the Services. 
        You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service.
      </p>
      <p className="text-gray-700 mb-4">
        The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided if you do a refund claim 
        within the stipulated time of <strong>7 days</strong> of delivery of the product. This would make you eligible for a refund according to our policies (as applicable).
      </p>
      <p className="text-gray-700 mb-4">
        In case you do not raise a refund claim within the stipulated time of <strong>7 days</strong> of delivery of the product, then you would not be eligible for a refund.
      </p>
      <p className="text-gray-700 mb-4">
        Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
      </p>
    </div>
  );
}

export default RefundPolicy;
