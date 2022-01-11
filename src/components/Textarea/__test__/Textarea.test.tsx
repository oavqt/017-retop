import { render, screen } from '@testing-library/react';
import Textarea from '../Textarea';

describe('Textarea component', () => {
  test('expect a Textarea component to be created', () => {
    render(<Textarea placeholder='test' />);

    const textarea = screen.getByPlaceholderText('test');

    expect(textarea).not.toBeInTheDocument;
  });

  test('expect a Textarea component with type, placeholder, and etc... attrs', () => {
    render(<Textarea placeholder='placeholder' />);

    const textarea = screen.getByPlaceholderText(
      'placeholder'
    ) as HTMLInputElement;

    expect(textarea.placeholder).toBe('placeholder');
  });
});
