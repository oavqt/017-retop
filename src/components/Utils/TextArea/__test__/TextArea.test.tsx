import { render, screen } from '@testing-library/react';
import TextArea from '../TextArea';

describe('TextArea component', () => {
  test('expect a TextArea component to be created', () => {
    render(<TextArea attrs={{ placeholder: 'placeholder' }} />);

    const textarea = screen.getByPlaceholderText('placeholder');

    expect(textarea).toBeInTheDocument();
  });

  test('expect a TextArea component with name, placeholder, and etc... attrs', () => {
    render(
      <TextArea
        attrs={{ name: 'name', placeholder: 'placeholder', value: 'value' }}
      />
    );

    const textarea = screen.getByPlaceholderText('placeholder');

    expect(textarea).toHaveAttribute('name', 'name');
    expect(textarea).toHaveAttribute('placeholder', 'placeholder');
    expect(textarea).toHaveValue('value');
  });
});
