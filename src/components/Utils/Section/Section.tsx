import { Component, ReactNode } from 'react';
import SectionProps from './interfaces/Section.interfaces';
import SectionStyled from './Section.styled';

class Section extends Component<SectionProps> {
  render(): ReactNode {
    return (
      <SectionStyled styled={{ ...this.props.styled }}>
        {this.props.children}
      </SectionStyled>
    );
  }
}

export default Section;
