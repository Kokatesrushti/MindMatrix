// TestList.js
import React from 'react';
import TestCard from '../components/TestCard';

function TestList () {
  const testNames = ["Time management and Procastination", "Concentration and Memory", "Study Aids and Note-Taking", "Concentration and Memory"];

  return (
    <div>
   <h1 className='text-lg font-bold my-5'>Study Skill Profile Assessment</h1>
    <div className="flex flex-col mx-10">
      {testNames.map((testName, index) => (
        <TestCard key={index} testName={testName} />
      ))}
    </div>
    </div>
  );
};

export default TestList;
