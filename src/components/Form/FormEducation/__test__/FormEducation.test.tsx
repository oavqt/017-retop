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

    const buttonAdd = screen.getByText('add');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });
});
