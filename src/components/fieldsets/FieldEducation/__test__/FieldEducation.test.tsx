import { render, screen } from '@testing-library/react';
import FieldEducation from '../FieldEducation';

describe('FieldEducation component', () => {
  test('expect a FieldEducation component to be created', () => {
    render(<FieldEducation />);

    const fieldEducation = screen.getByRole('group');

    expect(fieldEducation).toBeInTheDocument();
  });
});
