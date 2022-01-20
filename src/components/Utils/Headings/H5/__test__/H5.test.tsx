import { render, screen } from '@testing-library/react';
import H5 from '../H5';

describe('H5 component', () => {
  const h5StringTest = (children: string) => render(<H5>{children}</H5>);

  test('expect a H5 component to be created', () => {
    render(<H5 />);

    const heading5 = screen.getByRole('heading');

    expect(heading5).toBeInTheDocument();
  });

  test('expect a H5 component to be created containing passed in string', () => {
    const heading5String = 'i hecking love emma watson';

    h5StringTest(heading5String);

    const heading5 = screen.getByRole('heading');

    expect(heading5).toHaveTextContent(heading5String);
  });
});
