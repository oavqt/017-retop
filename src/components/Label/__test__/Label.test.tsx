import { render, screen } from '@testing-library/react';
import Label from '../Label';

describe('Label component', () => {
  test('expect a Label component to be created', () => {
    render(<Label>Personal Information</Label>);

    const label = screen.getByText('Personal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(<Label htmlFor='for'>Personal Information</Label>);

    const label = screen.getByText('Personal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});
