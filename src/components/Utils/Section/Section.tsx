import { Component, ReactNode } from 'react';
import SectionProps from './interfaces/Section.interfaces';
import SectionStyled from './Section.styled';

class Section extends Component<SectionProps> {
  render(): ReactNode {
    return (
      <SectionStyled
        mobile={{ ...this.props.mobile }}
        styled={{ ...this.props.styled }}
        rtlTestID={{ ...this.props.rtlTestID }}
      >
        {this.props.children}
      </SectionStyled>
    );
  }
}

export default Section;
