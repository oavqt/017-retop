import { render, screen } from '@testing-library/react';
import Legend from '../Legend';

describe('Legend component', () => {
  test('expect a Legend component to be created', () => {
    render(<Legend attrs={{ title: 'title' }} />);

    const legend = screen.getByTitle('title');

    expect(legend).toBeInTheDocument();
  });
});
