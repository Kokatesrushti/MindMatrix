import React from 'react';
import { Link } from 'react-router-dom';

function LRbdtest({ id }) {
  const subtests = [
    { id: 1, name: 'Right Brain' },
    { id: 2, name: 'Left Brain' },
  ];

  return (
    <div className='flex flex-col bg-black min-h-screen p-10'>
      <div className="p-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Left-Right Brain Dominance</h2>
        <div className="space-y-4">
          {subtests.map((subtest) => (
            <Link key={subtest.id} to={`/test/${id}/${subtest.id}`}>
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-lg font-semibold">{subtest.name}</h3>
                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-lg '>Start Test</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LRbdtest;
