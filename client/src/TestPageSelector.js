import React from 'react';
import { useParams } from 'react-router-dom';
import Spsatest from './Pages/test/Spsatest';
import Mltest from './Pages/test/MItest'
import TestPage from './Pages/TestPage';

function TestPageSelector() {
  const { id } = useParams();



  const testPageComponents = {
    '1': Spsatest,
    '2': Mltest,
  };

  const SelectedComponent = testPageComponents[id.toString()] || TestPage;


  return <SelectedComponent id={id}/>;
}

export default TestPageSelector;
