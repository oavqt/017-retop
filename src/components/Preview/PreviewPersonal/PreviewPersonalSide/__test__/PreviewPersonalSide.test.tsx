import { render, screen } from '@testing-library/react';
import PreviewPersonalSide from '../PreviewPersonalSide';

describe('PreviewPersonalSide', () => {
  const previewPerSideTest = (side: {
    phone: string;
    email: string;
    website: string;
    github: string;
    linkedin: string;
  }) => render(<PreviewPersonalSide personal={{ ...side }} />);

  test('expect a PreviewPersonalSide component to be created', () => {
    render(<PreviewPersonalSide />);

    const previewPerSideContact = screen.getByText('contact ⤦/');

    const previewPerSideImage = screen.getByRole('img');

    const previewPerSidePhone = screen.getByText('phone ⤦/');
    const previewPerSideEmail = screen.getByText('email ⤦/');
    const previewPerSideWebsite = screen.getByText('website ⤦/');
    const previewPerSideGithub = screen.getByText('github ⤦/');
    const previewPerSideLinkedin = screen.getByText('linkedin ⤦/');

    expect(previewPerSideContact).toBeInTheDocument();
    expect(previewPerSideImage).toBeInTheDocument();
    expect(previewPerSidePhone).toBeInTheDocument();
    expect(previewPerSideEmail).toBeInTheDocument();
    expect(previewPerSideWebsite).toBeInTheDocument();
    expect(previewPerSideGithub).toBeInTheDocument();
    expect(previewPerSideLinkedin).toBeInTheDocument();
  });

  test('expect a PreviewPersonalSide component to be created with p tags that match the phone, email, website, github, and linkedin props', () => {
    const previewPerSideProps = {
      phone: 'i hecking love emma watson --p1',
      email: 'i hecking love emma watson --p2',
      website: 'i hecking love emma watson --p3',
      github: 'i hecking love emma watson --p4',
      linkedin: 'i hecking love emma watson --p5'
    };

    previewPerSideTest(previewPerSideProps);

    const previewPerSidePhone = screen.getByText(previewPerSideProps.phone);
    const previewPerSideEmail = screen.getByText(previewPerSideProps.email);
    const previewPerSideWebsite = screen.getByText(previewPerSideProps.website);
    const previewPerSideGithub = screen.getByText(previewPerSideProps.github);
    const previewPerSideLinkedin = screen.getByText(
      previewPerSideProps.linkedin
    );

    expect(previewPerSidePhone).toBeInTheDocument();
    expect(previewPerSideEmail).toBeInTheDocument();
    expect(previewPerSideWebsite).toBeInTheDocument();
    expect(previewPerSideGithub).toBeInTheDocument();
    expect(previewPerSideLinkedin).toBeInTheDocument();
  });
});
