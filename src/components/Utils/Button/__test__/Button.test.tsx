import { render, screen } from '@testing-library/react';
import Button, { ButtonAdd, ButtonRemove } from '../Button';

describe('Button component', () => {
  test('expect a Button component to be created', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('expect a ButtonRemove component to be created', () => {
    render(<ButtonRemove />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonAdd />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
