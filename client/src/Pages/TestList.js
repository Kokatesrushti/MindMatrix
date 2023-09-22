// TestList.js
import React from 'react';
import TestCard from '../components/TestCard';

function TestList () {
  const testAliases = ["TMP", "CM", "CANT","TSTA","OPI","MA","RSM","Writing"];

  return (
    <div>
   <h1 className='text-lg font-bold my-5'>Study Skill Profile Assessment</h1>
    <div className="flex flex-col mx-10">
      {testAliases.map((testAlias, index) => (
        <TestCard key={index} testAlias={testAlias} />
      ))}
    </div>
    </div>
  );
};

export default TestList;
