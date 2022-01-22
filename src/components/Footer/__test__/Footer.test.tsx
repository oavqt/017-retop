import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('expect a Footer component to be created', () => {
    render(<Footer />);

    const header = screen.getByRole('contentinfo');

    expect(header).toBeInTheDocument();
  });

  test('expect a Footer component to be created with 2 Img components and a Span component', () => {
    render(<Footer />);

    const images = screen.getAllByRole('img');
    const span = screen.getByText('Oav');

    expect(images).toHaveLength(2);
    expect(span).toBeInTheDocument();
  });
});
