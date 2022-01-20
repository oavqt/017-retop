import { render, screen } from '@testing-library/react';
import Div from '../Div';

describe('Div component', () => {
  const divStringTest = (children: string) => render(<Div>{children}</Div>);

  test('expect a Div component to be created', () => {
    render(<Div>div</Div>);

    const div = screen.getByText('div');

    expect(div).toBeInTheDocument();
  });

  test('expect a Div component to be created containing passed in string', () => {
    const divString = 'i hecking love emma watson';

    divStringTest(divString);

    const div = screen.getByText(divString);

    expect(div).toHaveTextContent(divString);
  });
});
