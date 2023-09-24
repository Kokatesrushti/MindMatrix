import React from 'react';
import { useParams } from 'react-router-dom';
import TestQuestionsPattern1 from './Pages/testpattern/TestQuestionsPattern1';
import TestQuestionsPattern2 from './Pages/testpattern/TestQuestionsPattern2';

function TestQuestions() {
  const { id, subtestId } = useParams();

  if (id === '1') {
    return <TestQuestionsPattern1 subtestId={subtestId} />;
  } else if (id === '2') {
    return <TestQuestionsPattern2 subtestId={subtestId} />;
  } else {
    return <div>Test not found</div>;
  }
}

export default TestQuestions;
