import { render, screen } from '@testing-library/react';
import Label, { LabelFile } from '../Label';

describe('Label component', () => {
  test('expect a Label component to be created', () => {
    render(<Label>Personal Information</Label>);

    const label = screen.getByText('Personal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with text', () => {
    render(<Label text='Personal Information' />);

    const label = screen.getByText('Personal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(<Label attrs={{ htmlFor: 'for' }}>Personal Information</Label>);

    const label = screen.getByText('Personal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});

describe('LabelFile component', () => {
  test('expect a Label component to be created', () => {
    render(<LabelFile>Personal Information</LabelFile>);

    const label = screen.getByText('Personal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a LabelFile component with text', () => {
    render(<LabelFile text='Personal Information' />);

    const label = screen.getByText('Personal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(
      <LabelFile attrs={{ htmlFor: 'for' }}>Personal Information</LabelFile>
    );

    const label = screen.getByText('Personal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});
