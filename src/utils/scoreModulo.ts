import React, { useContext } from 'react'
import { QuestionContext } from '../contexts/QuestionsContext'
import { ResultContext } from '../contexts/ResultContext';
import { QuestionContextProps } from '../types/QuestionContextPropTypes';
import { ResultContextPropTypes } from '../types/ResultContextPropTypes';

const useScoreModulo = () => {
    
    const { questions } = useContext<QuestionContextProps>(QuestionContext);
    const { score } = useContext<ResultContextPropTypes>(ResultContext);

    const result = questions && questions?.length  % score;

    console.log(result);

  return (
    result
)
}

export default useScoreModulo