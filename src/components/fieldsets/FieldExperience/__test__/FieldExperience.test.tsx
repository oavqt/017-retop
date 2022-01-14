import { render, screen } from '@testing-library/react';
import FieldExperience from '../FieldExperience';

describe('FieldExperience component', () => {
  test('expect a FieldExperience component to be created', () => {
    render(<FieldExperience />);

    const fieldExperience = screen.getByRole('group');

    expect(fieldExperience).toBeInTheDocument();
  });

  test('expeact a FieldExperience component to be created with a ButtonAdd component', () => {
    render(<FieldExperience />);

    const buttonAdd = screen.getByText('add');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });
});
