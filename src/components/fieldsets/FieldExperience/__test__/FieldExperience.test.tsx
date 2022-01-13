import { render, screen } from '@testing-library/react';
import FieldExperience from '../FieldExperience';

describe('FieldExperience component', () => {
  test('expect a FieldExperience component to be created', () => {
    render(<FieldExperience />);

    const fieldExperience = screen.getByRole('group');

    expect(fieldExperience).toBeInTheDocument();
  });
});
