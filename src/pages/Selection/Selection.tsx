import React, { useContext } from 'react'
import Header from '../../components/Selection/Header';
import SelectNumberOfQuestions from '../../components/Selection/SelectNumberOfQuestions';
import SelectCategory from '../../components/Selection/SelectCategory';
import SelectDifficulty from '../../components/Selection/SelectDifficulty';
import ProceedButton from '../../components/Selection/ProceedButton';

import '../../../src/styles/selection/selection.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { SelectionContext } from '../../contexts/SelectionContext';
import { SelectContextProps } from '../../types/SelectContextPropTypes';


const Selection = () => {

  const { error } = useContext<SelectContextProps>(SelectionContext);

  return (
    <>
      <Header />
      {error ? <ErrorMessage /> : null}
      <div className='group-selection-options'>
        <SelectCategory />
        <SelectNumberOfQuestions />
        <SelectDifficulty />
      </div>
      <ProceedButton />
    </>
  )
}

export default Selection;