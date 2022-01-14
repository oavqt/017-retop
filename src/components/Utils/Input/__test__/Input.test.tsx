import { render, screen } from '@testing-library/react';
import Input, { InputFile } from '../Input';

describe('Input component', () => {
  test('expect a Input component to be created', () => {
    render(<Input attrs={{ placeholder: 'placeholder' }} />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toBeInTheDocument();
  });

  test('expect a Input component with type, placeholder, and etc... attrs', () => {
    render(<Input attrs={{ type: 'text', placeholder: 'placeholder' }} />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'placeholder');
  });
});

describe('InputFile component', () => {
  test('expect a Input component to be created', () => {
    render(<InputFile attrs={{ type: 'file', placeholder: 'placeholder' }} />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toBeInTheDocument();
  });

  test('expect a Input component with type, placeholder, and etc... attrs', () => {
    render(<InputFile attrs={{ type: 'file', placeholder: 'placeholder' }} />);

    const input = screen.getByPlaceholderText('placeholder');

    expect(input).toHaveAttribute('type', 'file');
    expect(input).toHaveAttribute('placeholder', 'placeholder');
  });
});
