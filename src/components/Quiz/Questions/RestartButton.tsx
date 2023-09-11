import React, { useContext } from 'react';
import { ResultContext } from '../../../contexts/ResultContext';
import { ResultContextPropTypes } from '../../../types/ResultContextPropTypes';
import { ReactComponent as RestartIcon } from '../../../assets/icons/restartIcon.svg';
import { QuestionContext } from '../../../contexts/QuestionsContext';
import { QuestionContextProps } from '../../../types/QuestionContextPropTypes';
import '../../../styles/quiz/quiz.scss';

const RestartButton = () => {

  const { questions, setActiveQuestion } = useContext<QuestionContextProps>(QuestionContext);
  const { score, setScore } = useContext<ResultContextPropTypes>(ResultContext);


  const handleRestart = () => {
    setScore((prev: any | null) => ( prev = 0));
    setActiveQuestion(0);
    console.log(score);
  }

  return (
    <>
        <button
          className='action-btn'
          onClick={handleRestart}
          data-testid="restartBtn"
          disabled={questions ? false : true}
        >
            Restart
            <RestartIcon />
        </button>
    </>
  )
}

export default RestartButton