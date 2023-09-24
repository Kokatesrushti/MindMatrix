import React from 'react';
import { Link } from 'react-router-dom';

function Mltest({ id }) {
  const subtests = [
    { id: 1, name: 'Liguistic' },
    { id: 2, name: 'Logical/Mathematical' },
    { id: 3, name: 'Visual/Spatial' },
    { id: 4, name: 'Interpersonal' },
    { id: 5, name: 'Musical' },
    { id: 6, name: 'Naturalistic' },
    { id: 7, name: 'Intrapersonal' },
    { id: 8, name: 'Body/Kinaesthetic' },
  ];

  return (
    <div className='flex flex-col bg-gray-900 mt-10 min-h-screen p-10'>
      <div className="p-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Study Skill Profile Assessment</h2>
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

export default Mltest;
