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
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        },
        {
          position: 'i hecking love emma watson',
          company: 'i hecking love emma watson',
          date: 'i hecking love emma watson',
          description: 'i hecking love emma watson'
        }
      ]
    };

    previewExpMapTest(expPropGroup);

    const expHeadings4 = screen.getAllByText('i hecking love emma watson');
    const expHeadings5 = screen.getAllByText('i hecking love emma watson');
    const expParagraphDate = screen.getAllByText('i hecking love emma watson');
    const expParagraphDescription = screen.getAllByText(
      'i hecking love emma watson'
    );

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
