import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonPrint from '../ButtonPrint';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonPrint />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('expect a ButtonAdd component to be created with the onClick method of window.print()', () => {
    render(<ButtonPrint />);

    const originalPrint = window.print;

    window.print = jest.fn();

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(window.print).toHaveBeenCalled();

    window.print = originalPrint;
  });
});
