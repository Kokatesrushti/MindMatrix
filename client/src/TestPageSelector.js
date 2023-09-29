import React from 'react';
import { useParams } from 'react-router-dom';
import Spsatest from './Pages/test/Spsatest';
import Mltest from './Pages/test/MItest'
import TestPage from './Pages/TestPage';
import LRbdtest from './Pages/test/LRbdtest';
import Personalitytest from './Pages/test/Personalitytest';
import EItest from './Pages/test/EItest';
import LStest from './Pages/test/LStest';
import Leadership from './Pages/test/Leadership';

function TestPageSelector() {
  const { id } = useParams();



  const testPageComponents = {
    '1': Spsatest,
    '2': Mltest,
    '3': LRbdtest,
    '4': Personalitytest,
    '5': EItest,
    '6': LStest,
    '7': Leadership,
  };

  const SelectedComponent = testPageComponents[id.toString()] || TestPage;


  return <SelectedComponent id={id}/>;
}

export default TestPageSelector;
