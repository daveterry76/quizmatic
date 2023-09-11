import { fireEvent, render, screen } from "@testing-library/react";
import ProceedButton from "../components/Selection/ProceedButton";


describe('ProceedBtn', () => {
    it('is rendered on the screen', () => {
        render(<ProceedButton />);
        const proceedBtn = screen.getByTestId('proceedBtn');
        expect(proceedBtn).toBeInTheDocument();
    })
    it('should proceed to questions', () => {
        render(<ProceedButton />);
        const proceedBtn = screen.getByTestId('proceedBtn');
        fireEvent.click(proceedBtn);
        expect(proceedBtn).toHaveBeenCalledTimes(1);
    })
})