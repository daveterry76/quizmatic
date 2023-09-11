import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NextIcon } from '../../../assets/icons/nextIcon.svg';
import { QuestionContext } from '../../../contexts/QuestionsContext';
import { ResultContext } from '../../../contexts/ResultContext';
import { QuestionContextProps } from '../../../types/QuestionContextPropTypes';
import { ResultContextPropTypes } from '../../../types/ResultContextPropTypes';
import '../../../styles/quiz/quiz.scss';
import { SelectionContext } from '../../../contexts/SelectionContext';
import { SelectContextProps } from '../../../types/SelectContextPropTypes';


const NextButton = () => {

  const { selectedAnswer, selectedAnswerIndex, setSelectedAnswerIndex, activeQuestion, setActiveQuestion, questions } = useContext<QuestionContextProps>(QuestionContext);
  const { score, setScore, setShowResult } = useContext<ResultContextPropTypes>(ResultContext);
  const { setError } = useContext<SelectContextProps>(SelectionContext);
  const navigate = useNavigate();


  // Functionality for clicking the Next button

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setError(0);
    setScore((prev): number => (
      selectedAnswer ? prev + 1 : prev
    ))
    if (activeQuestion !== (questions && questions?.length - 1)) {
      setActiveQuestion(prev => prev + 1)
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      navigate('/results');
    }
    console.log(score);
  }

  return (
    <>
        <button
          className='action-btn'
          onClick={onClickNext}
          disabled={selectedAnswerIndex === null}
          data-testid='nextBtn'
        >
            {activeQuestion === (questions && questions.length - 1) ? 'FINISH' : 'NEXT'}
            <NextIcon />
        </button>
    </>
  )
}

export default NextButton