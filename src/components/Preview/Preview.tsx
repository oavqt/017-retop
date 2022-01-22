import { Component, ReactNode } from 'react';
import Div from '../Utils/Div/Div';
import PreviewProps from './interfaces/Preview.interfaces';
import PreviewStyled from './Preview.styled';
import PreviewEducation from './PreviewEducation/PreviewEducation';
import PreviewExperience from './PreviewExperience/PreviewExperience';
import PreviewPersonalAbout from './PreviewPersonal/PreviewPersonalAbout/PreviewPersonalAbout';
import PreviewPersonalHeader from './PreviewPersonal/PreviewPersonalHeader/PreviewPersonalHeader';
import PreviewPersonalSide from './PreviewPersonal/PreviewPersonalSide/PreviewPersonalSide';

class Preview extends Component<PreviewProps> {
  constructor(props: PreviewProps) {
    super(props);
  }

  render(): ReactNode {
    const headerProps = {
      first: this.props.values?.personal?.first,
      last: this.props.values?.personal?.last,
      title: this.props.values?.personal?.title
    };

    const aboutProps = {
      about: this.props.values?.personal?.about
    };

    const sideProps = {
      photo: this.props.values?.personal?.photo,
      phone: this.props.values?.personal?.phone,
      email: this.props.values?.personal?.email,
      website: this.props.values?.personal?.website,
      github: this.props.values?.personal?.github,
      linkedin: this.props.values?.personal?.linkedin
    };

    return (
      <PreviewStyled attrs={{ ...this.props.attrs }}>
        <Div>
          <PreviewPersonalHeader personal={{ ...headerProps }} />
          <PreviewPersonalAbout personal={{ ...aboutProps }} />
          <PreviewPersonalSide personal={{ ...sideProps }} />
          <PreviewExperience
            experience={{ ...this.props.values?.experience }}
          />
          <PreviewEducation education={{ ...this.props.values?.education }} />
        </Div>
      </PreviewStyled>
    );
  }
}

export default Preview;
