import { render, screen } from '@testing-library/react';
import Resume from '../Resume';

describe('Resume component', () => {
  test('expect a Resume component to be created', () => {
    render(<Resume />);

    const resume = screen.getByRole('main');

    expect(resume).toBeInTheDocument();
  });

  test('expect a Form component to be in the Resume component', () => {
    render(<Resume form={{ attrs: { rtlTestID: { form: 'form' } } }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  test('expect a Preview component to be created', () => {
    render(
      <Resume preview={{ attrs: { rtlTestID: { preview: 'preview' } } }} />
    );

    const preview = screen.getByTestId('preview');

    expect(preview).toBeInTheDocument();
  });
});
