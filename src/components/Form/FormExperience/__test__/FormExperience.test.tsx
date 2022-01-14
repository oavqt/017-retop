import { render, screen } from '@testing-library/react';
import FormExperience from '../FormExperience';

describe('FormExperience component', () => {
  test('expect a FormExperience component to be created', () => {
    render(<FormExperience />);

    const fieldExperience = screen.getByRole('group');

    expect(fieldExperience).toBeInTheDocument();
  });

  test('expeact a FormExperience component to be created with a ButtonAdd component', () => {
    render(<FormExperience />);

    const buttonAdd = screen.getByText('add');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });
});
