import React, { useContext } from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import NextButton from '../../components/Quiz/Questions/NextButton'
import Questions from '../../components/Quiz/Questions/Questions'
import RestartButton from '../../components/Quiz/Questions/RestartButton'
import { SelectionContext } from '../../contexts/SelectionContext'
import { SelectContextProps } from '../../types/SelectContextPropTypes';
import '../../styles/selection/error_message.scss';


const Quiz = () => {
  
  const { error } = useContext<SelectContextProps>(SelectionContext);

  return (
    <>
        <h3 className='heading'>Quizmatic</h3>
        {error ? <ErrorMessage /> : null}
        <Questions/>
        <div className='action-btns'>
          <RestartButton/>
          <NextButton/>
        </div>
    </>
  )
}

export default Quiz