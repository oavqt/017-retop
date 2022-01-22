import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('expect a Header component to be created', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });
});
