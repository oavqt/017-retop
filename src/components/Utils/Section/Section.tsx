import { Component, ReactNode } from 'react';
import SectionStyled from './Section.styled';

class Section extends Component {
  render(): ReactNode {
    return <SectionStyled>{this.props.children}</SectionStyled>;
  }
}

export default Section;
