import { Component, ReactNode } from 'react';
import H3Styled from './H3.styled';

class H3 extends Component {
  render(): ReactNode {
    return <H3Styled>{this.props.children}</H3Styled>;
  }
}

export default H3;
