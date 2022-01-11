import { render, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input component', () => {
  test('expect a Input component to be created', () => {
    render(<Input placeholder='test' />);
    const input = screen.getByPlaceholderText('test');
    expect(input).not.toBeInTheDocument;
  });

  test('expect a Input component with type, placeholder, and etc... attrs', () => {
    render(<Input type='text' placeholder='placeholder' />);

    const input = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;

    expect(input.type).toBe('text');
    expect(input.placeholder).toBe('placeholder');
  });
});
