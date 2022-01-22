import { render, screen } from '@testing-library/react';
import PreviewPersonalHeader from '../PreviewPersonalHeader';

describe('PreviewPersonalHeader', () => {
  const previewPerHeaderTest = (header: { first: string; title: string }) =>
    render(<PreviewPersonalHeader personal={{ ...header }} />);

  test('expect a PreviewPersonalHeader component to be created', () => {
    render(<PreviewPersonalHeader />);

    const previewPerHeader = screen.getByRole('banner');
    const previewPerHeaders = screen.getAllByRole('heading');

    expect(previewPerHeader).toBeInTheDocument();
    expect(previewPerHeaders).toHaveLength(2);
  });

  test('expect a PreviewPersonalHeader component to be created with a h1 and a h2 that match the first name and title personal props', () => {
    const previewPerHeaderProps = {
      first: 'i hecking love emma watson --h1',
      last: 'i hecking love emma watson --h1',
      title: 'i hecking love emma watson --h2'
    };

    previewPerHeaderTest(previewPerHeaderProps);

    const previewPerHeaderFirstLast = screen.getByText(
      `${previewPerHeaderProps.first} ${previewPerHeaderProps.last}`
    );
    const previewPerHeaderTitle = screen.getByText(previewPerHeaderProps.title);

    expect(previewPerHeaderFirstLast).toBeInTheDocument();
    expect(previewPerHeaderTitle).toBeInTheDocument();
  });
});
