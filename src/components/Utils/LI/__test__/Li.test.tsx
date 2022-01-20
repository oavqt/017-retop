import { render, screen } from '@testing-library/react';
import LI from '../LI';

describe('LI component', () => {
  const listItemStringTest = (children: string) => render(<LI>{children}</LI>);

  test('expect a LI component to be created', () => {
    render(<LI />);

    const li = screen.getByRole('listitem');

    expect(li).toBeInTheDocument();
  });

  test('expect a LI component to be created containing passed in string', () => {
    const listItemString = 'i hecking love emma watson';

    listItemStringTest(listItemString);

    const li = screen.getByText(listItemString);

    expect(li).toHaveTextContent('i hecking love emma watson');
  });
});
