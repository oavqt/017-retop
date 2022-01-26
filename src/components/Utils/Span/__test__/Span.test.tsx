import { render, screen } from '@testing-library/react';
import Span from '../Span';

describe('Span component', () => {
  const spanStringTest = (children: string) => render(<Span>{children}</Span>);

  test('expect a Span component to be created', () => {
    render(<Span>span</Span>);

    const span = screen.getByText('span');

    expect(span).toBeInTheDocument();
  });

  test('expect a Span component to be created containing passed in string', () => {
    const spanString = 'dieu te bénisse';
    spanStringTest(spanString);

    const span = screen.getByText(spanString);

    expect(span).toHaveTextContent(spanString);
  });
});
