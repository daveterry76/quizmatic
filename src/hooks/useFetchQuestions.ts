import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import { SelectionContext } from '../contexts/SelectionContext';
import { CategoryContextProps } from '../types/CategoriesContextPropTypes';
import { SelectContextProps } from '../types/SelectContextPropTypes';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { QuestionContext } from '../contexts/QuestionsContext';
import { QuestionContextProps } from '../types/QuestionContextPropTypes';

import axiosInstance from '../services/axiosInstance';


const useFetchQuestions = () => {
  const { selectedNumber, selectedDifficulty, error, setError } = useContext<SelectContextProps>(SelectionContext);
  const { category } = useContext<CategoryContextProps>(CategoryContext);
  const { questions, setQuestions } = useContext<QuestionContextProps>(QuestionContext);

  const baseUrl = `api.php?
                  ${selectedNumber && `amount=${selectedNumber}`}
                  ${category && `&category=${category}`}
                  ${selectedDifficulty && `&difficulty=${selectedDifficulty}`}`

    const fetchQuestions = async () => {
        try {
          const { data } = await axiosInstance.get(baseUrl);
          const results = data.results;
          setQuestions(results);
          console.log(results); 
          // return results;
        } catch (error: any) {
          if (error.response) {
            // The request was made and the server responded with a status code
            if (error.response.status === 404) {
              setError('The resource you requested was not found.');
            } else if (error.response.status === 500) {
              setError('An internal server error occurred. Please try again later.');
            } else {
              setError('An error occurred while processing your request.');
            }
          } else if (error.request) {
            // The request was made but no response was received
            setError('No response received from the server. Please check your internet connection.');
          } else {
            // Something else went wrong
            setError('An error occurred. Please try again later.');
          }
          console.log(error);
      }
    }
  


  return {
    fetchQuestions,
    questions,
    error
  }
  

}

export default useFetchQuestions