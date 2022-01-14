import { render, screen } from '@testing-library/react';
import FormPersonal from '../FormPersonal';

describe('FormPersonal component', () => {
  test('expect a FormPersonal component to be created', () => {
    render(<FormPersonal />);

    const fieldPersonal = screen.getByRole('group');

    expect(fieldPersonal).toBeInTheDocument();
  });
});
