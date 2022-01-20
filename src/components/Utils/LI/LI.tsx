import { Component, ReactNode } from 'react';
import LIStyled from './Li.styled';

class LI extends Component {
  render(): ReactNode {
    return <LIStyled>{this.props.children}</LIStyled>;
  }
}

export default LI;
