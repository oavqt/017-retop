import { ReactNode } from 'react';
import Button from '../Button';
import ButtonResetStyled from './ButtonReset.styled';

class ButtonReset extends Button {
  render(): ReactNode {
    return (
      <ButtonResetStyled attrs={{ ...this.props.attrs }}>
        {this.props.children}
      </ButtonResetStyled>
    );
  }
}

export default ButtonReset;
