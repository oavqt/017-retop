import { render, screen } from '@testing-library/react';
import FieldEducation from '../FieldEducation';

describe('FieldEducation component', () => {
  test('expect a FieldEducation component to be created', () => {
    render(<FieldEducation />);

    const fieldEducation = screen.getByRole('group');

    expect(fieldEducation).toBeInTheDocument();
  });

  test('expeact a FieldExperience component to be created with a ButtonAdd component', () => {
    render(<FieldEducation />);

    const buttonAdd = screen.getByText('add');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveProperty('type', 'button');
    expect(buttonAdd).toHaveValue('add');
  });
});
