import { render, screen } from '@testing-library/react';
import LabelFile from '../LabelFile';

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
