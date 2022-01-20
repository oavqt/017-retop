import { render, screen } from '@testing-library/react';
import PreviewExperienceGroup from '../PreviewExperienceGroup';
import PreviewExperiencePropsObject from '../../interfaces/PreviewExperience.interfaces';

describe('PreviewExperienceGroup component', () => {
  const previewExpGroupPropsTest = (expGroup: PreviewExperiencePropsObject) =>
    render(<PreviewExperienceGroup value={{ ...expGroup }} />);

  test('expect a PreviewExperienceGroup to be created', () => {
    render(<PreviewExperienceGroup />);

    const expArticle = screen.getByRole('article');

    expect(expArticle).toBeInTheDocument();
  });

  test('expect a PreviewExperienceGroup to be created with properties passed in set as p, h4, h5, and p tags', () => {
    const expPropGroup = {
      position: 'i hecking love emma watson --h4',
      company: 'i hecking love emma watson --h5',
      date: 'i hecking love emma watson --date',
      description: 'i hecking love emma watson --description'
    };

    previewExpGroupPropsTest(expPropGroup);

    const expHeadings4 = screen.getByText(expPropGroup.position);
    const expHeadings5 = screen.getByText(expPropGroup.company);
    const expParagraphDate = screen.getByText(expPropGroup.date);
    const expParagraphDescription = screen.getByText(expPropGroup.description);

    const expElements = [
      expHeadings4,
      expHeadings5,
      expParagraphDate,
      expParagraphDescription
    ];

    expElements.forEach((expElement) => expect(expElement).toBeInTheDocument());
  });
});
