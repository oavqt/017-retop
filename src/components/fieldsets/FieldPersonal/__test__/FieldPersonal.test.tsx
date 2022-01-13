import { render, screen } from '@testing-library/react';
import FieldPersonal from '../FieldPersonal';

describe('FieldPersonal component', () => {
  test('expect a FieldPersonal component to be created', () => {
    render(<FieldPersonal />);

    const fieldPersonal = screen.getByRole('group');

    expect(fieldPersonal).toBeInTheDocument();
  });
});
