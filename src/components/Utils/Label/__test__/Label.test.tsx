import { render, screen } from '@testing-library/react';
import Label, { LabelFile } from '../Label';

describe('Label component', () => {
  test('expect a Label component to be created', () => {
    render(<Label>FormPersonal Information</Label>);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with text', () => {
    render(<Label text='FormPersonal Information' />);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(<Label attrs={{ htmlFor: 'for' }}>FormPersonal Information</Label>);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});

describe('LabelFile component', () => {
  test('expect a Label component to be created', () => {
    render(<LabelFile>FormPersonal Information</LabelFile>);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a LabelFile component with text', () => {
    render(<LabelFile text='FormPersonal Information' />);

    const label = screen.getByText('FormPersonal Information');

    expect(label).toBeInTheDocument();
  });

  test('expect a Label component with form, for, and etc... attrs', () => {
    render(
      <LabelFile attrs={{ htmlFor: 'for' }}>FormPersonal Information</LabelFile>
    );

    const label = screen.getByText('FormPersonal Information');

    expect(label).toHaveAttribute('for', 'for');
  });
});
