import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { QuestionContext } from '../../contexts/QuestionsContext';
import { ResultContext } from '../../contexts/ResultContext'
import { QuestionContextProps } from '../../types/QuestionContextPropTypes';
import { ResultContextPropTypes } from '../../types/ResultContextPropTypes';
import scoreModulo from '../../utils/scoreModulo';
import ResultsText from '../../components/Results/ResultsText';
import '../../styles/quiz/quiz.scss'

const Results = () => {

  const { questions,  } = useContext<QuestionContextProps>(QuestionContext);
  
  scoreModulo();
  
  return (
    <div>
      <h3 className='heading'>Quizmatic</h3>
      {questions ?
        <>
          <ResultsText />
        </>
      :
      <h3>No score</h3>
    }      
    </div>
  )
}

export default Results