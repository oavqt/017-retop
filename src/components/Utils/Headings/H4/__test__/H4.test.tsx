import { render, screen } from '@testing-library/react';
import H4 from '../H4';

describe('H4 component', () => {
  const h4StringTest = (children: string) => render(<H4>{children}</H4>);

  test('expect a H4 component to be created', () => {
    render(<H4 />);

    const heading4 = screen.getByRole('heading');

    expect(heading4).toBeInTheDocument();
  });

  test('expect a H4 component to be created containing passed in string', () => {
    const heading4String = 'dieu te bénisse';
    h4StringTest(heading4String);

    const heading4 = screen.getByRole('heading');

    expect(heading4).toHaveTextContent(heading4String);
  });
});
