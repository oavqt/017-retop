import { screen, render } from '@testing-library/react';
import InputFile from '../InputFile';

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
