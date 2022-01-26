import { render, screen } from '@testing-library/react';
import H1 from '../H1';

describe('H1 component', () => {
  const h1StringTest = (children: string) => render(<H1>{children}</H1>);

  test('expect a H1 component to be created', () => {
    render(<H1 />);

    const heading1 = screen.getByRole('heading');

    expect(heading1).toBeInTheDocument();
  });

  test('expect a H1 component to be created containing passed in string', () => {
    const heading1String = 'dieu te bénisse';
    h1StringTest(heading1String);

    const heading1 = screen.getByRole('heading');

    expect(heading1).toHaveTextContent(heading1String);
  });
});
