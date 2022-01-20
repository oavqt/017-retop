import { Component, ReactNode } from 'react';
import H2Styled from './H2.styled';

class H2 extends Component {
  render(): ReactNode {
    return <H2Styled>{this.props.children}</H2Styled>;
  }
}

export default H2;
