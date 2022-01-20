import { Component, ReactNode } from 'react';
import H1Styled from './H1.styled';

class H1 extends Component {
  render(): ReactNode {
    return <H1Styled>{this.props.children}</H1Styled>;
  }
}

export default H1;
