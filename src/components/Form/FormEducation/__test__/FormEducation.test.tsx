import { render, screen } from '@testing-library/react';
import FormEducation from '../FormEducation';

describe('FormEducation component', () => {
  test('expect a FormEducation component to be created', () => {
    render(<FormEducation />);

    const fieldEducation = screen.getByRole('group');

    expect(fieldEducation).toBeInTheDocument();
  });

  test('expeact a FormExperience component to be created with a ButtonAdd component', () => {
    render(<FormEducation />);

    const buttonAdd = screen.getByText('add education');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });

  test('expect the FormEducation component to map the experience props array and create FormEducationGroup components', () => {
    const eduPropGroup = [
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
    ];

    render(<FormEducation education={{ group: eduPropGroup }} />);

    const inptUniversity = screen.getAllByPlaceholderText('university');

    expect(inptUniversity).toHaveLength(3);
  });
});
