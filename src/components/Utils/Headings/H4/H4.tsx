import { Component, ReactNode } from 'react';
import H4Styled from './H4.styled';

class H4 extends Component {
  render(): ReactNode {
    return <H4Styled>{this.props.children}</H4Styled>;
  }
}

export default H4;
