import React, { createContext, useState } from 'react';
import { numbersType } from '../types/SelectContextPropTypes';
import { difficultyType } from '../types/SelectContextPropTypes';
import { numbers } from '../constants/numbers';
import { difficultyLevel } from '../constants/difficultyLevel';
import { SelectContextDefaultValue } from '../constants/SelectionContextDefaultValues';



export const SelectionContext = createContext(SelectContextDefaultValue);


const SelectionContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [selectCategory, setSelectCategory] = useState<string[]>([]);
    const [chooseDifficulty, setChooseDifficulty] = useState<difficultyType[]>(difficultyLevel);
    const [numberOfQuestions, setNumberOfQuestions] = useState<numbersType[]>(numbers);
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
    const [error, setError] = useState<null | any>(null);

  return (
    <SelectionContext.Provider value={{ selectCategory, 
    setSelectCategory, chooseDifficulty, setChooseDifficulty, numberOfQuestions, setNumberOfQuestions, selectedNumber, setSelectedNumber, selectedDifficulty, setSelectedDifficulty, error, setError }}>
        {children}
    </SelectionContext.Provider>
  )
}

export default SelectionContextProvider;