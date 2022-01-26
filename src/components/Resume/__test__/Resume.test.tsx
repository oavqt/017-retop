import { render, screen } from '@testing-library/react';
import Resume from '../Resume';

describe('Resume component', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });
  });

  test('expect a Resume component to be created', () => {
    render(<Resume />);

    const resume = screen.getByRole('main');

    expect(resume).toBeInTheDocument();
  });

  test('expect a Form component to be in the Resume component', () => {
    render(<Resume rtlTestID={{ form: 'form' }} />);

    const form = screen.getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  test('expect a Preview component to be created', () => {
    render(<Resume rtlTestID={{ preview: 'preview' }} />);

    const preview = screen.getByTestId('preview');

    expect(preview).toBeInTheDocument();
  });
});
