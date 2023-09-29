import React,{useState} from 'react';
import { useParams } from 'react-router-dom';

function TestQuestionsPattern1() {
  const { subtestId } = useParams();
  console.log(subtestId);

  const tests = {
    1: {
        title:'Time Management and Procrastination',
        questions: [
          {
            questionText: "1.I'm always on time for classes and assemblies.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I devote sufficient study time to each course.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I plan study times with clear goals.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I prepare a “to-do” list daily.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I avoid things that mess up my planned schedule.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I schedule my study sessions during my optimal alertness periods.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.At the beginning of the term itself I set daily plans for activities and studying.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I proactively tackle significant course projects well before the deadline. ",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          
        ],
      },
      2: {
        title:'Concentration and Memory',
        questions: [
          {
            questionText: "1.I make it a habit to study in a specific place at a set time.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.My study place is free from auditory and visual distractions distractions, ",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I can focus for at least 20 minutes without getting distracted.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I am confident with the level of concentration I am able to maintain.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I fully grasp the material I wish to remember.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I study with the intention of remembering what I learn.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I reinforce my learning by speaking the learning materials aloud.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I can easily remember the things I've studied.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
      3: {
        title: 'Study Aids and Note-Taking',
        questions: [
          {
            questionText: "1.I plan ahead for the utilization of my notes while I'm in the process of taking them.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I grasp the lecture and class discussion and jot down notes.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I arrange my notes in a meaningful way, like making an outline.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I review and enhance my notes systematically.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I take notes on additional readings.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I have a method for marking my textbooks.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.While reading, I underline important parts.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I write notes directly in my book while reading.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          
        ],
      },
      4: {
        title: 'Test Strategies and Test Anxiety',
        questions: [
          {
            questionText: "1.I find out what the exam will cover and how it's graded.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I feel prepared and confident for the exam.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.In my exam preparation, I make an effort to imagine possible test questions ",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I make sure to understand exam questions before answering.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I carefully follow instructions during exams.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I get a good night's sleep before scheduled exams.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I stay calm and remember what I know during exams.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I know how to prepare for different types of tests.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
      5: {
        title: 'Organizing and Processing Information',
        questions: [
          {
            questionText: "1.During my reading, I possess the ability to easily differentiate between important and unimportant points.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I divide assignments into smaller, doable tasks.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I think critically while studying, not just accepting information.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I connect what I learn in different courses.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I organize facts systematically for better understanding.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I use questions to help me understand what I'm studying.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I try to find the best method to complete tasks.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I focus on the main point to solve problems.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
      6: {
        title: 'Motivation and Attitude',
        questions: [
          {
            questionText: "1.If the opportunity arises, I choose to occupy a seat near the front of the classroom.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I am attentive during classes.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I ask the teacher questions when I need to understand better.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I offer answers when the teacher asks questions in class.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I participate in meaningful class discussions.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I attend class regularly.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I take the lead in group activities.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I use study techniques that make the material to be studied interesting to me.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
      7: {
        title:'Reading and Selecting the Main Idea',
        questions: [
          {
            questionText: "1.I review each chapter before I begin reading.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I stick to the author's structure to understand better.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I review reading material multiple times during a semester.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.When studying a topic, I summarize it in my own words.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I am confident in my reading speed.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I search for meanings of unfamiliar parts.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I am content with my reading skills.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I concentrate on the main point while reading.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
      8: {
        title:'Writing',
        questions: [
          {
            questionText: "1.I am able to effectively communicate my thoughts in writing.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "2.I quickly and spontaneously write drafts from my notes.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "3.I give myself a day's break from a written assignment and then rewrite it.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "4.I check for grammatical errors.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "5.I seek feedback for better writing.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "6.I am comfortable using library resources for research.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "7.I am able to narrow a topic for an essay, research paper, etc.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
          {
            questionText: "8.I allocate ample time for research and writing.",
            options: ['Never', 'Sometimes', 'Usually', 'Always'],
            optionWeightage: [1, 2, 3, 4],
          },
         
        ],
      },
  
  };

  const subtestIdInt = parseInt(subtestId);

  const subtest = tests[subtestIdInt];

//   if (!subtest) {
//     return <div>Subtest not found</div>;
//   }

  const [scores, setScores] = useState(Array(subtest.questions.length).fill(0));

  const handleOptionChange = (questionIndex, optionWeightage, optionIndex) => {
    const newScores = [...scores];
    newScores[questionIndex] = optionWeightage[optionIndex];
    setScores(newScores);
  };
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  
  return (
    <div className='container mx-auto p-4 bg-gray-900 min-h-screen'>
    <h2 className='text-white text-left'>Assessment Rating Criteria: </h2>
    <p className='text-white text-left'>Please evaluate each statement according to how often it applies to your situation. Use the following scale:</p>
    <p className='text-white text-left'><strong>Never: </strong>Assign a rating of 1 if the statement rarely applies to you. </p>
    <p className='text-white text-left'><strong>Sometimes:</strong> Assign a rating of 2 if the statement applies occasionally.  </p>
    <p className='text-white text-left'><strong>Usually:</strong> Assign a rating of 3 if the statement applies frequently.  </p>
    <p className='text-white text-left mb-5'><strong>Always: </strong> Assign a rating of 4 if the statement consistently applies to you.  </p>
    <h1 className="text-2xl font-bold mb-4 text-white">{subtest.title}</h1>
    {subtest.questions.map((question, questionIndex) => (
      <div key={questionIndex} className="mb-4">
        <p className='text-lg mb-2 text-left text-white'>{question.questionText}</p>
        <div className="mt-2 flex">
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-white"
                name={`question-${questionIndex}`}
                value={option}
                onChange={() =>
                  handleOptionChange(questionIndex, question.optionWeightage, optionIndex)
                }
              />
              <span className="ml-3 mr-3 text-white">{option}</span>
            </label>
          ))}
        </div>
      </div>
    ))}
    <div className="mt-4 text-white">
      <p>Total Score: {totalScore}</p>
    </div>
  </div>
  );
}

export default TestQuestionsPattern1;
