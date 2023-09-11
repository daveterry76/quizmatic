import React, { createContext, useState } from 'react'
// import Questions from '../components/Quiz/Questions/Questions';
import { QuestionContextProps } from '../types/QuestionContextPropTypes';
import { QuestionContextDefaultValue } from '../constants/QuestionContextDefaultValue';

export const QuestionContext = createContext<QuestionContextProps>(QuestionContextDefaultValue);

const QuestionsContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [questions, setQuestions] = useState<any[] | null>(null);
    const [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [options, setOptions] = useState<any[] | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null>(null);
    // const [buttonClicked, setButtonClicked] = useState(false);

    
  return (
    <>
        <QuestionContext.Provider 
          value={{ 
                questions, 
                setQuestions, 
                activeQuestion, 
                setActiveQuestion, 
                options, 
                setOptions,
                selectedAnswer,
                setSelectedAnswer,
                selectedAnswerIndex,
                setSelectedAnswerIndex 
                }}
        >
            {children}
        </QuestionContext.Provider>
    </>
  )
}

export default QuestionsContextProvider;