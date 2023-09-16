// TestCard.js
import React from 'react';

const TestCard = ({ testName }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{testName}</div>
      </div>
    </div>
  );
};

export default TestCard;
