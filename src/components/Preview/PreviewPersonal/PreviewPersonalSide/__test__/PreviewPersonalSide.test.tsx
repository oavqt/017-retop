import { render, screen } from '@testing-library/react';
import PreviewPersonalSide from '../PreviewPersonalSide';

describe('PreviewPersonalSide', () => {
  const previewPerSideTest = (side: {
    address: string;
    email: string;
    phone: string;
  }) => render(<PreviewPersonalSide personal={{ ...side }} />);

  test('expect a PreviewPersonalSide component to be created', () => {
    render(<PreviewPersonalSide />);

    const previewPerSideContact = screen.getByText('contact');

    const previewPerSideImage = screen.getByRole('img');

    const previewPerSideAddress = screen.getByText('address');
    const previewPerSideEmail = screen.getByText('email');
    const previewPerSidePhone = screen.getByText('phone');

    expect(previewPerSideContact).toBeInTheDocument();
    expect(previewPerSideImage).toBeInTheDocument();
    expect(previewPerSideAddress).toBeInTheDocument();
    expect(previewPerSideEmail).toBeInTheDocument();
    expect(previewPerSidePhone).toBeInTheDocument();
  });

  test('expect a PreviewPersonalSide component to be created with p tags that match the address, email, and phone number props', () => {
    const previewPerSideProps = {
      address: 'i hecking love emma watson --p1',
      email: 'i hecking love emma watson --p2',
      phone: 'i hecking love emma watson --p3'
    };

    previewPerSideTest(previewPerSideProps);

    const previewPerSideAddress = screen.getByText(previewPerSideProps.address);
    const previewPerSideEmail = screen.getByText(previewPerSideProps.email);
    const previewPerSidePhone = screen.getByText(previewPerSideProps.phone);

    expect(previewPerSideAddress).toBeInTheDocument();
    expect(previewPerSideEmail).toBeInTheDocument();
    expect(previewPerSidePhone).toBeInTheDocument();
  });
});
