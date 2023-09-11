import { numbers } from './numbers';
import { difficultyLevel } from './difficultyLevel';
import { SelectContextProps } from '../types/SelectContextPropTypes';


export const SelectContextDefaultValue: SelectContextProps = {
    selectCategory: [],
    setSelectCategory: () => {},
    chooseDifficulty: difficultyLevel,
    setChooseDifficulty: () => {},
    numberOfQuestions: numbers,
    setNumberOfQuestions: () => {},
    selectedNumber: 0,
    setSelectedNumber: () => {},
    selectedDifficulty: '',
    setSelectedDifficulty: () => {},
    error: null,
    setError: () => {}
}