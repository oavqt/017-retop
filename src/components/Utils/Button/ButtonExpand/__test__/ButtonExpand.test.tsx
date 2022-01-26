import { render, screen } from '@testing-library/react';
import ButtonExpand from '../ButtonExpand';

describe('Button component', () => {
  test('expect a ButtonAdd component to be created', () => {
    render(<ButtonExpand />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
