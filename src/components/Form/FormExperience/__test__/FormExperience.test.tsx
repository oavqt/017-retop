import { render, screen } from '@testing-library/react';
import FormExperience from '../FormExperience';

describe('FormExperience component', () => {
  test('expect a FormExperience component to be created', () => {
    render(<FormExperience />);

    const fieldExperience = screen.getByRole('group');

    expect(fieldExperience).toBeInTheDocument();
  });

  test('expect a FormExperience component to be created with a ButtonAdd component', () => {
    render(<FormExperience />);

    const buttonAdd = screen.getByText('add experience');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });

  test('expect the FormExperience component to map the experience props array and create FormExperienceGroup components', () => {
    const expPropGroup = [
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
    ];

    render(<FormExperience experience={{ group: expPropGroup }} />);

    const inptPosition = screen.getAllByPlaceholderText('position');

    expect(inptPosition).toHaveLength(3);
  });
});
