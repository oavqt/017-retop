import { render, screen } from '@testing-library/react';
import ButtonPrint from '../ButtonPrint';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonPrint />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
