import { Component, ReactNode } from 'react';
import DivStyled from './Div.styled';
import DivProps from './interfaces/Div.interfaces';

class Div extends Component<DivProps> {
  render(): ReactNode {
    return (
      <DivStyled styled={{ ...this.props.styled }}>
        {this.props.children}
      </DivStyled>
    );
  }
}

export default Div;
