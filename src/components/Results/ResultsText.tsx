import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../../contexts/CategoryContext';
import { QuestionContext } from '../../contexts/QuestionsContext';
import { ResultContext } from '../../contexts/ResultContext';
import { SelectionContext } from '../../contexts/SelectionContext';
import { CategoryContextProps } from '../../types/CategoriesContextPropTypes';
import { QuestionContextProps } from '../../types/QuestionContextPropTypes';
import { ResultContextPropTypes } from '../../types/ResultContextPropTypes';
import { SelectContextProps } from '../../types/SelectContextPropTypes';

const ResultsText = () => {

    const { questions } = useContext<QuestionContextProps>(QuestionContext);
    const { score, setScore } = useContext<ResultContextPropTypes>(ResultContext);
    const { setError, setSelectedNumber, setSelectedDifficulty, } = useContext<SelectContextProps>(SelectionContext);
    const { setCategory } = useContext<CategoryContextProps>(CategoryContext);
    const navigate = useNavigate();

    const returnToSelect = () => {
        setCategory(null);
        setSelectedNumber(null);
        setSelectedDifficulty(null);
        setScore(0);
        setError(null);
        navigate('/');
      }
    

  return (
    <>
        <p>Congrats on completing the quiz. 🎉 </p>
        <h3>Your score is: {score} / {questions?.length}</h3>
        <h4><span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={returnToSelect}>Return to select page</span> </h4>
    </>
  )
}

export default ResultsText