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
          university: 'dieu te bénisse',
          degree: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        },
        {
          university: 'dieu te bénisse',
          degree: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        },
        {
          university: 'dieu te bénisse',
          degree: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        }
      ]
    };

    previewEduMapTest(eduPropGroup);

    const eduHeadings4 = screen.getAllByText('dieu te bénisse');
    const eduHeadings5 = screen.getAllByText('dieu te bénisse');
    const eduParagraphDate = screen.getAllByText('dieu te bénisse');
    const eduParagraphDescription = screen.getAllByText('dieu te bénisse');

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
