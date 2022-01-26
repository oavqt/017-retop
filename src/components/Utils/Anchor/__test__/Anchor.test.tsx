import { render, screen } from '@testing-library/react';
import Anchor from '../Anchor';

describe('Anchor component', () => {
  const anchorStringTest = (children: string) =>
    render(
      <Anchor attrs={{ href: 'href', target: 'target' }}>{children}</Anchor>
    );

  test('expect a Anchor component to be created', () => {
    render(<Anchor attrs={{ href: 'href', target: 'target' }}></Anchor>);

    const anchor = screen.getByRole('link');

    expect(anchor).toBeInTheDocument();
  });

  test('expect a Anchor component to be created containing passed in string', () => {
    const anchorString = 'dieu te bénisse';
    anchorStringTest(anchorString);

    const anchor = screen.getByText(anchorString);

    expect(anchor).toHaveTextContent(anchorString);
  });

  test('expect a Anchor component to be created containing passed in props', () => {
    render(<Anchor attrs={{ href: 'href', target: 'target' }} />);

    const anchor = screen.getByRole('link');

    expect(anchor).toHaveAttribute('href', 'href');
    expect(anchor).toHaveAttribute('target', 'target');
  });
});
