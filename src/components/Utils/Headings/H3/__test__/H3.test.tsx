import { render, screen } from '@testing-library/react';
import H3 from '../H3';

describe('H3 component', () => {
  const h3StringTest = (children: string) => render(<H3>{children}</H3>);

  test('expect a H3 component to be created', () => {
    render(<H3 />);

    const heading3 = screen.getByRole('heading');

    expect(heading3).toBeInTheDocument();
  });

  test('expect a H3 component to be created containing passed in string', () => {
    const heading3String = 'i hecking love emma watson';

    h3StringTest(heading3String);

    const heading3 = screen.getByRole('heading');

    expect(heading3).toHaveTextContent(heading3String);
  });
});
