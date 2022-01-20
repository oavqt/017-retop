import { render, screen } from '@testing-library/react';
import Paragraph from '../Paragraph';

describe('Paragraph component', () => {
  const paragraphStringTest = (children: string) =>
    render(<Paragraph>{children}</Paragraph>);

  test('expect a Paragraph component to be created', () => {
    render(<Paragraph>paragraph</Paragraph>);

    const paragraph = screen.getByText('paragraph');

    expect(paragraph).toBeInTheDocument();
  });

  test('expect a Paragraph component to be created containing passed in string', () => {
    const paragraphString = 'i hecking love emma watson';

    paragraphStringTest(paragraphString);

    const paragraph = screen.getByText(paragraphString);

    expect(paragraph).toHaveTextContent(paragraphString);
  });
});
