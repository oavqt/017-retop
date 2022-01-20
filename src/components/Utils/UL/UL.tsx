import { Component, ReactNode } from 'react';
import ULStyled from './UL.styled';
import ULProps from './interfaces/UL.interfaces';

class UL extends Component<ULProps> {
  render(): ReactNode {
    return (
      <ULStyled styled={{ ...this.props.styled }}>
        {this.props.children}
      </ULStyled>
    );
  }
}

export default UL;
