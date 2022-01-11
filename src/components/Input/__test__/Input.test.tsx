import { render, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input component', () => {
  test('expect a Input component to be created', () => {
    render(<Input placeholder='placeholder' />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toBeInTheDocument();
  });

  test('expect a Input component with type, placeholder, and etc... attrs', () => {
    render(<Input type='text' placeholder='placeholder' />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'placeholder');
  });
});
