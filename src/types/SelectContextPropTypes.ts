import { Dispatch, SetStateAction } from "react"

export type numbersType = {
    id: number,
    number: number
}

export type difficultyType = {
    value: string,
    label: string
}

export interface SelectContextProps {
    selectCategory: Array<string>,
    setSelectCategory: Dispatch<SetStateAction<Array<string>>>,
    chooseDifficulty: difficultyType[],
    setChooseDifficulty: Dispatch<SetStateAction<difficultyType[]>>,
    numberOfQuestions: numbersType[],
    setNumberOfQuestions: Dispatch<SetStateAction<numbersType[]>>,
    selectedNumber: number | null,
    setSelectedNumber: Dispatch<SetStateAction<number | null>>,
    selectedDifficulty: string | null,
    setSelectedDifficulty: Dispatch<SetStateAction<string | null>>,
    error: null,
    setError: Dispatch<SetStateAction<null | any>>
}