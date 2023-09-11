/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { QuestionContext } from '../../../contexts/QuestionsContext';
import { useContext } from 'react';
import { QuestionContextProps } from '../../../types/QuestionContextPropTypes';
import useFetchQuestions from '../../../hooks/useFetchQuestions';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../styles/quiz/quiz.scss';


const Questions = () => {

    const { questions } = useFetchQuestions();
    const questionContext = useContext<QuestionContextProps>(QuestionContext);
    const { activeQuestion, setActiveQuestion, options, setOptions, selectedAnswer, setSelectedAnswer, selectedAnswerIndex, setSelectedAnswerIndex } = questionContext;


    useEffect(() => {
      setOptions(
        questions &&
        handleShuffle([
          questions[activeQuestion]?.correct_answer,
          ...questions[activeQuestion]?.incorrect_answers,
        ])
      )
    
      
    }, [questions, activeQuestion, setOptions]);
    
    // Shuffle the options

    const handleShuffle = (optionss: any): any[] | null => {
      return optionss.sort(() => Math.random() - 0.5)
    }
  
    // Check answer selected

    const onAnswerSelected = (answer: any, index: any) => {
      setSelectedAnswerIndex(index)
      if (answer === (questions && questions[activeQuestion]?.correct_answer)) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }

    return (
    <div className='quiz-container'>
      { questions ?
      <>
        <h2 className='question'>Question {activeQuestion + 1}/{questions && questions.length}:</h2>
        <h3>{questions && questions[activeQuestion]?.question}</h3>
        <ul>

          {options && 
            options.map((answer: any, index: any) => 

            <li
              onClick={() => onAnswerSelected(answer, index)}
              key={answer}
              className={selectedAnswerIndex === index ? 'selected-answer' : undefined}
            >{answer}</li>

            )

          }

        </ul>
      </>
    : <>
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={100}
          thickness={1}
        />
        <h3>No questions for now.</h3>
        <Link to='/'>Return to home page</Link>
      </>}
    </div>
  )
}

export default Questions