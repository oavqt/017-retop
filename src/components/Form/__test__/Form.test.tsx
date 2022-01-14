import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form component', () => {
  test('expect a Form component to be created', () => {
    render(<Form />);

    const fieldsets = screen.getAllByRole('group');

    expect(fieldsets).toHaveLength(3);
  });
});
