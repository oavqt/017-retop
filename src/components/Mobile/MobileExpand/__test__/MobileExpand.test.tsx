import { render, screen } from '@testing-library/react';
import MobileExpand from '../MobileExpand';

describe('MobileExpand component', () => {
  test('expect a MobileExpand component to be created', () => {
    render(<MobileExpand rtlTestID={{ mobile: 'mobile' }} />);

    const mobileExpand = screen.getByTestId('mobile');

    expect(mobileExpand).toBeInTheDocument();
  });

  test('expect a MobileExpand component to be created with a ButtonExpand', () => {
    render(<MobileExpand />);

    const buttonExpand = screen.getByRole('button', { hidden: true });

    expect(buttonExpand).toBeInTheDocument();
  });
});
