import React, { useState } from 'react';
import { createContext } from 'react';
import { ResultContextDefaultValue } from '../constants/ResultContextDefaultValue';
import { ResultContextPropTypes } from '../types/ResultContextPropTypes';


export const ResultContext = createContext<ResultContextPropTypes>(ResultContextDefaultValue);

const ResultContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  
  return (
    <ResultContext.Provider value={{ score, setScore, showResult, setShowResult }}>
      {children}
    </ResultContext.Provider>
  )
}

export default ResultContextProvider