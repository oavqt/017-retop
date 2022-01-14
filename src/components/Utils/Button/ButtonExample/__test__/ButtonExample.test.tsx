import { render, screen } from '@testing-library/react';
import ButtonExample from '../ButtonExample';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonExample />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
