import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  test('expect a Button component to be created', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('expect a Button component with type, value, and etc... attrs', () => {
    render(
      <Button
        attrs={{
          type: 'type',
          value: 'value'
        }}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'type');
    expect(button).toHaveAttribute('value', 'value');
  });
});
