import { Component, ReactNode } from 'react';
import ButtonStyled from './Button.styled';
import ButtonProps from './interfaces/Button.interfaces';

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <ButtonStyled attrs={{ ...this.props.attrs }}>
        {this.props.children}
      </ButtonStyled>
    );
  }
}

export default Button;
