import React, { useContext } from 'react';
import { SelectionContext } from '../../contexts/SelectionContext';
import { SelectContextProps } from '../../types/SelectContextPropTypes';
import '../../styles/selection/selection.scss';

const SelectDifficulty = () => {

  const { chooseDifficulty, setChooseDifficulty, selectedDifficulty, setSelectedDifficulty } = useContext<SelectContextProps>(SelectionContext)

  const handleSelectDifficulty = (e: any) => {
    setSelectedDifficulty(e.target.value);
  }

  return (
    <>
      <select onChange={handleSelectDifficulty}>
      <option value="" disabled selected>Select Difficulty</option>
        {chooseDifficulty.map((diff) => (
          <option value={diff.value}>{diff.label}</option>
        ))}
      </select>
    </>
  )
}

export default SelectDifficulty