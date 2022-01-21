import { render, screen } from '@testing-library/react';
import Section from '../Section';

describe('Section component', () => {
  const sectionStringTest = (children: string) =>
    render(<Section>{children}</Section>);

  test('expect a Section component to be created', () => {
    render(<Section>section</Section>);

    const section = screen.getByText('section');

    expect(section).toBeInTheDocument();
  });

  test('expect a Section component to be created containing passed in string', () => {
    const sectionString = 'i hecking love emma watson';

    sectionStringTest(sectionString);

    const section = screen.getByText(sectionString);

    expect(section).toHaveTextContent(sectionString);
  });
});
