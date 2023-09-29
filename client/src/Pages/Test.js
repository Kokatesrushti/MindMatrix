import React,{useState} from 'react'
import business from '../images/business1.png'
import { Link } from 'react-router-dom';

function Test() {


    const [tests] = useState([
        { id: 1, name: 'Study Skill Profile Assessment', description: 'Description for Test 1' },
        { id: 2, name: 'Multiple Intelligence', description: 'Description for Test 2' },
        { id: 3, name: 'Left-Right Brain Dominance', description: 'Description for Test 3' },
        { id: 4, name: 'Personality Test', description: 'Description for Test 4' },
        { id: 5, name: 'Emotional Intelligence', description: 'Description for Test 5' },
        { id: 6, name: 'Learning Style Test', description: 'Description for Test 6' },
        { id: 7, name: 'Leadership Skills and Styles Test', description: 'Description for Test 6' },
      ]);


  return (
    <div>
    <div className='w-full h-40 bg-black p-10 '>
      <div className='flex justify-end'>
      <img src={business} alt="business" width={422} height={422}></img>
      </div>
    </div>
    <div className='flex flex-col bg-white'>
     <h1 className="text-2xl font-semibold mb-8">List Of Tests</h1>

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
    </div>
  )
}

export default Test