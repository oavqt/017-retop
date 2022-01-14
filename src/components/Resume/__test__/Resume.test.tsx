import { render, screen } from '@testing-library/react';
import Resume from '../Resume';

describe('Resume component', () => {
  test('expect a Resume component to be created', () => {
    render(<Resume />);

    const resume = screen.getByRole('main');

    expect(resume).toBeInTheDocument();
  });

  test('expect a Form component to be in the Resume component', () => {
    render(<Resume form={{ attrs: { ['data-testid']: 'form' } }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });
});
