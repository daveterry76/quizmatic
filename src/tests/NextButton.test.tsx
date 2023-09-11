import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NextButton from "../components/Quiz/Questions/NextButton";

describe('NextButton', () => {
    it('renders the next button component', () => {
        render(
            <BrowserRouter>
                <NextButton />
            </BrowserRouter>
        );
        const nextBtn = screen.getByTestId('nextBtn');
        expect(nextBtn).toBeInTheDocument();
    })
    it('handles click of button', () => {
        render(
            <BrowserRouter>
                <NextButton />
            </BrowserRouter>
        );
    
        const nextBtn = screen.getByTestId('nextBtn');
        fireEvent.click(nextBtn);
        expect(nextBtn).toBeDisabled();
    })
    it('should be disabled', () => {
        render(
            <BrowserRouter>
                <NextButton />
            </BrowserRouter>
        );
        const nextBtn = screen.getByTestId('nextBtn');
        expect(nextBtn).toBeDisabled();
    })
})
