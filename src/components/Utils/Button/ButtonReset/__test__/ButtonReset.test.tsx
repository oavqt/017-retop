import { render, screen } from '@testing-library/react';
import ButtonReset from '../ButtonReset';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonReset />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
