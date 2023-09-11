import React from 'react';
import './App.scss';
import Quiz from './pages/Quiz/Quiz';
import Selection from './pages/Selection/Selection';
import { useRoutes } from 'react-router-dom'
import Results from './pages/Results/Results';

function App() {

  let element = useRoutes([
    {
      path: "/",
      element: <Selection />
    },
    {
      path: "quiz",
      element: <Quiz />
    },
    {
      path: "results",
      element: <Results />
    }
  ])

  return element;
}

export default App;
