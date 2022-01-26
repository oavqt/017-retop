import { render, screen } from '@testing-library/react';
import Img from '../Img';

describe('Img component', () => {
  const imgPropsTest = (imgProps: { alt: string; src: string }) =>
    render(<Img attrs={{ ...imgProps }} />);

  test('expect a Img component to be created', () => {
    render(<Img />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });

  test('expect a Img component to be created containing passed in props', () => {
    const imgProps = {
      alt: 'dieu te bénisse',
      src: 'dieu te bénisse'
    };

    imgPropsTest(imgProps);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('alt', imgProps.alt);
    expect(img).toHaveAttribute('src', imgProps.src);
  });
});
