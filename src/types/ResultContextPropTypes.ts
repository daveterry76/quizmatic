import { Dispatch, SetStateAction } from "react";


export interface ResultContextPropTypes {
    score: number,
    setScore: Dispatch<SetStateAction<number>>,
    showResult: boolean,
    setShowResult: Dispatch<SetStateAction<boolean>>
} 