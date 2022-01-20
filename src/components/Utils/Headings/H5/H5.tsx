import { Component, ReactNode } from 'react';
import H5Styled from './H5.styled';

class H5 extends Component {
  render(): ReactNode {
    return <H5Styled>{this.props.children}</H5Styled>;
  }
}

export default H5;
