import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('expect a Header component to be created', () => {
    render(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  test('expect a Header component to be created with 8 H1 components', () => {
    render(<Header />);

    const headers = screen.getAllByRole('heading');

    expect(headers).toHaveLength(8);
    expect(headers[0]).toHaveTextContent('c');
    expect(headers[1]).toHaveTextContent('v');
    expect(headers[2]).toHaveTextContent('v');
    expect(headers[3]).toHaveTextContent('c');
    expect(headers[4]).toHaveTextContent('l');
    expect(headers[5]).toHaveTextContent('e');
    expect(headers[6]).toHaveTextContent('c');
    expect(headers[7]).toHaveTextContent('v');
  });
});
