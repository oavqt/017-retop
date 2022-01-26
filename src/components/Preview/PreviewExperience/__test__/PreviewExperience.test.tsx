import { render, screen } from '@testing-library/react';
import { PreviewExperiencePropsObjectGroup } from '../interfaces/PreviewExperience.interfaces';
import PreviewExperience from '../PreviewExperience';

describe('PreviewExperience', () => {
  const previewExpMapTest = (expPropGroup: PreviewExperiencePropsObjectGroup) =>
    render(<PreviewExperience experience={{ ...expPropGroup }} />);

  test('expect a PreviewExperience component to be created', () => {
    render(<PreviewExperience />);

    const expHeading = screen.getByRole('heading');
    const expList = screen.getByRole('list');

    expect(expList).toBeInTheDocument();
    expect(expHeading).toBeInTheDocument();
    expect(expHeading).toHaveTextContent('experience \\⤥');
  });

  test('expect the PreviewExperience component to map the experience props array and create PreviewExperienceGroup components', () => {
    const expPropGroup = {
      group: [
        {
          position: 'dieu te bénisse',
          company: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        },
        {
          position: 'dieu te bénisse',
          company: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        },
        {
          position: 'dieu te bénisse',
          company: 'dieu te bénisse',
          date: 'dieu te bénisse',
          description: 'dieu te bénisse'
        }
      ]
    };

    previewExpMapTest(expPropGroup);

    const expHeadings4 = screen.getAllByText('dieu te bénisse');
    const expHeadings5 = screen.getAllByText('dieu te bénisse');
    const expParagraphDate = screen.getAllByText('dieu te bénisse');
    const expParagraphDescription = screen.getAllByText('dieu te bénisse');

    const expGroupElements = [
      expHeadings4,
      expHeadings5,
      expParagraphDate,
      expParagraphDescription
    ];

    expGroupElements.forEach((expElements) =>
      expElements.forEach((expElement) =>
        expect(expElement).toBeInTheDocument()
      )
    );

    const expListItem = screen.getAllByRole('listitem');

    expect(expListItem).toHaveLength(3);
  });
});
