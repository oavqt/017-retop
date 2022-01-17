import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  test('expect a Form component to be created', () => {
    render(<Form attrs={{ rtlTestID: { form: 'form' } }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  test('expect three fieldset components to be in the Form component', () => {
    render(<Form />);

    const fieldsets = screen.getAllByRole('group');

    expect(fieldsets).toHaveLength(3);
  });
});
