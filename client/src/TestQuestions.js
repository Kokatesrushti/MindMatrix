import React from 'react';
import { useParams } from 'react-router-dom';
import TestQuestionsPattern1 from './Pages/testpattern/TestQuestionsPattern1';
import TestQuestionsPattern2 from './Pages/testpattern/TestQuestionsPattern2';
import TestQuestionsPattern3 from './Pages/testpattern/TestQuestionsPattern3';
import TestQuestionsPattern4 from './Pages/testpattern/TestQuestionsPattern4';
import TestQuestionsPattern5 from './Pages/testpattern/TestQuestionsPattern5';
import TestQuestionsPattern6 from './Pages/testpattern/TestQuestionsPattern6';
import TestQuestionsPattern7 from './Pages/testpattern/TestQuestionsPattern7';

function TestQuestions() {
  const { id, subtestId } = useParams();

  if (id === '1') {
    return <TestQuestionsPattern1 subtestId={subtestId} />;
  } else if (id === '2') {
    return <TestQuestionsPattern2 subtestId={subtestId} />;
  } 
  else if (id === '3') {
    return <TestQuestionsPattern3 subtestId={subtestId} />;
  }
  else if (id === '4') {
    return <TestQuestionsPattern4 subtestId={subtestId} />;
  }
  else if (id === '5') {
    return <TestQuestionsPattern5 subtestId={subtestId} />;
  }
  else if (id === '6') {
    return <TestQuestionsPattern6 subtestId={subtestId} />;
  }
  else if (id === '7') {
    return <TestQuestionsPattern7 subtestId={subtestId} />;
  }

  else {
    return <div>Test not found</div>;
  }
}

export default TestQuestions;
