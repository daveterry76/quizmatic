import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import CategoryContextProvider from './contexts/CategoryContext';
import SelectionContextProvider from './contexts/SelectionContext';
import QuestionsContextProvider from './contexts/QuestionsContext';
import ResultContextProvider from './contexts/ResultContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <QuestionsContextProvider>
          <ResultContextProvider>
            <SelectionContextProvider>
              <CategoryContextProvider>
                <App />
              </CategoryContextProvider>
            </SelectionContextProvider>
          </ResultContextProvider>
        </QuestionsContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
