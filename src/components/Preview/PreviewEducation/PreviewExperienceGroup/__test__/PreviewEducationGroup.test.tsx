import { render, screen } from '@testing-library/react';
import PreviewEducationPropsObject from '../../interfaces/PreviewEducation.interfaces';
import PreviewEducationGroup from '../PreviewEducationGroup';

describe('PreviewEducationGroup component', () => {
  const previewEduGroupPropsTest = (eduGroup: PreviewEducationPropsObject) =>
    render(<PreviewEducationGroup value={{ ...eduGroup }} />);

  test('expect a PreviewEducationGroup to be created', () => {
    render(<PreviewEducationGroup />);

    const eduArticle = screen.getByRole('article');

    expect(eduArticle).toBeInTheDocument();
  });

  test('expect a PreviewEducationGroup to be created with properties passed in set as p, h4, h5, and p tags', () => {
    const eduPropGroup = {
      university: 'i hecking love emma watson --h4',
      degree: 'i hecking love emma watson --h5',
      date: 'i hecking love emma watson --date',
      description: 'i hecking love emma watson --description'
    };

    previewEduGroupPropsTest(eduPropGroup);

    const eduHeadings4 = screen.getByText(eduPropGroup.university);
    const eduHeadings5 = screen.getByText(eduPropGroup.degree);
    const eduParagraphDate = screen.getByText(eduPropGroup.date);
    const eduParagraphDescription = screen.getByText(eduPropGroup.description);

    const eduElements = [
      eduHeadings4,
      eduHeadings5,
      eduParagraphDate,
      eduParagraphDescription
    ];

    eduElements.forEach((eduElement) => expect(eduElement).toBeInTheDocument());
  });
});
