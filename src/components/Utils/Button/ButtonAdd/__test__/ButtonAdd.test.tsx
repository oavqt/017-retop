import { render, screen } from '@testing-library/react';
import ButtonAdd from '../ButtonAdd';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonAdd />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
