import React from 'react'
import NextButton from '../../components/Quiz/Questions/NextButton'
import Questions from '../../components/Quiz/Questions/Questions'
import RestartButton from '../../components/Quiz/Questions/RestartButton'

const Quiz = () => {
  
  return (
    <>
        <h3 className='heading'>Quizmatic</h3>
        <Questions/>
        <div className='action-btns'>
          <RestartButton/>
          <NextButton/>
        </div>
    </>
  )
}

export default Quiz