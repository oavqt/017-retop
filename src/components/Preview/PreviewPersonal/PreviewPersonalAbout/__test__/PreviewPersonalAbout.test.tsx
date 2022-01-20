import { render, screen } from '@testing-library/react';
import PreviewPersonalAbout from '../PreviewPersonalAbout';

describe('PreviewPersonalAbout', () => {
  const prevPerAboutParagraphTest = (about: { about: string }) =>
    render(<PreviewPersonalAbout personal={{ ...about }} />);

  test('expect a PreviewPersonalAbout component to be created', () => {
    render(<PreviewPersonalAbout />);

    const prevPerAboutHeading = screen.getByRole('heading');

    expect(prevPerAboutHeading).toBeInTheDocument();
    expect(prevPerAboutHeading).toHaveTextContent('about');
  });

  test('expect a PreviewPersonalAbout component to be created with a Paragraph component that matches the about prop value', () => {
    const prevPerAboutProp = {
      about: 'i hecking love emma watson'
    };

    prevPerAboutParagraphTest(prevPerAboutProp);

    const prevPerAboutParagraph = screen.getByText(
      'i hecking love emma watson'
    );

    expect(prevPerAboutParagraph).toBeInTheDocument();
    expect(prevPerAboutParagraph).toHaveTextContent(
      'i hecking love emma watson'
    );
    expect(prevPerAboutParagraph.tagName).toBe('P');
  });
});
