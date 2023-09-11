# Quizmatic Documentation

## Overview

This documentation provides an overview of the high-level architecture of the Quizmatic application developed using React. Quizmatic is a web-based platform designed to provide users with a dynamic quiz experience. It utilizes the Open Trivia Database API to fetch questions based on user-selected criteria including category, difficulty level, the number of questions and displays the user’s score at the end of the quiz.

![](https://gifyu.com/image/S4LMK)


## Architecture

### Frontend
The frontend of the Quiz application is built using React and TypeScript, following best practices for code structure and component design.

#### Components
1. **App**: The root component of the application. It manages the application's state and routing, including selected quiz parameters, questions, and the user’s score. 

2. **Selection**: This component allows users to select a quiz category, difficulty level (easy, medium, hardd), and the number of questions (max 10) they want to answer.

3. **Quiz**: Renders a single quiz question with multiple-choice options. Also displays the restart and next buttons to navigate between pages.

4. **Results**:  The application tracks the user's answers and calculates their score based on correct and incorrect responses. The score is updated in real-time as the user progresses through the quiz. Displays the user’s final score at the end of the quiz and a congratulatory message.


#### State Management
- React `useState` and `useContext` hooks are used for managing the application's state, including user inputs and API responses. This Context Providers wrap the main App component.

#### Hooks and API Integration

The application fetches questions from the Trivia API using HTTP requests. Specialized functions are built to handle the fetching of questions and displaying question categories in the Quiz application. AxiosInstance is used for this purpose. The API endpoints used include:

- **Categories Endpoint:** `https://opentdb.com/api_category.php` to retrieve supported categories.

- **Quiz Questions Endpoint:** `https://opentdb.com/api.php` to fetch quiz questions based on the selected category, difficulty level, and the number of questions.

#### Styling 
In harmony with frontend best practices, SASS (A CSS Preprocessor) is used to define the styles in the Quizmatic application. This ensures modularization and maintainability of the code.

### Types
To ensure type safety in the Quizmatic application, types and interfaces are defined and assigned to various components in the application.

### Deployment

The application is deployed using a cloud platform (e.g., Vercel, AWS, GCP, Heroku, Digital Ocean) to make it publicly accessible.

### Project Directory Structure

```- __C:\\Users\\David\\Documents\\resume\\codematic\\quizmatic\\quizmatic\\src__
   - App.scss
   - App.tsx
   - README.md
   - __assets__
     - __icons__
       - loading.svg
       - nextIcon.svg
       - restartIcon.svg
   - __components__
     - __ErrorMessage__
       - ErrorMessage.tsx
     - __Quiz__
       - __Questions__
         - NextButton.tsx
         - Questions.tsx
         - RestartButton.tsx
     - __Results__
       - ResultsText.tsx
     - __Selection__
       - Header.tsx
       - ProceedButton.tsx
       - SelectCategory.tsx
       - SelectDifficulty.tsx
       - SelectNumberOfQuestions.tsx
   - __constants__
     - QuestionContextDefaultValue.ts
     - ResultContextDefaultValue.ts
     - SelectionContextDefaultValues.tsx
     - difficultyLevel.ts
     - numbers.ts
   - __contexts__
     - CategoryContext.tsx
     - QuestionsContext.tsx
     - ResultContext.tsx
     - SelectionContext.tsx
   - __hooks__
     - useDisplayCategories.ts
     - useFetchQuestions.ts
   - index.scss
   - index.tsx
   - logo.svg
   - __pages__
     - __Quiz__
       - Quiz.tsx
     - __Results__
       - Results.tsx
     - __Selection__
       - Selection.tsx
   - [react\-app\-env.d.ts](react-app-env.d.ts)
   - [reportWebVitals.ts](reportWebVitals.ts)
   - __services__
     - axiosInstance.ts
   - setupTests.ts
   - __styles__
     - __quiz__
       - quiz.scss
     - __results__
       - \_heading.scss
       - \_paragraphStyle.scss
     - __selection__
       - error\_message.scss
       - selection.scss
   - __tests__
     - NextButton.test.tsx
     - ProceedButton.test.tsx
     - RestartButton.test.tsx
   - __types__
     - CategoriesContextPropTypes.ts
     - QuestionContextPropTypes.ts
     - ResultContextPropTypes.ts
     - SelectContextPropTypes.ts
   - __utils__
     - scoreModulo.ts
```


## User Experience

The user interface and design of the Quiz application are designed to provide a pleasant and intuitive user experience. This includes responsive design for different screen sizes and thoughtful use of colors, typography, and user interactions.

## Error Handling

The application is equipped with appropriate error handling mechanisms. It displays user-friendly error messages in case of network issues, invalid inputs, or any other errors that may occur during quiz interaction.

## Testing
Unit tests were written for certain key elements to ensure maintainability of the application. Jest and React Testing Library were utilized for this purpose.

## Deployment

The Quiz application is deployed on [Vercel](https://www.vercel.com/) at the following URL: [https://quizmatic.vercel.app](https://quizmatic.vercel.app)

## Repository

The code for the Quiz application is hosted on GitHub in the following public repository: [https://github.com/daveterry76/quizmatic](https://github.com/daveterry76/quizmatic)


## Future Improvements:

Potential enhancements for the application include:
- Implementing user authentication for personalized experiences.
- Adding a timer feature to create time-bound quizzes.
- Enhancing the user interface for improved accessibility and aesthetics.

## Collaboration

I welcome collaboration and contributions from the developer community to enhance and improve this Quiz application further. If you have ideas for new features, bug fixes, or any other improvements, please feel free to fork this repository and submit pull requests. I appreciate your valuable input and will review and merge well-documented and well-tested contributions that align with the project's goals and best practices.
To contribute, follow these steps:
1. Fork this repository to your own GitHub account.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and ensure they are well-documented.
4. Run tests to ensure your changes don't introduce regressions.
5. Submit a pull request with a clear description of your changes and why they are beneficial.

Let's collaborate to make this Quiz application even better for users and developers alike.

Feel free to reach out if you have any questions or need assistance with the contribution process. Thank you for your interest in improving this project!





