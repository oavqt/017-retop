import { ReactNode } from 'react';
import Button from '../Button';
import ButtonAddStyled from './ButtonAdd.styled';

class ButtonAdd extends Button {
  render(): ReactNode {
    return (
      <ButtonAddStyled
        attrs={{ ...this.props.attrs }}
        onClick={() =>
          this.props.event?.btnAddEvent &&
          this.props.event?.btnAddEvent(this.props.group ?? '')
        }
      >
        {this.props.children}
      </ButtonAddStyled>
    );
  }
}

export default ButtonAdd;
