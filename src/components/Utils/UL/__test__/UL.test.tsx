import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import UL from '../UL';

describe('UL component', () => {
  const listItemTest = (children: ReactElement) => render(<UL>{children}</UL>);

  test('expect a UL component to be created', () => {
    render(<UL />);

    const ul = screen.getByRole('list');

    expect(ul).toBeInTheDocument();
  });

  test('expect a UL component to be created containing passed in string', () => {
    const listItem = <li>i hecking love emma watson</li>;

    listItemTest(listItem);

    const li = screen.getByRole('listitem');

    expect(li).toHaveTextContent('i hecking love emma watson');
  });
});
