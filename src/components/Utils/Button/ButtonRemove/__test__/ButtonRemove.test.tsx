import { render, screen } from '@testing-library/react';
import ButtonRemove from '../ButtonRemove';

describe('Button component', () => {
  test('expect a ButtonRemove component to be created', () => {
    render(<ButtonRemove />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
