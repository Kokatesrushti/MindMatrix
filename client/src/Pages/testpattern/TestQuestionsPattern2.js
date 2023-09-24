import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern2() {
  const { subtestId } = useParams();

  const commonoption = [
    "NO, the statement is not at all like me.",
    "The statement is a little like me.",
    "The statement is somewhat like me.",
    "The statement is a lot like me.",
    "YES, the statement is me.",
  ];

  const tests = {
    1: {
      title: "Linguistic",
      questions: [
        {
          questionText:
            "1.	I can use lots of different words to express myself.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I feel comfortable working with language and words.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I enjoy crosswords and other word games like Scrabble.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4.	I tend to remember things exactly as they are said to me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	I enjoy participating in debates and/or discussions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I find it easy to explain things to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	I enjoy keeping a written journal and/or writing stories and articles.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I like to read a lot.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Logical/Mathematical",
      questions: [
        {
          questionText:
            "1.	I work best in an organised work area. ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I enjoy maths and using numbers.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I keep a ‘things to do’ list.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I enjoy playing brainteasers and logic puzzles.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I like to ask ‘why’ questions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I work best when I have a day planner or timetable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7. I quickly understand how cause and effect are related.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I always do things one step at a time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
  };
  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(subtest.questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (optionWeightage, optionIndex) => {
    const newScores = [...scores];
    newScores[questionIndex] = optionWeightage[optionIndex];
    setScores(newScores);
  };

  const handleNextQuestion = () => {
    if (questionIndex < subtest.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Display total score
      setShowScore(true);
    }
  };

  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen pt-20">
      <h1 className="text-2xl font-bold mb-4 text-white">{subtest.title}</h1>
      {showScore ? (
        <div className="text-white">
          <p>Total Score: {totalScore}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 text-left text-white">
            {subtest.questions[questionIndex].questionText}
          </p>
          <div className="mt-2 text-left">
            {subtest.questions[questionIndex].options.map(
              (option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <label className="inline-flex justify-items-start">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-white"
                      name={`question-${questionIndex}`}
                      value={optionIndex}
                      onChange={() =>
                        handleOptionChange(
                          subtest.questions[questionIndex].optionWeightage,
                          optionIndex
                        )
                      }
                    />
                    <span className="ml-3 text-white">{option}</span>
                  </label>
                </div>
              )
            )}
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextQuestion}
            >
              {questionIndex === subtest.questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestQuestionsPattern2;
