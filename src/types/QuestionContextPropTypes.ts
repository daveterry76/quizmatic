import { Dispatch, SetStateAction } from "react";

export interface QuestionContextProps {
    questions: any[] | null,
    setQuestions: Dispatch<SetStateAction<any[] | null>>,
    activeQuestion: number,
    setActiveQuestion: Dispatch<SetStateAction<number>>,
    options: any[] | null,
    setOptions: Dispatch<SetStateAction<any[] | null>>,
    selectedAnswer: boolean,
    setSelectedAnswer: Dispatch<SetStateAction<boolean>>,
    selectedAnswerIndex: null,
    setSelectedAnswerIndex: Dispatch<SetStateAction<null>>
}