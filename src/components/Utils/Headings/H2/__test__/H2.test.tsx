import { render, screen } from '@testing-library/react';
import H2 from '../H2';

describe('H2 component', () => {
  const h2StringTest = (children: string) => render(<H2>{children}</H2>);

  test('expect a H2 component to be created', () => {
    render(<H2 />);

    const heading2 = screen.getByRole('heading');

    expect(heading2).toBeInTheDocument();
  });

  test('expect a H2 component to be created containing passed in string', () => {
    const heading2String = 'i hecking love emma watson';

    h2StringTest(heading2String);

    const heading2 = screen.getByRole('heading');

    expect(heading2).toHaveTextContent(heading2String);
  });
});
