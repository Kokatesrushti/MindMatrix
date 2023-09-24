import React from 'react';
import { Link } from 'react-router-dom';

function Spsatest({ id }) {
  const subtests = [
    { id: 1, name: 'Time Management and Procrastination' },
    { id: 2, name: 'Concentration and Memory' },
    { id: 3, name: 'Study Aids and Note-Taking' },
    { id: 4, name: 'Test Strategies and Test Anxiety' },
    { id: 5, name: 'Organizing and Processing Information' },
    { id: 6, name: 'Motivation and Attitude' },
    { id: 7, name: 'Reading and Selecting the Main Idea' },
    { id: 8, name: 'Writing' },
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

export default Spsatest;
