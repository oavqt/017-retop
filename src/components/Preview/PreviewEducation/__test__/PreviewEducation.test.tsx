import { render, screen } from '@testing-library/react';
import { PreviewEducationPropsObjectGroup } from '../interfaces/PreviewEducation.interfaces';
import PreviewEducation from '../PreviewEducation';

describe('PreviewEducation', () => {
  const previewEduMapTest = (eduPropGroup: PreviewEducationPropsObjectGroup) =>
    render(<PreviewEducation education={{ ...eduPropGroup }} />);

  test('expect a PreviewEducation component to be created', () => {
    render(<PreviewEducation />);

    const eduList = screen.getByRole('list');

    expect(eduList).toBeInTheDocument();
  });

  test('expect the PreviewEducation component to map the experience props array and create PreviewEducationGroup components', () => {
    const eduPropGroup = {
      group: [
        {
          university: 'i hecking love emma watson',
          degree: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          university: 'i hecking love emma watson',
          degree: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          university: 'i hecking love emma watson',
          degree: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        }
      ]
    };

    previewEduMapTest(eduPropGroup);

    const eduHeadings4 = screen.getAllByText('i hecking love emma watson');
    const eduHeadings5 = screen.getAllByText('i hecking love emma watson');
    const eduParagraphDate = screen.getAllByText('i hecking love emma watson');
    const eduParagraphDescription = screen.getAllByText(
      'i hecking love emma watson'
    );

    const eduGroupElements = [
      eduHeadings4,
      eduHeadings5,
      eduParagraphDate,
      eduParagraphDescription
    ];

    eduGroupElements.forEach((eduElements) =>
      eduElements.forEach((eduElement) =>
        expect(eduElement).toBeInTheDocument()
      )
    );

    const eduListItem = screen.getAllByRole('listitem');

    expect(eduListItem).toHaveLength(3);
  });
});
