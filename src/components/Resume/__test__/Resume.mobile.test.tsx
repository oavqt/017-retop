import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resume from '../Resume';

describe('mobile', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });
  });

  test('expect the MobileExpand components ButtonExpand component to switch the display type of the Header, Footer, Form, and Preview components', () => {
    render(
      <Resume
        rtlTestID={{
          mobile: 'mobile',
          preview: 'preview',
          section: {
            form: 'sectionform'
          }
        }}
      />
    );

    const buttonExpand = screen.getByText('preview');

    const header = screen.getByRole('banner');
    const footer = screen.getByRole('contentinfo');
    const form = screen.getByTestId('sectionform');
    const preview = screen.getByTestId('preview');

    userEvent.click(buttonExpand);

    expect(header).toHaveStyle('display: none');
    expect(footer).toHaveStyle('display: none');
    expect(form).toHaveStyle('display: none');
    expect(preview).toHaveStyle('display: block');

    userEvent.click(buttonExpand);

    expect(header).toHaveStyle('display: block');
    expect(footer).toHaveStyle('display: block');
    expect(form).toHaveStyle('display: block');
    expect(preview).toHaveStyle('display: none');
  });
});
