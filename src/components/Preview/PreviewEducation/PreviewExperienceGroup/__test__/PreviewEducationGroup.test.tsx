import { render, screen } from '@testing-library/react';
import { PreviewEducationPropsObject } from '../../interfaces/PreviewEducation.interfaces';
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
      university: 'dieu te bénisse --h4',
      degree: 'dieu te bénisse --h5',
      date: 'dieu te bénisse --date',
      description: 'dieu te bénisse --description'
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
