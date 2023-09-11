import React, { useContext, useState } from 'react'
import { SelectionContext } from '../../contexts/SelectionContext'
import { SelectContextProps } from '../../types/SelectContextPropTypes'
import { numbers } from '../../constants/numbers';
import '../../styles/selection/selection.scss';


const SelectNumberOfQuestions = () => {

  const { numberOfQuestions, setNumberOfQuestions, selectedNumber, setSelectedNumber } = useContext<SelectContextProps>(SelectionContext)

  const handleSelectNumber = (e: any) => {
    setSelectedNumber(e.target.value);
  }

  return (
    <>
      <select onChange={handleSelectNumber}>
        <option value="" disabled selected>Choose number of questions</option>
        {numberOfQuestions.map((number) => (
          <>
            <option value={number.id}>{number.number}</option>
          </>
        ))}
      </select>
    </>
  )
}

export default SelectNumberOfQuestions;