import { Component, ReactNode } from 'react';
import ParagraphStyled from './Paragraph.styled';

class Paragraph extends Component {
  render(): ReactNode {
    return <ParagraphStyled>{this.props.children}</ParagraphStyled>;
  }
}

export default Paragraph;
