import { render, screen } from '@testing-library/react';
import PreviewPersonalAbout from '../PreviewPersonalAbout';

describe('PreviewPersonalAbout', () => {
  const prevPerAboutParagraphTest = (about: { about: string }) =>
    render(<PreviewPersonalAbout personal={{ ...about }} />);

  test('expect a PreviewPersonalAbout component to be created', () => {
    render(<PreviewPersonalAbout />);

    const prevPerAboutHeading = screen.getAllByRole('heading');

    expect(prevPerAboutHeading[0]).toBeInTheDocument();
    expect(prevPerAboutHeading[1]).toBeInTheDocument();
    expect(prevPerAboutHeading[0]).toHaveTextContent('about \\⤥');
    expect(prevPerAboutHeading[1]).toHaveTextContent('skills \\⤥');
  });

  test('expect a PreviewPersonalAbout component to be created with a Paragraph component that matches the about prop value', () => {
    const prevPerAboutProp = {
      about: 'i hecking love emma watson --about',
      skills: 'i hecking love emma watson --skills'
    };

    prevPerAboutParagraphTest(prevPerAboutProp);

    const prevPerAboutParagraph = screen.getByText(
      'i hecking love emma watson --about'
    );

    const prevPerSkillsParagraph = screen.getByText(
      'i hecking love emma watson --skills'
    );

    expect(prevPerAboutParagraph).toBeInTheDocument();
    expect(prevPerAboutParagraph).toHaveTextContent(
      'i hecking love emma watson --about'
    );
    expect(prevPerAboutParagraph.tagName).toBe('P');

    expect(prevPerSkillsParagraph).toBeInTheDocument();
    expect(prevPerSkillsParagraph).toHaveTextContent(
      'i hecking love emma watson --skills'
    );
    expect(prevPerSkillsParagraph.tagName).toBe('P');
  });
});
