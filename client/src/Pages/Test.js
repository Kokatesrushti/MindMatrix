import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Test() {


    const [tests] = useState([
        { id: 1, name: 'Study Skill Profile Assessment', description: 'Description for Test 1' },
        { id: 2, name: 'Multiple Intelligence', description: 'Description for Test 2' },
        { id: 3, name: 'Test 3', description: 'Description for Test 3' },
      ]);


  return (
    <div className='flex flex-col bg-gray-900 mt-10 min-h-screen p-10'>
     <h1 className="text-white text-2xl font-semibold mb-8">List Of Tests</h1>
     {tests.map((test) => (
        <div
        key={test.id}
        className="max-w-md bg-white p-4 rounded shadow-md mb-4 ">

        <h1 className='text-lg font-semibold mb-2'>{test.name}</h1>
        <p className='text-gray-600 mb-2'>{test.description}</p>
        <Link to={`/test/${test.id}`}>
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-lg">
              Start Test
            </button>
            </Link>
        </div>

     ))}

    </div>
  )
}

export default Test