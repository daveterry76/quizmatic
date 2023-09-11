import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/selection/selection.scss';
import useFetchQuestions from '../../hooks/useFetchQuestions';
import { CategoryContext } from '../../contexts/CategoryContext';
import { SelectionContext } from '../../contexts/SelectionContext';
import { CategoryContextProps } from '../../types/CategoriesContextPropTypes';
import { SelectContextProps } from '../../types/SelectContextPropTypes';

const ProceedButton = () => {
    const navigate = useNavigate();
    const { fetchQuestions } = useFetchQuestions();
    const { selectedNumber, selectedDifficulty, setError } = useContext<SelectContextProps>(SelectionContext);
    const { category } = useContext<CategoryContextProps>(CategoryContext);


    const handleButtonClicked = () => {
      if (!category || !selectedNumber || !selectedDifficulty) {
        setError('Please select all the fields!');
      } else {
        fetchQuestions();
        navigate('/quiz');
      }
    }

  return (
    <div className='proceed-btn-container'>
          <button 
          onClick={handleButtonClicked}
          className='proceed-btn'
          data-testid='proceedBtn'
          >
            PROCEED
          </button>
    </div>  )
}

export default ProceedButton