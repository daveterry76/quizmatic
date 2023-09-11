import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import RestartButton from "../components/Quiz/Questions/RestartButton";


describe('RestartBtn', () => {
    it('should be rendered on the screen', () => {
        render(<RestartButton />);
        const restartBtn = screen.getByTestId('restartBtn');
        expect(restartBtn).toBeInTheDocument();
    })
    it('should return a value', () => {
        render(<RestartButton />);
        const restartBtn = screen.getByTestId('restartBtn');
        expect(restartBtn).not.toBeNull();
    })
})