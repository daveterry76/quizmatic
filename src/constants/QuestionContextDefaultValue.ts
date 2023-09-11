import { QuestionContextProps } from "../types/QuestionContextPropTypes";

export const QuestionContextDefaultValue: QuestionContextProps = {
    questions: null,
    setQuestions: () => {},
    activeQuestion: 0,
    setActiveQuestion: () => {},
    options: null,
    setOptions: () => {},
    selectedAnswer: false,
    setSelectedAnswer: () => {},
    selectedAnswerIndex: null,
    setSelectedAnswerIndex: () => {}
}