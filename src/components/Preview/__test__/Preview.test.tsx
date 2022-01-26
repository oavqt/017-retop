import { render, screen } from '@testing-library/react';
import Preview from '../Preview';

describe('Preview component', () => {
  test('expect a Preview component to be created', () => {
    render(<Preview rtlTestID={{ preview: 'preview' }} />);

    const preview = screen.getByTestId('preview');

    expect(preview).toBeInTheDocument();
  });
});
